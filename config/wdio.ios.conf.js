const path = require("path");
const { config } = require("./wdio.shared.conf");

config.port = 4725;

config.specs = ["../tests/specs/ios/ios-todo-item-screen*.js"];

config.capabilities = [
  {
    platformName: "ios",
    "appium:platformVersion": "16.0",
    "appium:deviceName": "iPhone 14 Pro",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/wdioNativeDemoApp.app"),
  },
];

exports.config = config;
