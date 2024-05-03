const { test, expect } = require('@playwright/test');

test('Basic test example', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});

test('Search test example', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('textarea[name="q"]', 'Playwright');
  await page.press('textarea[name="q"]', 'Enter');
  await page.waitForNavigation();
  const title = await page.title();
  expect(title).toContain('Playwright');
});
