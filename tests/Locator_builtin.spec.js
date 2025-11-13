import {test, expect} from '@playwright/test';

test('Locator built-in methods', async ({page}) => {
  await page.goto('https://playwright.dev/');

  // Check if the page has a title
  await expect(page).toHaveTitle(/Playwright/);

  // Click the get started link
  await page.getByRole('link', { name: 'Get started' }).click();

  // Check if the installation heading is visible
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await expect(page.getByRole('button',{type: 'submit'})).toBeVisible();


});
