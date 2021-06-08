/* eslint-disable max-len */
const config = require('../../secrets.js');
module.exports = {
  // navigate
  open: function(path) {
    path = path || '';
    browser.url('https://s1.demo.opensourcecms.com/s/44' + path);
  },
  // getters
  getUsernameInput: () => $('//input[@id="txtUsername"]'),
  getRememberMeCheckbox: () => $('#input6'),
  getNextButton: () => $('#idp-discovery-submit'),
  getPasswordInput: () => $('//input[@id="txtPassword"]'),
  getLoginButton: () => $('//input[@id="btnLogin"]'),

  // actions
  enterUsername: function(text) {
    const elem = this.getUsernameInput();
    elem.waitForClickable();
    elem.click();
    elem.keys(text);
  },
  enterPassword: function(text) {
    const elem = this.getPasswordInput();
    elem.waitForClickable();
    elem.click();
    elem.keys(text);
  },
  
  login: function() {
    this.enterUsername(config.username);
    this.enterPassword(config.password);
    browser.pause(2000);
    this.getLoginButton().click();
  },
};
