const path = require("path");

exports.config = {
  runner: "local",
  specs: ["./tests/specs/android/delete-note-screen*.js"],
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 10,
  capabilities: [
    {
      "appium:platformName": "Android",
      "appium:platformVersion": "9.0",
      "appium:deviceName": "IslamHassanEmulator_Device",
      "appium:automationName": "uiautomator2",
      "appium:app": path.join(
        process.cwd(),
        "app/android/ColorNote+Notepad.apk"
      ),
      "appium:autoGrantPermissions": true,
    },
  ],
  address: "localhost",
  port: 4725,
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
