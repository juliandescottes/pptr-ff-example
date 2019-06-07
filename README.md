# pptr-ff-example

## Introduction

This is a basic example using the experimental Puppeteer for Firefox at https://github.com/juliandescottes/pptr-ff.

This version of Puppeteer for Firefox is a fork of Puppeteer 1.6.2, and is using an official Mozilla Nightly release.

# How to use

To use it, run
```
git clone https://github.com/juliandescottes/pptr-ff-example
cd pptr-ff-example
npm install
node examples/basic.js
```

This should:
- download a Firefox Nightly on your machine
- open a page on http://example.com
- close the browser after 5 seconds

All example tests accept the following arguments:
- `--chrome`: will run the test using Puppeteer for Chrome instead of Firefox
- `--path=Some/Local/Executable/Path`: use a local version of Chrome or Firefox instead of the one downloaded by Puppeteer

Using `--chrome` you can easily compare Chrome and Firefox behavior for the same puppeteer test.
Using `--path` you can test local improvements for the Firefox support of puppeteer (for Firefox developers).
