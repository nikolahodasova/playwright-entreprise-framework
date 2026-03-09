import { test, expect } from '../../fixtures/all-fixtures';

test.describe('@visual Inventory visual check', () => {
test('inventory page visual test', async ({ page }) => {

  await page.goto('/inventory.html');

  await expect(page).toHaveScreenshot('inventory-page.png');

});
});