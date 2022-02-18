const { I, productsPage } = inject();
const { environment, selecttor, inputData, actionMessage } = require('../utils/constant.js');

When('I click add to cart button', () => {
  // From "features/addToCart.feature" {"line":12,"column":5}
  productsPage.clickATCItem();
});

When('I click cart button', () => {
  // From "features/addToCart.feature" {"line":13,"column":5}
  productsPage.clickCartButton();
});

Then('I can see the product added to the cart', () => {
  // From "features/addToCart.feature" {"line":14,"column":5}
  I.wait(2);
  I.see("Sauce Labs Backpack")
});
