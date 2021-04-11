const { Builder, Capabilities, logging } = require("selenium-webdriver");
const pref = new logging.Preferences();
pref.setLevel(logging.Type.BROWSER, logging.Level.DEBUG);

const TAB_INTERVAL = 500;

const testSwitchTab = async (driver) => {
  try {
    await driver.get(
      "https://masatomakino.github.io/browser-tab-visibility-listener/demo/demo.html"
    );
    const handle = await driver.getWindowHandle();
    await searchLog(driver, undefined);

    await driver.switchTo().newWindow("tab");
    await driver.sleep(TAB_INTERVAL);
    await searchLog(driver, null);

    await driver.switchTo().window(handle);
    await driver.sleep(TAB_INTERVAL);
    await searchLog(driver, "visible");
  } catch (e) {
    console.log(e);
  } finally {
    driver && (await driver.quit());
  }
};

const searchLog = async (driver, message) => {
  const state = await driver.executeScript("return window.visibleState;");
  if (state != message) {
    const cap = await driver.getCapabilities();
    console.warn(
      `${cap.map_.get("browserName")}:${cap.map_.get(
        "browserVersion"
      )} => expected is ${message} but result is ${state}`
    );
    console.trace();
  }
};

const test = (capabilities) => {
  capabilities.setLoggingPrefs(pref);
  const driver = new Builder().withCapabilities(capabilities).build();
  testSwitchTab(driver);
};

const browsers = [
  Capabilities.chrome(),
  Capabilities.firefox(),
  Capabilities.safari(),
];
browsers.forEach((capability) => {
  test(capability);
});
