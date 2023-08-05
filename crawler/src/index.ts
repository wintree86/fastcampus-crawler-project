import * as puppeteer from "puppeteer";
import scheduler from 'node-schedule'

type ArticleType = {
  title?: string;
  description?: string;
  mainImageUrl?: string;
  avatarImageUrl?: string;
  editor?: string;
  link?: string;
};

const initBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });
  return browser;
};

const getRecommendArticles = async (page: puppeteer.Page) => {
  return page.evaluate(() => {
    const elements = document.querySelectorAll(
      "article div.l.er.ib > a:nth-child(1), article h2, article h3, article div.h > img, article div.ht > div > div.bl > a > p, article div.l > img"
    );
    const linkEl = document.querySelectorAll(
      "article div.l.er.ib > a:nth-child(1)"
    );
    const titleEl = document.querySelectorAll("article h2");
    const descriptionEl = document.querySelectorAll("article h3");
    const mainImageEl = document.querySelectorAll("article div.h > img");
    const avatarEl = document.querySelectorAll("article div.l > img");
    const editorEl = document.querySelectorAll(
      "article div.ht > div > div.bl > a > p"
    );

    const articles: ArticleType[] = [];

    let obj: ArticleType = {};

    function checkObjectKey<T>(obj: T, key: keyof T) {
      if (obj[key] === undefined) {
        return true;
      } else {
        return false;
      }
    }

    function setObjectKey<T>(obj: T, key: keyof T, value: T[keyof T]) {
      if (checkObjectKey<T>(obj, key)) {
        obj[key] = value;
      } else {
        resetObject();
      }
    }

    function resetObject() {
      articles.push(obj);
      obj = {};
    }

    elements.forEach((element) => {
      switch (element.nodeName) {
        case "A":
          setObjectKey(obj, "link", (element as any)?.href);
          break;
        case "IMG":
          if (element.className === "l hs bx hn ho ec") {
            setObjectKey(obj, "avatarImageUrl", (element as any)?.src);
          } else if (element.className === "bw lh") {
            obj.mainImageUrl = (element as any)?.src;
            setObjectKey(obj, "mainImageUrl", (element as any)?.src);
          }
          break;
        case "H2":
          setObjectKey(obj, "title", element.innerHTML);
          break;
        case "H3":
          setObjectKey(obj, "description", element.innerHTML);
          break;
        case "P":
          setObjectKey(obj, "editor", element.innerHTML);
          break;
        default:
          break;
      }
    });
    return articles;
  });
};


const start = async () => {
    const browser = await initBrowser();
    const page = await browser.newPage();
    await page.goto("https://medium.com/tag/react/recommended");
  
    const articles = await getRecommendArticles(page);
    console.log(articles);
  
    await browser.close();
}

scheduler.scheduleJob('0 0 0 * * *', async () => {
    console.log('Start Crawler')
	await start();
    console.log('End Crawler')
});
