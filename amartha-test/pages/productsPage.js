const { I } = inject();

module.exports = {

  // insert your locators and methods here
  
  filterOption: {
    css: 'select[data-test=product_sort_container]'
  },

  ATCbutton: {
    css: 'button[data-test=add-to-cart-sauce-labs-backpack]'
  },

  cartButton: {
    css: 'div[class=shopping_cart_container]'  
  },

  clickFilter() {
    I.click(this.filterOption);
  },

  clickATCItem(){
    I.click(this.ATCbutton);
  },

  clickCartButton(){
    I.click(this.cartButton);
  }
}
