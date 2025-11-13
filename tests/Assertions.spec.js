import {test, expect} from '@playwright/test'
test('assertions test', async({page}) =>{
    await page.goto('https://demoblaze.com/')
    //title assertion
    await expect(page).toHaveTitle('STORE');
    //url assertion
    await expect(page).toHaveURL('https://demoblaze.com/');
    //visible assertion
    const logo = page.locator('.navbar-brand');
    await expect(logo).toBeVisible();
});