const puppeteer = require('jdescottes-pptr-ff');

(async() => {
  console.log('Launch browser');
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://example.com');

  // Just wait a few seconds for fun.
  await new Promise(r => setTimeout(r, 5000));

  await browser.close();
})();
