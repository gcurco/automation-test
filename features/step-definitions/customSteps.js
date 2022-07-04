require('chromedriver');

const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('chai');
const webdriver = require('selenium-webdriver');
const {By} = require("selenium-webdriver");
const Assert = require("assert");

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

Given('I visit "{word}"', async (web) => {
    await driver.get('https://www.'+web);
    //closing cookies advice
    if(driver.findElement(By.id('CXQnmb'))) {
        await driver.findElement(By.id('L2AGLb')).click();
    }
});

When('I search for {string}', async (searchFor) => {
    await driver.findElement(By.name('q')).sendKeys(searchFor+'\n');
});

Then('I should see more than {int} results',  async (minimumResults) => {
    let resultsString = await driver.findElement(By.id('result-stats')).getAttribute("textContent");
    let split_string = resultsString.split(" ");
    let unitedInt = split_string[1].replace(/\./g,'');
    let totalResults = parseInt(unitedInt);

    expect(totalResults).to.be.at.least(minimumResults);
});

Then('I should see at least {int} results',  async (atleastResults) => {
    let resultsString = await driver.findElement(By.id('result-stats')).getAttribute("textContent");
    let split_string = resultsString.split(" ");
    let unitedInt = split_string[1].replace(/\./g,'');
    let totalResults = parseInt(unitedInt);

    expect(totalResults).to.be.at.least(atleastResults);
});