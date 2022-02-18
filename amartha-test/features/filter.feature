@SD-02
Feature: Filter
  As a User
  I want to be able to filter the products

  Scenario: User can filter the products from lowest to highest in price
    Given I am on sauce demo login page
    When I input valid client email in username field
    And I input valid client password in password field
    And I click on Login button
    Then I will be redirect to Products page
    When I click the filter button
    When I click Price low to high option
    Then I can see the products result by lowest price first
