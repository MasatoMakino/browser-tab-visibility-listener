const { Capabilities } = require("selenium-webdriver");
const selenium = require("./selenium");

const browsers = [Capabilities.chrome()];

browsers.forEach(async (capability) => {
  await selenium(capability);
});
