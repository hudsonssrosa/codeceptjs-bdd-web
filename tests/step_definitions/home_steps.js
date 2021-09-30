const { I, homePage, resultsPage } = inject();


Given('that Oranum website is open', () => {
    I.openPage(process.env.PRODUCTION_URL, 'Oranum.com');
    I.acceptCookies();
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
