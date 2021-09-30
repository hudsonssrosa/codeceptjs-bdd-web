// const { setHeadlessWhen } = require('@codeceptjs/configure');
// setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: '.tests/*test.+(ts|js)',
  output: './output',
  timeout: 10000,
  name: 'codeceptjs-bdd-web',
  hooks: [],
  bootstrap: null,

  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true, // Set as true to show the tests in browser (without headless)
      browser: 'firefox', // chromium is presenting flaky tests when interacting with video streaming pages
      waitForNavigation: "networkidle0"
    },
    SetupHelper: {
      require: './tests/helpers/setup_helper.js'
    }
  },

  include: {
    I: './steps_file.js',
    homePage: './tests/pages/home_page.js',
    resultsPage: './tests/pages/results_page.js',
    profilePage: './tests/pages/profile_page.js'
  },

  gherkin: {
    features: './tests/features/**/*.feature',
    steps: './tests/step_definitions/*_steps.js'
  },

  mocha: {
    reporterOptions: {
      mochaFile: 'output/result.xml',
      reportDir: 'output'
    }
  },

  plugins: {
    allure: {
      enabled: true,
      outputDir: "./output"
    },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {
      enabled: false
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    stepByStepReport: {
      enabled: false,
      screenshotsForAllureReport: true,
      output: "./output",
      deleteSuccessful: false
    }
  },

  multiple: {

    chromium: {
      "browsers": ["chromium"]
    },
    firefox: {
      "browsers": ["firefox"]
    },
    electron: {
      "browsers": ["electron"]
    },
    webkit: {
      "browsers": ["webkit"]
    },
    parallel: {
      //// Splits tests into chunks
      //// i.e: 2 chunks x 6 browsers = 12 threads
      "chunks": 1,
      //// Run all tests in each browser:
      "browsers": ["chromium", "firefox", "webkit"]
    }
  },
}