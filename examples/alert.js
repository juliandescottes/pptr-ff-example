/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const { startPuppeteerBrowser } = require('../index');

(async() => {
  const browser = await startPuppeteerBrowser(process.argv);

  console.log('Create page');
  const page = await browser.newPage();

  console.log('Go to http://example.com');
  await page.goto('http://example.com');

  console.log('Wait for 1 second');
  await new Promise(r => setTimeout(r, 1000));

  console.log('Add a listener on "dialog"');
  page.on('dialog', async dialog => {
    console.log('"dialog" event received');
    console.log('dialog message is: ' + dialog.message());

    console.log('Dismiss the dialog');
    await dialog.dismiss();
  });

  console.log('Evaluate alert(...)');
  await page.evaluate(() => alert('This message is inside an alert box'));

  console.log('Close the browser');
  await browser.close();
})();
