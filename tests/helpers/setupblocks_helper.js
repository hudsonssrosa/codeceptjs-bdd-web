const Helper = require('@codeceptjs/helper');
const execSync = require('child_process').execSync;
const utf8 = { encoding: 'utf-8' };
let state = {}

class SetupBlocks extends Helper {


  /**
   * @protected
   */
  _init() {
    execSync('rm -rf output/*', utf8);
    execSync('rm -rf allure-results/*', utf8);
  }

  _before(test) {
    state = {};
  }

  /**
   * @protected
   */
  _finishTest() {
    execSync('allure serve output', utf8);
  }

  // use: this.helpers['helperName']

}

module.exports = SetupBlocks;
