const { browser } = require('protractor');
const { SpecReporter } = require('jasmine-spec-reporter');
const jasmineReporters = require('jasmine-reporters');

exports.config = {
    seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
    capabilities: 
      {
        'name': 'E2E Tests',
        'browserName': 'chrome',
        'platform': 'Windows 10',
        'version': '63.0'
      },
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/sauce-spec.ts'
  ],
 
  directConnect: true,
  baseUrl: 'http://www.google.com',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    browser.manage().timeouts().implicitlyWait(4000);
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
