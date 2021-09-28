const { I, homePage, resultsPage } = inject();
const env = require('../helpers/envConfig');


Given('that Oranum website is open', () => {
    homePage.openHome(env.setApp().production.url);
});

Given('that I scroll until the View All Live Psychics', () => {
    homePage.scrollIntoViewAllLivePsychics();
});

When('I access the View All Live Psychics', () => {
    homePage.pressViewAllLivePsychics();
});

When('I choose a "{word}"', (topic) => {
    resultsPage.pressSpecificTopicAtOverview(topic);
});

Then('all the psychics are displayed', () => {
    resultsPage.validateVisiblePsychics();
});
