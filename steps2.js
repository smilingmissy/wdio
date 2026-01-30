import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser,expect, $ } from '@wdio/globals'

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