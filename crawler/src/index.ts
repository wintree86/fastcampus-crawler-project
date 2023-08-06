import Crawler from "./crawler";

const start = async () => {
  const crawler = new Crawler();
  crawler.start();
  
};

start();

// scheduler.scheduleJob("0 0 0 * * *", async () => {
//   console.log("Start Crawler");
//   await start();
//   console.log("End Crawler");
// });
