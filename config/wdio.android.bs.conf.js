const { config } = require("./wdio.shared.conf");

// BrowserStack credentials
config.user = process.env.BROWSERSTACK_USER || "islamhassan_6EQZzX";
config.key = process.env.BROWSERSTACK_KEY || "XMtyqvX8nZxNvqjCs1PK";

// Test specs
config.specs = ["../tests/specs/android/delete-note-screen*.js"];

// Capabilities
config.capabilities = [
  {
    platformName: "Android",
    platformVersion: "9.0",
    deviceName: "Samsung Galaxy S10 Plus",
    automationName: "uiautomator2",
    app: "bs://9a4cc68f5413accefe9961027f3e548d44944790",
    autoGrantPermissions: true,
  },
];

// Services
config.services = ["browserstack"];

// Export configuration
exports.config = config;
