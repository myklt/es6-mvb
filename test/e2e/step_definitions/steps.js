const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then}) => {

    Given(/^I open the home page$/, () => {
        const homePage = client.page.home();

        return homePage
            .navigate()
            .waitForElementVisible('@body', 1000);
    });

    Then(/^the title is "(.*?)"$/, (text) => {
        return client.assert.title(text);
    });

    Then(/^the page should contain text "(.*?)"$/, (text) => {
        const homePage = client.page.home();
        return homePage.assert.containsText('@root', text);
    });
});