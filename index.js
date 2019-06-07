/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const puppeteerChrome = require('puppeteer');
const puppeteerFirefox = require('jdescottes-pptr-ff');

const startPuppeteerBrowser = function(argv) {
  const isChrome = argv.some(arg => arg.includes("chrome"));
  console.log('[index] Using Browser: ' + (isChrome ? 'Chrome' : 'Firefox'));
  const puppeteer = isChrome ? puppeteerChrome : puppeteerFirefox;

  const pathArg = argv.find(arg => arg.includes("path="));
  const executablePath = pathArg ? pathArg.split("=")[1] : null;
  if (executablePath) {
    console.log(`[index] Using Browser executable at ${executablePath}`);
  }

  console.log('[index] Launch browser');
  return puppeteer.launch({
    headless: false,
    executablePath,
  });
}
exports.startPuppeteerBrowser = startPuppeteerBrowser;
