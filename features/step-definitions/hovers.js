const { When, Then } = require('@wdio/cucumber-framework');

// Hover to see info under photo

When("User hovers on an avatar {int}", async (user) => {
  const elem = await $$(`//img[@alt="User Avatar"]`)[user - 1];
  await elem.moveTo();
});

Then("User can see a name and a link under the avatar {int}", async (user) => {
  const name = await $$(".figcaption h5")[user - 1];
  const link = await $$('.figcaption a[href^="/users/"]')[user - 1];
  await expect(name).toBeDisplayed();
  await expect(link).toBeDisplayed();
});

// Hower off an avatar

When("User hovers on a page title", async () => {
  await $("#content > div > h3").moveTo();
});

Then("User cannot see a name and a link under the avatar {int}", async (user) => {
  const name = await $$(".figcaption h5")[user - 1];
  const link = await $$('.figcaption a[href^="/users/"]')[user - 1];

  await expect(name).not.toBeDisplayed();
  await expect(link).not.toBeDisplayed();
});

// Click on links

When("User clicks on a link under the avatar {int}", async (user) => {
  await $$('.figcaption a[href^="/users/"]')[user - 1].click();
});

Then("User sees a page of a {int}", async (user) => {
  const url = await browser.getUrl();
  await expect(url).toBe(`https://the-internet.herokuapp.com/users/${user}`);
});
