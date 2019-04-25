'use strict';

const {Target, Eyes, VisualGridRunner} = require('@applitools/eyes.webdriverio');
const {BrowserType, Configuration, DeviceName, ScreenOrientation} = require('@applitools/eyes-selenium');

let eyes = new Eyes();
let driver;

describe('applitools', function () {

  it('should work', () => {
    try {
      eyes = new Eyes(new VisualGridRunner(3));

      const configuration = new Configuration();
      configuration.setAppName('Eyes Example');
      configuration.setTestName('My first Javascript test!');
      //
      // configuration.setApiKey('');

      eyes.setConfiguration(configuration);

      driver = browser.call(() => eyes.open(browser));

      browser.url('./helloworld');

      browser.call(() => eyes.check('Main Page', Target.window()));

      $('button').click();

      browser.call(() => eyes.check('Click!', Target.window()));

      const result = browser.call(() => eyes.close(false));

      console.log(result);
    } catch (e) {
      console.log(e);
    } finally {
      browser.call(() => eyes.abortIfNotClosed());
    }
  })
});
