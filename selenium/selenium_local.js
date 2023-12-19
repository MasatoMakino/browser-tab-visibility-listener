const { Capabilities } = require("selenium-webdriver");
const selenium = require("./selenium");

const browsers = [
  Capabilities.chrome(),
  Capabilities.firefox(),
  Capabilities.safari(),
];

browsers.forEach(async (capability) => {
  await selenium(capability);
});
