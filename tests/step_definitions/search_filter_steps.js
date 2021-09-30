const { I, homePage, resultsPage, profilePage } = inject();
const assert = require('assert');


When('I type "{word}" on search', (name) => {
  homePage.pressHeaderSearchButton();
  resultsPage.typeSearch(name);
});

Then('only names matching the "{word}" are displayed', async (partialResult) => {
  var psychicsFound = await resultsPage.grabAllPsychicsResultsFromDropdownFilter();
  for (let i = 0; i < psychicsFound.length; i++) {
    var partialText = new RegExp(`${partialResult}`, 'i');
    assert.match(psychicsFound[i], partialText);
    resultsPage.validateDropdownWithSearchResults(psychicsFound[i]);
  }
});

Then('only one result is displayed for "{word}"', async (profile) => {
  var psychicsFound = await resultsPage.grabAllPsychicsResultsFromDropdownFilter();
  const oneResultExpected = 1;
  assert.strictEqual(psychicsFound.length, oneResultExpected);
  resultsPage.validateDropdownWithSearchResults(profile);
});

Then('the "{word}" found can be accessed', async (profile) => {
  await resultsPage.pressSearchResultDropdown(profile);
  await profilePage.validateAccessedProfileName(profile);
});
