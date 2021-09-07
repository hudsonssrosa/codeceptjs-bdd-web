const Helper = require('@codeceptjs/helper');

class TestHelper extends Helper{
  static oranumUrl() {
    return ('https://oranum.com/en/home');
  }
}

module.exports = TestHelper;
