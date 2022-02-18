const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields: {
    email: { css: 'input[data-test=username]' },
    password: { css: 'input[data-test=password]' },
  },
  
  loginButton: {
    css: 'input[data-test=login-button]'
  },

  fillEmail(email) {
    I.fillField(this.fields.email, email);
  },
  
  fillPassword(password) {
    I.fillField(this.fields.password, password);
  },

  clickLogin() {
    I.wait(1);
    I.click(this.loginButton);
  },
}
