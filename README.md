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
node index.js
```

This should:
- download a Firefox Nightly on your machine
- open a page on http://example.com
- close the browser after 5 seconds