/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const { startPuppeteerBrowser } = require('../index');

/**
 * This example will open a page on http://example.com and close the browser
 * after 5 seconds.
 */
(async() => {
  const browser = await startPuppeteerBrowser(process.argv);

  console.log('Create page');
  const page = await browser.newPage();

  console.log('Go to http://example.com');
  await page.goto('http://example.com');

  console.log('Wait for 1 second');
  await new Promise(r => setTimeout(r, 1000));

  console.log('Create another page');
  const page2 = await browser.newPage();

  console.log('Wait for 1 second');
  await new Promise(r => setTimeout(r, 1000));

  console.log('Go to mozilla.org');
  await page2.goto('http://mozilla.org');

  console.log('Wait for 1 second');
  await new Promise(r => setTimeout(r, 1000));

  console.log('Close the second page');
  await page2.close();

  console.log('Wait for 1 second');
  await new Promise(r => setTimeout(r, 1000));

  console.log('Close the browser');
  await browser.close();
})();
