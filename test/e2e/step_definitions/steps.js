const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

const homePage = client.page.home();

defineSupportCode(({Given, Then}) => {

    Given(/^I open the home page$/, () => {
        return homePage
            .navigate()
            .waitForElementVisible('@body', 1000);
    });

    Then(/^the title is "(.*?)"$/, (text) => {
        return client.assert.title(text);
    });

    Then(/^the page should contain text "(.*?)"$/, (text) => {
        return homePage.expect.element('@root').text.to.contain(text);
    });
});