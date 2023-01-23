const { When, Then } = require('@wdio/cucumber-framework');

// Add elements

When('I click on add element button {int} time\\(s)', async (clicks) => {
    for (let i=0; i<clicks; i++ ) {
        await $('//*[@id="content"]/div/button').click();
    }
})

Then("I see {int} {string} button\\(s)", async (buttons, text) => {
    const elem = await $('#elements');
    await expect(elem).toHaveChildren(buttons);

    for (let i = 0; i<buttons; i++) {
        const btn = await $(`#elements button:nth-child(${i + 1})`);
        await expect(btn).toHaveText(text);
    }
})

// Delete elements

When('I click on last {int} delete button\\(s)', async (toDelete) => {
    for (let i=toDelete; i>0; i--) {
        await $(`//*[@id="elements"]/button[${i}]`).click();
    }
})

Then("I see {int} button\\(s)", async (btnsOnPage) => {
    const elem = await $('#elements');
    await expect(elem).toHaveChildren(btnsOnPage);
})


