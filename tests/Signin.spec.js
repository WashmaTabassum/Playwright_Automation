import {test, spec} from '@playwright/test'

//create a test
test('Locators', async({page})=>{
    await page.goto("https://demoblaze.com/")
    // await page.locator('id=login2').click
    await page.click('id=login2')
    await page.locator('id=loginusername').fill("Washma")
    //await page.fill('id=username','Washma')
    await page.fill('id=loginpassword','washma123')
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')
    // await page.locator('')
})