const { I, productsPage } = inject();
const { environment, selecttor, inputData, actionMessage } = require('../utils/constant.js');

When('I click the filter button', () => {
  // From "features/filter.feature" {"line":12,"column":5}
  productsPage.clickFilter();
});

When('I click Price low to high option', () => {
  // From "features/filter.feature" {"line":13,"column":5}
  I.wait(5);
  I.click("Price (low to high)")
});

Then('I can see the products result by lowest price first', () => {
  // From "features/filter.feature" {"line":14,"column":5}
  I.see("7.99");
});
