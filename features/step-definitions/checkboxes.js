const { When, Then } = require("@wdio/cucumber-framework");

// User can check each box

When("User selects box {int}", async (box) => {
  const elem = await $(`//*[@id="checkboxes"]/input[${box}]`);
  !(await elem.isSelected()) && (await elem.click());
});

Then("User sees selected checkbox {int}", async (box) => {
  const elem = await $(`//*[@id="checkboxes"]/input[${box}]`);
  await expect(elem).toBeSelected();
});

// User can uncheck each box

When("User unchecks box {int}", async (box) => {
  const elem = await $(`//*[@id="checkboxes"]/input[${box}]`);
  (await elem.isSelected()) && (await elem.click());
});

Then("User sees unselected checkbox {int}", async (box) => {
  const elem = await $(`//*[@id="checkboxes"]/input[${box}]`);
  await expect(elem).not.toBeSelected();
});

// User can check all boxes

When("User selects all boxes", async () => {
  const elems = await $$(`input[type="checkbox"]`);

  for (const elem of elems) {
    !(await elem.isSelected()) && (await elem.click());
  }
});

Then("User sees all selected checkboxes", async () => {
  const elems = await $$(`input[type="checkbox"]`);

  for (const elem of elems) {
    await expect(elem).toBeSelected();
  }
});

// User can uncheck all boxes

When("User unchecks all boxes", async () => {
  const elems = await $$(`input[type="checkbox"]`);

  for (const elem of elems) {
    (await elem.isSelected()) && (await elem.click());
  }
});

Then("User sees no selected checkboxes", async () => {
  const elems = await $$(`input[type="checkbox"]`);

  for (const elem of elems) {
    await expect(elem).not.toBeSelected();
  }
});
