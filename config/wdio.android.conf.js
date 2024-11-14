const path = require("path");
const { config } = require("./wdio.shared.conf");

config.port = 4725;

config.specs = ["../tests/specs/android/delete-note-screen*.js"];

config.capabilities = [
  {
    "appium:platformName": "Android",
    "appium:platformVersion": "9.0",
    "appium:deviceName": "IslamHassanEmulator_Device",
    "appium:automationName": "uiautomator2",
    "appium:app": path.join(process.cwd(), "app/android/ColorNote+Notepad.apk"),
    "appium:autoGrantPermissions": true,
  },
];

exports.config = config;
