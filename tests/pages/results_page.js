const { I } = inject();
const timeout = { _5s: 5, _7s: 7, _10s: 10};

class ResultsPage {

  locs = {
    btnTopicsAtViewAll: 'a div[data-testid="filter-text"]'
  }

  resultlocs = {
    lblAllPsychicNames: 'span[data-testid="influencer-name"]',
    imgAllPsychics: 'div[data-testid="card-cover"] picture img[src*=".jpg"]',
    lblBadgeTagOffline: 'div[data-testid="card-badge"] > div *:not(div[data-testid="live-status-box"])',
    lblBadgeTagLive: 'section div[data-testid="card-cover"] div[data-testid="live-status-box"]',
    lblBadgeTagBusy: 'section div[data-testid="card-cover"] div[data-testid="busy-status-box"]'
  }

  searchlocs = {
    txtFindPsychics: 'input[data-testid="filter-text"]',
    lblResultListDropdown: 'div[data-testid="search-result-list"] div[id*="downshift-"] a > div div:nth-child(2) div'
  }

  pressSpecificTopicAtOverview(topicName) {
    I.forceClick(`a[data-testid="${topicName}"] div[data-testid="card-cover"]`);
  }

  typeSearch(profileName) {
    I.fillField(this.searchlocs.txtFindPsychics, profileName);
  }

  pressSearchResultDropdown(profileName) {
    I.waitForElement(this.searchlocs.lblResultListDropdown, timeout._5s);
    I.click(profileName, this.searchlocs.lblResultListDropdown);
  }

  validateDropdownWithSearchResults(profileName) {
    I.waitForElement(this.searchlocs.lblResultListDropdown, timeout._5s);
    I.see(profileName, this.searchlocs.lblResultListDropdown);
  }

  async grabAllPsychicsResultsFromDropdownFilter() {
    I.waitForElement(this.searchlocs.lblResultListDropdown, timeout._5s);
    let psychicsFound = await I.grabTextFromAll(this.searchlocs.lblResultListDropdown);
    return psychicsFound;
  }

  async grabAllPsychicsNamesDisplayed() {
    I.waitForElement(this.resultlocs.lblAllPsychicNames, timeout._10s);
    let allPsychics = await I.grabTextFromAll(this.resultlocs.lblAllPsychicNames);
    return allPsychics;
  }

  async grabTotalNumberOfPsychicsDisplayed() {
    I.waitForElement(this.resultlocs.lblAllPsychicNames, timeout._10s);
    let allPsychics = await I.grabNumberOfVisibleElements(this.resultlocs.lblAllPsychicNames);
    return allPsychics;
  }

  validateAnExpectedPsychic(profileName) {
    I.waitForElement(this.resultlocs.lblAllPsychicNames, timeout._10s);
    I.see(profileName, this.resultlocs.lblAllPsychicNames);
  }

  async validateVisiblePsychics() {
    let psychicNames = await this.grabAllPsychicsNamesDisplayed();
    for (let i = 0; i < psychicNames.length; i++) {
      I.see(psychicNames[i]);
    }
  }

  validatePicturesFromPsychics(totalPsychics) {
    I.seeNumberOfVisibleElements(this.resultlocs.imgAllPsychics, totalPsychics);
  }

  validateLiveStatus(status) {
    if (status == "Live"){
      I.see(status.toUpperCase(), this.resultlocs.lblBadgeTagLive);
    }
  }
  
  validateOfflineStatus(status) {
    if (status == "Offline"){
      I.seeElement(this.resultlocs.lblBadgeTagOffline);
    }
  }
  
  async grabAllBusyStatus() {
    if (I.grabNumberOfVisibleElements(this.resultlocs.lblBadgeTagBusy) > 0) {
      I.waitForElement(this.resultlocs.lblBadgeTagBusy, timeout._5s);
      const allBusyStatuses = await I.grabTextFromAll(this.resultlocs.lblBadgeTagBusy);
      return allBusyStatuses.length;
    }
  }

  async validateBadgeBusyStatus(status) {
    if (status == "Busy"){
      const badgesWithBusy = await this.grabAllBusyStatus();
      var busy = "Busy".toUpperCase();
      if (badgesWithBusy > 0) {
        I.see(busy);
      } else {
        I.dontSee(busy);
      }
    }
  }

}
module.exports = new ResultsPage();