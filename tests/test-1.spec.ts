import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://avrora.ua/');
  await page.getByRole('link', { name: 'ТОП товари', exact: true }).first().click();
  await page.locator('#button_cart_8833').click();
  await page.getByLabel('Кошик товарів').getByRole('link', { name: 'Спінінг Fisherman 2,1 м' }).click();
  await page.getByRole('heading', { name: 'Спінінг Fisherman 2,1 м', exact: true }).locator('bdi').click();
});