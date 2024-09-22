import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://avrora.ua/');
  await page.getByText('Змінити').first().click();
  await page.getByRole('textbox', { name: 'місто Київ, Київська область' }).click();
  await page.getByRole('searchbox').click();
  await page.getByRole('searchbox').fill('Полтава');
  await page.getByRole('option', { name: 'місто Полтава, Полтавська область' }).click();
  await page.getByRole('textbox', { name: 'бульв. Євгена Коновальця, 4/' }).click();
  await page.getByRole('option', { name: 'вул. Соборності, 78' }).click();
  await page.getByRole('button', { name: 'Зберегти' }).click();
  await page.getByRole('link', { name: 'Полтава вул. Соборності,' }).click();
  await page.getByRole('textbox', { name: 'вул. Соборності,' }).click();
  await page.getByRole('searchbox').click();
  await page.getByRole('button', { name: 'Закрити' }).click();
});