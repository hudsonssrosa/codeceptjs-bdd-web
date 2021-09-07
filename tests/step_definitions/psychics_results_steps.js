const { I, homePage, resultsPage } = inject();
const assert = require('assert');


Given('that all the live psychics are viewed', () => {
  homePage.scrollIntoViewAllLivePsychics();
  homePage.pressViewAllLivePsychics();
});

When('I verify all the psychic profile nicknames', () => {
  resultsPage.grabAllPsychicsNamesDisplayed()
});

Then('each profile is displayed without duplicates', async () => {
  var psychicNames = await resultsPage.grabAllPsychicsNamesDisplayed();
  var uniqueNames = psychicNames.filter((thatValue, iterIndex) => psychicNames.indexOf(thatValue) === iterIndex)

  var noDuplicatesExpected = false;
  var hasDuplicates = psychicNames.length != uniqueNames.length;
  assert.strictEqual(hasDuplicates, noDuplicatesExpected);
});

Then('all psychic pictures are displayed', async () => {
  var totalPsychics = await resultsPage.grabAllPsychicsNamesDisplayed();
  resultsPage.validatePicturesFromPsychics(totalPsychics.length)
});

Then('psychics are showed with different status:', (table) => {
  for (let id in table.rows) {
    if (id < 1) {
      continue;
    };
    const cells = table.rows[id].cells;
    const status = cells[0].value;
    
    resultsPage.validateLiveStatus(status);
    resultsPage.validateOfflineStatus(status);
    resultsPage.validateBadgeBusyStatus(status);
  }
});

Then(/^the "(.*)" match the current topic$/, async (profileMatch) => {
  var psychicsResult = await resultsPage.grabAllPsychicsNamesDisplayed();
  var partialText = new RegExp(profileMatch, 'i');
  var matchersOnly = [];

  for (let i = 0; i < psychicsResult.length; i++) {
    var found = psychicsResult[i].trim()
    if (psychicsResult[i].match(partialText)){
      matchersOnly.push(found);
      resultsPage.validateAnExpectedPsychic(found);
    }
  }
  const areThereNoMatch = matchersOnly.length == 0;
  assert.strictEqual(areThereNoMatch, false, "No profiles matching the partial name: " + profileMatch);
});



