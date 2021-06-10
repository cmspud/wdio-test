const Login = require('../../../Pages/Upgrades/Login.js');
const homePage = require('../../../Pages/Upgrades/homePage.js');
const client_options = require("testrail-api-client").default;

const options = {
  domain: "sptestrail.testrail.com",
  username: "sptestrail@gmail.com",
  password: "Testing2021",
};

const client = new client_options(options);

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

    const runId = 1;
    const reportTests = [{ case_id: 1, status_id: 1, comment: "Test comment" }];
    client
      .addResultsForCases(runId, reportTests)
      .then(() => {
        console.log("Done");
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
