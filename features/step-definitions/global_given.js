const { Given } = require("@wdio/cucumber-framework");

Given("User is on the {string} page", async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
  });

