import{test, expect} from '@playwright/test';
test.describe('Auto suggest Dropdown test suite',() =>{
    test('auto suggestdropdown test1', async({page}) =>{
        await page.goto('https://www.redbus.in/');
        //enter the value in the source text box
       await page.getByRole('button',{name:'From'}).click();
       await page.getByRole('textbox',{name:'From'}).fill('Hyderabad');
       await page.waitForTimeout(2000);
       await page.keyboard.press('ArrowDown');
       await page.waitForTimeout(2000);
       await page.keyboard.press('ArrowDown');
       await page.waitForTimeout(2000);
       await page.keyboard.press('Enter');
       
    // await page.pause();

    //    await page.getByRole('button',{name:'From Search suggestions'}).click(); 
        await page.waitForTimeout(2000);

    });
})