const puppeteer = require('jdescottes-pptr-ff');

(async() => {
  console.log('Launch browser');
  const browser = await puppeteer.launch({
    headless: false
  });
  console.log('Create page');
  const page = await browser.newPage();
  console.log("after browser.newPage()");
  await page.goto('http://example.com');
  console.log("after page.goto('http://example.com');");
  await browser.close();
})();
