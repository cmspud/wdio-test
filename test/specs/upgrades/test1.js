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
  it('C1 - verify image is present', () => {
    Login.open();
    Login.login();
    browser.pause(1000);
  //  Verifying logo is present
  expect(browser).toHaveUrl('https://s1.demo.opensourcecms.com/orangehrm/symfony/web/index.php/dashboard');

  });
});
