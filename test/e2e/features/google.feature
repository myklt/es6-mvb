Feature: Google

Background: 

  Given I open Google`s search page

Scenario Outline: Google can add

  When I search for <expression>
  Then the search result should contain <result>

  Examples:
    | expression | result  |
    | 5+5        | 10      |
    | 123+2      | 125     |

Scenario: Google can calculate expressions

  Given having a list of numbers
      | 5 |
      | 5 |
      | 5 |
  When I submit them separated with a star
  Then the search result should contain 125