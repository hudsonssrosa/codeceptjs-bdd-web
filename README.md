# codeceptjs-bdd-web

RECOMMENDED SECTIONS TO READ AND FOLLOW:
    - 1. Clone this project from [GitHub]
    - 2. Install this project from the ground up locally
    - 3. Run the tests locally
    - 4. Run dockerized tests (RECOMMENDED)

## 1. Clone this project from [GitHub](https://github.com/hudsonssrosa/codeceptjs-bdd-web)

Into your own local repository with Git initialized, clone the **codeceptjs-bdd-web** by running this command:

```bash
    cd ./your-own-local-repo/
    git clone git@github.com:hudsonssrosa/codeceptjs-bdd-web.git
```

## 2. Install this project from the ground up locally

In a terminal, into the `./codeceptjs-bdd-web/` directory, run the shell script `./cc_local_installation.sh` to get installed CodeceptJS with Playwright and Allure Report as the minimum requirements for tests on BDD approach (with Gherkin already added in the `codecept.conf.js`):

- For MacOS and Linux:

```bash
    cd codeceptjs-bdd-web/
    sh cc_local_installation.sh
```

- For Windows 10:

```bash
    cd codeceptjs-bdd-web/
    ./cc_local_installation.sh
```

After the successful installation of all dependencies, a single scenario will be automatically started in your machine to check if everything is working as expected.

## 3. Run the tests locally

First, decide a way that you are going to run the tests. If you need to set another specific browser, you also have the options such as Cromium `chromium`, Firefox `firefox` or Webkit `webkit`. By default, the browser is **`firefox`** using Playwright, but you can set those values in the `codecept.conf.js` with headless mode or showing the browser if you want.

For now, you could ignore these changes:

```javascript
    helpers: {
        Playwright: {
            url: 'http://localhost',
            show: false, // Change it to "true" if you don't want a Headless mode
            browser: 'firefox',
            waitForNavigation: "networkidle0"
        }
    }
```

Then, ensure that you are into the `./codeceptjs-bdd-web/` directory and run **ALL THE TESTS** through the `run_tests_locally` script:

- For MacOS and Linux:

```bash
    cd codeceptjs-bdd-web/
    sh run_tests_locally.sh
```

- For Windows 10:

```bash
    cd codeceptjs-bdd-web/
    ./run_tests_locally.sh
```

Now you have all the tests running locally. Optionally, you can customise your execution as showed in the next sections: 3.1, 3.2 and 3.3. But if you are facing issues in execute this project in your machine, you have an alternative using Docker. So, please, go directly to section 4 and get all the instructions for it.

### 3.1. (OPTIONAL) Do you want to execute using a specific feature / scenario tag?

You can also run just one feature / scenario. So, copy an existing **TAG** from Gherkin scenarios and paste into the command as first argument, with or without `@`, as showed below:

```bash
    sh run_tests_locally.sh <PASTE_THE_TAG_HERE>

    # example:
    #   sh run_tests_locally.sh @no-duplicate-psychics
    #   sh run_tests_locally.sh no-duplicate-psychics
```

- To make this easier, get one of these tags available:
  
```Gherkin
    ALL FEATURES:
        @acceptance

        FEATURE 1: 
            @view-all-psychics
            SCENARIOS:
                @view-all-live
                @no-duplicate-psychics
                @psychic-pictures
                @psychic-status

        FEATURE 2:
            @search-filtering
            SCENARIOS:
                @searching-results-dropdown

        FEATURE 3:
            @specific-search
            SCENARIOS:
                @filtering-by-full-name

        FEATURE 4:
            @psychic-livestream
            SCENARIOS:
                @signup-to-get-credits
                @signup-to-add-favorites
                @signup-to-a-suprise-model
                @signup-to-buy-credits
                @signup-to-messenger

        FEATURE 5:
            @psychics-by-topic
            SCENARIOS:
                @topic-results
```

After finishing the execution, if you want to check the results, an Allure Report will be automatically generated and opened in a web browser.

### 3.2. (OPTIONAL) Do you want to execute using an interactive GUI with Codecept UI?

Just call the script passing the argument `ccui`. The benefit is that you can find scenarios, play, see the runtime event logs and stop them in a visual way throught the web browser:

```bash
    sh run_tests_locally.sh ccui
```

### 3.3. (OPTIONAL) Do you want to execute tests in multiple browsers?

Inform the argument `multi`. You are able to run in at least 3 different browsers supported with Playwright: Chromium, Firefox and PW-Webkit. You may have flaky tests in this case (stable browsers on execution is not guaranteed depending on the OS):

```bash
    sh run_tests_locally.sh multi
```

```bash
    sh run_tests_locally.sh <PASTE_THE_TAG_HERE> multi
```

## 4. Run dockerized tests (RECOMMENDED)

Regarding the environment or OS that you have, probably you might face flaky tests or even have other unexpected errors during the execution for this project. So, as alternative, you can install [Docker and Docker Compose](https://docs.docker.com/desktop/) to ensure an adequate environment for the tests. (For the first time, to build a Docker image and container, probably it may take a long time!)

Having that requirement met, then follow the instructions below to build an image and run automatically the tests considering also strategies to pass `TAGS` (with or without `@`, like those shown previously under Section 3) and / or `CROSSBROWSER=multi`, if you want:

- RECOMMENDED command:

```bash
    cd ./codeceptjs-bdd-web/
    docker-compose run --rm codeceptjs-bdd-web
```

- Other execution ways:

```bash
    # docker-compose run -e CROSSBROWSER=multi --rm codeceptjs-bdd-web
    # docker-compose run -e TAG=<PASTE_THE_TAG_HERE> --rm codeceptjs-bdd-web
    # docker-compose run -e TAG=<PASTE_THE_TAG_HERE> -e CROSSBROWSER=multi --rm codeceptjs-bdd-web
```
