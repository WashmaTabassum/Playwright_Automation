import {test,expect} from '@playwright/test';
test('some built in functions', async({page})=>{
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //page.getByAltText() // to locate images by their alt text
    const logo = page.getByAltText('company-branding');
    await expect(logo).toBeVisible();
    //page.getByPlaceholder() // to locate input fields by their placeholder text 
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{type:'submit'}).click();
    //page.getByText() // to locate elements by their text
    // await expect(page.getByText('Ed Minn')).toBeVisible();

    //if do not know the name of the admin appearing after login then we can use xpath, css selector or other locators to locate the element
    await expect(page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/p')).toBeVisible();

    //page.getByLabel() // to locate input fields by their associated label text
    


})