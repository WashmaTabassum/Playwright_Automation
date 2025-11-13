import {test, expect} from '@playwright/test';

test('MultiSelect Dropdown Test', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Select multiple options in the multi-select dropdown
    await page.selectOption('#colors',['red', 'green', 'blue']);
    //adding assertions
    const options = page.locator('#colors option:checked'); // returns the selected options from the #colors dropdown not the actual textcontents only the reference to the locator

    // 1. count number of options
    await expect(page.locator('#colors option')).toHaveCount(7);
    await page.waitForTimeout(5000);
    //2. verify selected options count and values
    const colors = page.locator('#colors option:checked');
    await expect(colors).toHaveCount(3); // for count
    for(let i=0; i<3; i++){
        const colorText = (await colors.nth(i).textContent()).trim(); // to get text content of each selected option and trim spaces
        console.log(colorText);
        expect(['Red', 'Green', 'Blue']).toContain(colorText); // assertion to check if selected options contain expected values
    }
    // Alternative way using $$ to get array of elements and check values of selected options
    const colors_ =await page.$$('#colors option:checked'); // $$ sign is used to get array of elements
    console.log(colors_.length); // to get count of selected options
    const colorValues = []; 
    for(const color of colors_){
        colorValues.push((await color.textContent()).trim()); // to get text content of each selected option and trim spaces
    }

    console.log(colorValues); // to get array of selected option values
    for(const color of colorValues){
        expect(colorValues).toContain(color); // assertion to check if selected options contain expected values
    }

    //3. to check presence of an option in the dropdown
    const alloptions = await page.locator('#colors').textContent();
    await expect(alloptions.includes('Red')).toBeTruthy();
   
});