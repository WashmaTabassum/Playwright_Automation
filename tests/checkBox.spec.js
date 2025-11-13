import {test, expect} from '@playwright/test';

test('Checkbox Test', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//input[@id="sunday" and @type="checkbox"]').check();
    await expect(page.getByRole('checkbox', { name: 'Monday' }).isChecked()).toBeTruthy();

    //multiple checkbox
    const checkbox_locators = ["//input[@id='saturday' and @type='checkbox']","//input[@id='tuesday' and @type='checkbox']" ];
    for (const locator of checkbox_locators) {
        await page.locator(locator).check();
        await expect(page.locator(locator).isChecked()).toBeTruthy();
    }
    await page.waitForTimeout(2000);
    //uncheck the checboxes which are checked
    for(const locator of checkbox_locators){
        if(await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck();
        }
        
    }
        await page.waitForTimeout(5000);
    });

