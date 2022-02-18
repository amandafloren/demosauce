const { I, loginPage } = inject();
const { environment, selecttor, inputData, actionMessage } = require('../utils/constant.js');

Given('I am on sauce demo login page', () => {
  // From "features/login.feature" {"line":7,"column":5}
  I.amOnPage(environment.BASE_URL);
  I.wait(3);
});

When('I input valid client email in username field', () => {
  // From "features/login.feature" {"line":8,"column":5}
  loginPage.fillEmail(inputData.username);
});

When('I input valid client password in password field', () => {
  // From "features/login.feature" {"line":9,"column":5}
  loginPage.fillPassword(inputData.password);
});

When('I click on Login button', () => {
  // From "features/login.feature" {"line":10,"column":5}
  loginPage.clickLogin();
});

Then('I will be redirect to Products page', () => {
  // From "features/login.feature" {"line":11,"column":5}
  I.wait(5);
  I.see("PRODUCTS");
});


