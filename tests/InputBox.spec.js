const {test,expect} = require ('@playwright/test');

test('Input Box Test', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // assertions for input box
    await expect(page.locator('input[id = "name"]')).toBeVisible();
    await expect(await page.locator('input[id = "name"]')).toBeEnabled();
    await expect(page.locator('input[id = "name"]')).toBeEditable();
    await expect(page.locator('input[id= "name"]')).toBeEmpty();

    // filling the input box
    await page.locator('input[id = "name"]').fill('Washma');
    //wait for 5 seconds
    await page.waitForTimeout(5000);

   });