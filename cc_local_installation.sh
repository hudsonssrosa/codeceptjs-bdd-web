#!/bin/bash

# Install CodeceptJs - Dev dependencies (including Allure)
# brew install node
npm install -g npm
npm init -y
npm install -g dotenv
npm install --save-dev typescript
npm install --save-dev puppeteer
npm install codeceptjs playwright --save-dev
npm install -g allure-commandline --save-dev
npm i @codeceptjs/ui --save
# npx codeceptjs init

# Run a single scenario to check if everything works:
npx codeceptjs run --features --steps --grep '@view-all-live'

