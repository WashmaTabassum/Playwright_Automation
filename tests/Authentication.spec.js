import {test,spec, expect} from '@playwright/test'

test('Test Signup', async({page})=>{
    await page.goto('https://demoblaze.com/')
    await page.click('id=signin2')
    await page.locator('id=sign-username').fill("Washma")
    await page.fill('id=sign-password','washma123')
    await page.click('//*[@id="signInModal"]/div/div/div[3]/button[2]')
})
test('Test Signin', async({page})=>{
    await page.goto("https://demoblaze.com/")
    // await page.locator('id=login2').click
    await page.click('id=login2')
    await page.locator('id=loginusername').fill("Washma")
    //await page.fill('id=loginusername','Washma')
    await page.fill('id=loginpassword','washma123')
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')
    await page.locator('id=logout2').click()
   })   

test('Locating Multiple Elements', async({page})=>{
    // const links = await page.$$('a') //stores all the links (anchor tags) in the links variable
    // //looping through each a in links to get them
    // console.log('START LOOP')
    // for(const link of links)
    // {
    //     const linktext= await link.textContent(); // store every link in the variable and then logging it
    //     console.log(linktext);

    // }
    await page.goto('https://demoblaze.com/')
    const links = await page.$$('a');
    console.log('Number of links:', links.length);
    for (const link of links) {
        const linktext = await link.textContent();
        
        console.log('Link text:', linktext);
    }
    })


test('Get all products names', async({page})=>{
    await page.goto('https://demoblaze.com/')
    await page.waitForSelector('#tbodyid .card-title a');
    const products = await page.$$("//div[@id='tbodyid']//div//div//div//h4/a");
    console.log('Number of products:', products.length);
    console.log("i am outside loop")
    for (const product of products){
        console.log("i am inside loop")
        const productstext = await product.textContent();
        console.log(productstext);
    }

})


// test('Get all product names', async ({ page }) => {
//   await page.goto('https://demoblaze.com/');

//   // Wait for product container to be visible
//   await page.waitForSelector('#tbodyid .card-title a');

//   // Locate all product anchors under .card-title
//   const products = await page.$$('#tbodyid .card-title a');

//   console.log('Number of products:', products.length);

//   for (const product of products) {
//     const productText = await product.textContent();
//     console.log(productText?.trim());
//   }
// });





