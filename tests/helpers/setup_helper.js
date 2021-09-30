const Helper = require('@codeceptjs/helper');
const execSync = require('child_process').execSync;
const utf8 = { encoding: 'utf-8' };
const dotenv = require('dotenv');

class SetupHelper extends Helper {

  /**
   * @protected
   */
  _init() {
    execSync('rm -rf output/*', utf8);
    execSync('rm -rf allure-results/*', utf8);
    console.log('Cleaning up output directories: \n- /output \n- /allure-results')
    dotenv.config();
  }


  /**
   * @protected
   */
  _finishTest() {
    execSync('allure serve output', utf8);
  }

  // use: this.helpers['helperName']

}

module.exports = SetupHelper;
