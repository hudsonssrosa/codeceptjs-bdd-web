const { I, homePage, profilePage } = inject();


Given('that a live profile is open', () => {
  homePage.pressCardOfALivePsychicAvailable();
  profilePage.verifyLiveChatOpen();
});

When('I press to get free coins', () => {
  profilePage.pressGetCredits();
});

When('I press add to favorites', () => {
  profilePage.pressAddToFavorites();
});

When('I press to get a surprise {word}', (model) => {
  profilePage.pressOranumSuprise(model);
});

When('I press to buy credits', () => {
  profilePage.pressQuickBuy();
});

When('I press send a message', () => {
  profilePage.pressSendMessage();
});

When('I press to start session', () => {
  profilePage.pressSendMessage();
});

Then('a sign up modal is showed', () => {
  profilePage.validateSignUpForFreeDisplayed();
});

