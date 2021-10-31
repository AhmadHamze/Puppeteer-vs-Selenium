const puppeteer = require("puppeteer-core");
// Main function
(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto("https://10fastfingers.com/typing-test/english");

  //   await browser.close();
})().catch((err) => console.error(err));
