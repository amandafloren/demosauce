@SD-03
Feature: Add to cart
  As a User
  I want to be able to add to cart a product

  Scenario: User can add product to the cart
    Given I am on sauce demo login page
    When I input valid client email in username field
    And I input valid client password in password field
    And I click on Login button
    Then I will be redirect to Products page
    When I click add to cart button
    When I click cart button
    Then I can see the product added to the cart