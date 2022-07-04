Feature: Search Orange Bank on google

  Scenario: Orange Bank has more than 150000 results
    Given I visit "google.es"
    When  I search for "Orange Bank"
    Then  I should see more than 100000 results

  Scenario: Orange Bank has at least 10000 results
    Given I visit "google.es"
    When  I saerch for "Orange Bank"
    Then  I should see at least 10000 results