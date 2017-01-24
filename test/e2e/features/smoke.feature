Feature: Smoke test

Scenario: Navigating to home page

	Given I open the home page
	And the title is "ES6 Boilerplate"
	Then the "Hello World!" text is visible