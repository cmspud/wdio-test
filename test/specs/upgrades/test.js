const Testrail = require('testrail-api');
const options = new Testrail ({
    host: "https://sptestrail.testrail.com",
    user: "sptestrail@gmail.com",
    password: "Testing2021",
});
describe('Upgrades tool End to End Happy Path', () => {
    before(() => {
        browser.setTimeout({
            'pageLoad': 10000,
            'script': 990000,
        });
    });
    it('C6 End to End Happy Path', () => {
        browser.url('https://www.google.com');
        expect(browser).toHaveUrl('https://webdriver.io')
        console.log(getState().currentTestName)
    })
    it('C7 End to End Happy Path', () => {
        browser.url('https://www.google.com');
        expect(browser).toHaveUrl('https://www.google.com/')
    }).getFullName()
    options.getProject(5,function(err,res,body){
        if(err){console.log("erros is",err)}
        console.log("response is ",res.statusCode);
        console.log("Body is ",body.name)
    })
})