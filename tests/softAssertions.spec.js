import {test, expect} from '@playwright/test';
// test("hard assertions test", async({page})=>{
//     await page.goto('https://demoblaze.com/');

//     //diff betweeen hard and soft assertions
//     //hard assertion - stops execution on failure
//     //soft assertion - continues execution even if assertion fails

//     //hard assertion example
//     await expect(page).toHaveTitle('STORE123'); //fails here, stops execution
//     await expect(page).toHaveURL('https://demoblaze.com/');
//     await expect(page.locator('.navbar-brand')).toBeVisible();

// });
 //soft assertion example
    test("soft assertions", async({page})=>{
        await page.goto('https://demoblaze.com/');
        await expect.soft(page).toHaveTitle('STORE123'); //fails here, but continues execution
        await expect.soft(page).toHaveURL('https://demoblaze.com/');
        await expect.soft(page.locator('.navbar-brand')).toBeVisible();
    });