import { Builder } from "selenium-webdriver";
const { Preferences, Type, Level } = require("selenium-webdriver/lib/logging");
const pref = new Preferences();
pref.setLevel(Type.BROWSER, Level.ALL);

describe("BrowserTabVisibility", () => {
  let driver;

  beforeEach(async () => {
    let browser = process.env.BROWSER;
    if (browser == "edge") {
      browser = "MicrosoftEdge";
    }
    driver = await new Builder().forBrowser(browser).build();
  });

  afterEach(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  test("testSwitchTab", async () => {
    await driver.get("http://localhost:3005/demo.html");
    const browserWindow = await driver.manage().window();
    await browserWindow.minimize();
    await searchLog(driver, "invisible");
    await browserWindow.maximize();
    await searchLog(driver, "visible");
  });
  const searchLog = async (driver, message) => {
    const state = await driver.executeScript("return window.visibleState");
    expect(state).toEqual(message);
  };
});
