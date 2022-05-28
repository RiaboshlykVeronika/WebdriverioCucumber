

import { Given,When,Then } from "@wdio/cucumber-framework";
import mainPage from '../pageobjects/main.page.js'

Given(/^I am on the webdriverio page$/, async () => {
    await mainPage.openMainPage();
    await browser.pause(2000)
})

When(/^I click on search$/, async () =>{
    await mainPage.clickSearchButton();
    await browser.pause(2000)
})

Then(/^I type text to search$/, async () =>{
    await mainPage.setSearchInput();
    await browser.pause(2000)
})
