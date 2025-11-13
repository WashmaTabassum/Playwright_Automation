import {test, expect} from '@playwright/test';
test.describe('Bootstrap Dropdown Test Suite',() => {
    test('Bootstrap Dropdown Test',async ({page}) =>{
        await page.goto('https://preview.colorlib.com/theme/bootstrap/multiselect-01/?_gl=1*1vxogya*_ga*NjkyODg4MTY1LjE3NjI3NjY5NDI.*_ga_SEKJ4E9T4H*czE3NjI3NjY5NDIkbzEkZzAkdDE3NjI3NjY5NDIkajYwJGwwJGgw');
        //click on dropdown button
        await page.locator('.multiselect').click();
        
        // await page.waitForTimeout(2000);

        //count number of options in the dropdown
        const options = page.locator('ul.multiselect-container li a label'); // it stores all the options inside the dropdown
        const count = await options.count();
        expect(count).toBe(7);
        //select multiple options from the dropdown
        const dropdownOption = [];
        for(let i=0; i<count; i++){
            const textoptions = await options.nth(i).textContent();
            console.log(textoptions);
            dropdownOption.push(textoptions);
            if(dropdownOption[i].includes('PHP') || dropdownOption[i].includes('JavaScript')){
                await options.nth(i).click();
            }
        }
            await page.waitForTimeout(2000);
        });
    });