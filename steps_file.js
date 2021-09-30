// in this file you can append custom step methods to 'I' object
module.exports = function () {

  const locs = { 'btnAcceptAllCookies': 'Accept All' };

  return actor({

    openPage(url, expectedText = "") {
      this.amOnPage(url);
      this.grabDataFromPerformanceTiming();
      this.see(expectedText);
    },

    acceptCookies() {
      this.click(locs.btnAcceptAllCookies);
    }

  });
}
