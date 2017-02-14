const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {
  
  let numbers;
    
  Given(/^I open Google`s search page$/, () => {
    return client
      .url('http://google.com')
      .waitForElementVisible('body');
  });

  Given(/^having a list of numbers$/, (table) => {
    numbers = table.raw();
  });

  When(/^I search for (.*?)$/, (expression) => {
    return client
      .setValue('input[name=q]', expression)
      .submitForm('input[name=q]')
  });

  When(/^I submit them separated with a star$/, () => {
    return client
      .setValue('input[name=q]', numbers.join('*'))
      .submitForm('input[name=q]')
  });

  Then(/^the search result should contain (.*?)$/, (result) => {
    return client.expect.element('#cwos').text.to.equal(result);
  });

});
