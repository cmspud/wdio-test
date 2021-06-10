const Login = require('../../../Pages/Upgrades/Login.js');
const homePage = require('../../../Pages/Upgrades/homePage.js');


describe('', () => {
  before(() => {
    browser.setTimeout({
      'pageLoad': 10000,
      'script': 990000,
    });
  });
  // Loggin in with the credentials
  xit('C2 - Verify admin name is present', () => {
    Login.open();
    Login.login();
    browser.pause(2000)
  
  //  Verifying logo is present
  expect(homePage.getLogo()).toBeDisplayed();

  });
});
