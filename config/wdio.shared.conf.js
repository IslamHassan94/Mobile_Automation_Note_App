const path = require("path");

exports.config = {
  runner: "local",
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 10,
  address: "localhost",
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
