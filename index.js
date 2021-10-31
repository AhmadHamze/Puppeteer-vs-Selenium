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
  await page.waitForSelector("#row1");
  await page
    .mainFrame()
    .waitForTimeout(10000)
    .then(() => console.log("Waited 10 seconds!"));

  const html = await page.content();
  const regex = /<span wordnr[^<]*/g;
  const spans = html.match(regex);
  const words = spans.map((span) => span.split(">")[1]);

  for (word of words) {
    await page.keyboard.type(word);
    await page.keyboard.type(" ");
  }

  const time = await page.$eval("#timer", (timer) =>
    timer.textContent.slice(2, 4)
  );
  // time is a string however, we can use it as a number thanks to javascript implicit type conversion
  console.log(`${(words.length * 60) / (60 - time)} WPM`);

  await browser.close();
})().catch((err) => console.error(err));
