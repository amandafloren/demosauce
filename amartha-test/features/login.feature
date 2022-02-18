@SD-01
Feature: Login
  As a User
  I want to be able to login to sauce demo

  Scenario: Client login with valid credentials
    Given I am on sauce demo login page
    When I input valid client email in username field
    And I input valid client password in password field
    And I click on Login button
    Then I will be redirect to Products page
