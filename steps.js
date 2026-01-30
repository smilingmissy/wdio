import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

When(/^I enter valid credentials$/, async() => {
    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
});


Then(/^I show message of Successful login$/, async () => {
    await expect(SecurePage.flashAlert).toBeExisting();
});

When(/^I enter invalid credentials$/, async () => {
    await LoginPage.login('invalidUser', 'invalidPass');
});

Then(/^I should see an error message indicating invalid login$/, async () => {
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('Your username is invalid!'));
});
