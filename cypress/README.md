# Wallee.com
This repo contains e2e tests written in Cypress for wallee.com application


## Run Tests
To run E2E tests in interactive mode use following command

`npx cypress open`



## Patterns
Despite what Cypress says, Page Pattern Model is used because it improves code readability.
- Page pattern is used and every page at [wallee.com](https://woocommerce.showcase-wallee.com/) is represented as a single class
- As the test usecases are limited, only one command was added `Cypress.Commands.add('getiframe')
- Data is fed from fixtures > -address.json and coupon.json 

## Pre-requisit
- node.js is installed in your system(version 14 or above)
- npm is installed by defalut if node.js is installed.(version 6 or above)

## Installation
- run command: - npm init
- install cypress: npm install cypress@@12.17.2

## Dependencies

- mocha-allure-reporter: ^1.4.0
- allure-commandline:^2.24.1
- @shelex/cypress-allure-plugin": "^2.40.0"
- cypress-xpath: ^2.0.1


# Scripts
- To run all scripts at once: npm run test-regression





## Feedback

If you have any feedback, please reach out to us at mailtomasand@gmail.com
