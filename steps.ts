import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

///Given(/^I am on the (\w+) page$/, async (page) => {
  //  await pages[page].open()
//});


Given(/^I am on the login page$/, async () => {
    await browser.url('https://the-internet.herokuapp.com/login')
});



When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

Given(/^user is on login page$/, async () => {
    await browser.url('https://the-internet.herokuapp.com/login')
});

When(/^user enters username and password$/, async () => {

     await $('#username').setValue('tomsmith')
     await $('#password').setValue('SuperSecretPassword!')
 });


// When(/^user enters (.*) and (.*)$/, async (username, password) => {
//     await $('#username').setValue(username)
//     await $('#password').setValue(password)
// });


When(/^clicks on login button$/, async () => {
    
    await $('button[type="submit"]').click()
});

Then(/^user is navigated to the home page$/, async () => {

     await expect($('#flash')).toHaveText(expect.stringContaining('You logged into a secure area!'));
     
 });

// Then(/^this (.*) is displayed$/, async (message) => {

//     await expect($('#flash')).toHaveTextContaining(message)
// });
//


//
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
