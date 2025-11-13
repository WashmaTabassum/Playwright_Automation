const {test,expect} = require ('@playwright/test');
test ('Radio Button Test', async ({page}) => {
    await page.goto ('https://testautomationpractice.blogspot.com/');
    await page.locator('//*[@id="male"]').check();
    await expect(page.locator('//*[@id="male"]')).toBeChecked();
    await expect(page.locator('//*[@id="male"]').isChecked()).toBeTruthy();
    await expect(page.locator('//*[@id="female"]')).not.toBeChecked();
    // await expect(page.locator('//*[@id="female"]').isChecked()).toBeFalsy();
    expect(await page.locator('//*[@id="female"]').isChecked()).toBeFalsy();
    await page.waitForTimeout (5000);
});