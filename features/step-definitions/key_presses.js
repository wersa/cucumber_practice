const { When, Then } = require("@wdio/cucumber-framework");

// Press a key without targeting input

When('User presses {word}', async (key) => {
    await browser.keys(key);
});

Then('User sees You entered: {word}', async (key) => {
    const elem = await $('#result');
    await expect(elem).toHaveText(`You entered: ` + key);
})

// Press a key into the input

When('User enters {word} to an input', async (key) => {
    const elem = await $('#target');
    await elem.setValue([key]);
})

Then('User sees an empty string', async () => {
    const elem = await $('#target');
    await expect(elem).toHaveValue('');
})