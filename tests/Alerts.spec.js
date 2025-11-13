import{test,expect} from '@playwright/test';
test.describe('Alerts test suite',() => {
    test.skip('Simple alert test', async ({page}) =>{
        await page.goto('https://testautomationpractice.blogspot.com/');
        // to go on dialog box
        page.on('dialog', async(dialog) =>{
            expect(dialog.type()).toContain('alert');
            await dialog.accept();
        })

        await page.locator('//*[@id="alertBtn"]').click();
        await page.waitForTimeout(2000);
    })

    test.skip('Confirm alert test', async ({page}) =>{
        await page.goto('https://testautomationpractice.blogspot.com/');

        page.on('dialog', async(dialog) => {
            expect(dialog.type()).toContain('confirm');
            expect(dialog.message()).toContain('Press a button!');
            await dialog.accept(); // to click ok
            // await dialog.dismiss(); // to click cancel
        })
        await page.getByRole('button', {name: 'Confirmation Alert'}).click();
        await page.waitForTimeout(5000);
        expect(page.locator('//*[@id="demo"]')).toHaveText('You pressed OK!');
    })

    test('Prompt alert test', async ({page}) =>{
        await page.goto('https://testautomationpractice.blogspot.com/');
        page.on('dialog', async(dialog) =>{
            expect(dialog.type()).toContain('prompt');
            await page.waitForTimeout(2000);
            await dialog.accept('washma');
            await page.waitForTimeout(2000);
        })
        await page.locator('//*[@id="promptBtn"]').click();
        await page.waitForTimeout(5000);
        expect(page.locator('//*[@id="demo"]')).toHaveText('Hello washma! How are you today?');
        await page.waitForTimeout(2000);
        })
})