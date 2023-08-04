import * as puppeteer from "puppeteer";

const initBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });
  return browser;
};

(async () => {
  const browser = await initBrowser();
  const page = await browser.newPage();
  
  // NEXT
  await browser.close();
})();
