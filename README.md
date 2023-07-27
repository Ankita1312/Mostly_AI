
# Mostly AI

MOSTLY AI is the pioneering leader in the creation of structured synthetic data using Generative AI. It enables anyone to generate high-quality, production-like synthetic data for smarter AI and smarter testing.

## Testing using Cypress
This repository contains automated tests for Mostly AI, a synthetic data generative platform. The tests are written using Cypress, a popular JavaScript-based end-to-end testing framework.The steps below will take you all the way through Cypress. 
###  Prerequisites
Before running the tests, make sure you have the following installed on your machine:

- Node.js
- Cypress 
### Clone this repository
If you want to run this in your local machine you have to clone this repository.Follow the below steps:


```bash
## clone this repo to a local directory using
git clone  REPOSITORY_ADDRESS>


## cd into the cloned repo
cd Repository_Name
And then go to next steps

```




### Install Cypress
Open a terminal in the root directory of the cloned repository and run the following command to install Cypress:

```bash
npm install cypress --save-dev
```
### Run Cypress Tests
After the installation is complete, you can run the Cypress tests using the following command:

```bash
npx cypress run
```
This will run the Cypress tests headlessly in the command-line mode. The tests will be executed, and you'll see the output and test results directly in the terminal.

Alternatively, if you prefer to use the Cypress Test Runner to view the test execution in the browser, you can use the open command:
```bash
npx cypress open
```
* This will open the Welcome to Cypress and there you can Configure **E2E TESTING**
* Now Select the Chrome Browser and Start you E2E testing
This will open the Cypress Test Runner, and you can click on a test file to run its tests and see the results in the browser.
### Tests
Tests are under the e2e file and screenshots and videos are also added in cypress\screenshots and cypress\videos