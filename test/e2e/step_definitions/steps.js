const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, setDefaultTimeout}) => {
    setDefaultTimeout(30 * 1000);

    Given(/^I open the home page$/, () => {
        return client
            .url(client.launch_url)
            .waitForElementVisible('body', 1000);
    });

    Then(/^the title is "(.*?)"$/, (text) => {
        return client.assert.title(text);
    });

    Then(/^the "(.*?)" text is visible$/, (text) => {
        return client.expect.element("body").text.to.contain(text);
    });
});