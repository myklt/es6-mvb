Feature: Smoke test

Background:

  Given I open the home page

Scenario: Page title is correct

  Then the title is "ES6 Boilerplate"

Scenario: Home page greets politely

  Then the page should contain text "Hello World!"