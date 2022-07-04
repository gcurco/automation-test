Feature: Search Orange Bank on google

  Scenario: Orange Bank has more than 100000 results
    Given I visit "google.es"
    When  I search for "Orange Bank"
    Then  I should see more than 100000 results
