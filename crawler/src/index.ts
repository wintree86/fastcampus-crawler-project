import * as puppeteer from "puppeteer";

const initBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });
  return browser;
};

const login = async (page: puppeteer.Page) => {
  await page.goto("https://www.saucedemo.com/");
  await page.type("#user-name", "standard_user");
  await page.type("#password", "secret_sauce");
  await page.click("#login-button");
};

const clickPage = async (page: puppeteer.Page) => {
  await page.click("#item_4_img_link");
};

const collectProductInfos = async (page: puppeteer.Page) => {
  return page.evaluate(() => {
    let productNames: string[] = [];
    const elements = document.querySelectorAll(".inventory_item_name");
    elements.forEach((element) => productNames.push(element.innerHTML));
    return productNames;
  });
};

(async () => {
  const browser = await initBrowser();
  const page = await browser.newPage();
  await login(page);
  //   await clickPage(page);
  const infos = await collectProductInfos(page);
  console.log(infos);
  await browser.close();
})();
