const { I } = inject();

class HomePage {

  locs = {
    btnAgreeCookies: 'button[data-testid="accept-cookies-button"]',
    btnViewAllPsychics: 'a[data-testid="cta-button-to-live-search"]',
    btnHeaderSearch: 'div[data-testid="button-header-search"] a > div:first-of-type',
    cardLiveProfile: 'div[data-testid="live-status-box"]'
  }

  async openHome(url, expectedTitle) {
    I.amOnPage(url);
    I.grabDataFromPerformanceTiming();
    I.click(this.locs.btnAgreeCookies);
    I.see(expectedTitle);
  }

  pressHeaderSearchButton() {
    I.click(this.locs.btnHeaderSearch);
  }

  pressCardOfALivePsychicAvailable() {
    I.waitForElement(this.locs.cardLiveProfile, 10);
    I.forceClick(this.locs.cardLiveProfile);
  }

  scrollIntoViewAllLivePsychics() {
    I.scrollTo(this.locs.btnViewAllPsychics);
    I.seeElement(this.locs.btnViewAllPsychics);
  }

  pressViewAllLivePsychics() {
    let buttonName = "view all live psychics";
    I.click(buttonName, this.locs.btnViewAllPsychics);
  }

}
module.exports = new HomePage();