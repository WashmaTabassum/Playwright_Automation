import {test, expect} from '@playwright/test';
test('Dropdown Selections Test', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //multiple ways to select dropdown options - first two are more suitable because others two can be flaky if code structure changes
    //1. select by label
    // await page.locator("#country").selectOption({label:'China'});
    //2. select by visible text
    // await page.locator("#country").selectOption('Germany');
    //3. select by value
    // await page.locator("#country").selectOption({value: 'india'});
    //4. select by index
    await page.locator("#country").selectOption({index: 4});
    await page.waitForTimeout(5000);


    //Assertions
    //Approach 1. count total dropdown options
    const options = page.locator('#country option'); // this will give the refernce to the array of options in the dropdown
    const count = await options.count(); // this will give the actual count of the options
    await expect(count).toBe(10);
    console.log("Total dropdown options: " + count);
    
    //Approach 2. capture all the options text in an array and then do the assertion
    const actualOptions = [];
    for(let i=0; i<count; i++){
        const text = (await options.nth(i).textContent()).trim();
        actualOptions.push(text);
    }
    console.log("Dropdown options are: " + actualOptions);
    console.log("Dropdown options count is: " + actualOptions.length);
    await expect(actualOptions.length).toBe(10);
    let status = false;
    //3. check presence of value in the dropdown options
        if(actualOptions.includes('Germany')){
            status = true;
        }
    expect(status).toBeTruthy();

    //4. check the checkbox using for loop
    for(let i=0; i<count; i++){
        if(actualOptions[i] === 'Canada'){
            console.log("Canada is present in the dropdown options");
            await page.locator('#country').selectOption(actualOptions[i]);
            break;
    }}
    await page.waitForTimeout(5000);
});
