# Automating 10fastfingers speed test

This program uses [puppeteer](https://pptr.dev/) (precisely the [puppeteer-core](https://www.npmjs.com/package/puppeteer-core) library), this is how you run the code:

1. Run `npm install`
2. Change the line 6 in index.js to (`executablePath: "path/to/chrome"`), if you're using Ubuntu, it should work without changing anything
3. Run `node index.js`

A browser will be launched, and the test will be done automatically by puppeteer.

The console will print the speed of typing in words per minute, and the total execution time of the program will also be printed.

![Runtime](./images/puppeteerruntime2.png)

If you want more explanation about the code check the following blog.
