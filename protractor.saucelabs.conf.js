const { browser } = require('protractor');
const { SpecReporter } = require('jasmine-spec-reporter');
const jasmineReporters = require('jasmine-reporters');
const HttpsProxyAgent = require('https-proxy-agent');
const agent = new HttpsProxyAgent('http://your-proxy:80');

const sauceUser = 'yourSauceUser';
const sauceKey = 'yourSauceKey';

exports.config = {
    // if going through s proxy, need sauce agent
    sauceAgent: agent,
    sauceUser: sauceUser,
    sauceKey: sauceKey,
    sauceSeleniumAddress: 'your sauce address',
    capabilities: 
      {
        'name': 'E2E Tests',
        // is using a secure tunnel
        'tunnel-identifier': 'your tunnel',
        'parent-tunnel': 'your parent tunnel',
        'browserName': 'chrome',
        'platform': 'Windows 10',
        'version': '63.0'
      },
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/basic.e2e-spec.ts'
  ],
 
  directConnect: true,
  baseUrl: 'http://localhost:4200',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  params: {
    user: {
      email: '',
      password: ''
    }
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    browser.manage().timeouts().implicitlyWait(1000);
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    // used to output results in a junit format for CI build parsing
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: '../target/protractor-report',
        filePrefix: 'xmloutput'
      }));
  }
};
