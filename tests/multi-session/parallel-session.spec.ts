import { test, expect } from '@playwright/test';

test.describe('@smoke Parallel User Sessions', () => {

    test('Two different users can have independent sessions', async ({ browser }) => {
        
        const contextA = await browser.newContext();
        const pageA = await contextA.newPage();
        await pageA.goto('/');
        await pageA.locator('[data-test="username"]').fill('standard_user');
        await pageA.locator('[data-test="password"]').fill('secret_sauce');
        await pageA.locator('[data-test="login-button"]').click();
        await expect(pageA).toHaveURL(/.*inventory/);

        const contextB = await browser.newContext();
        const pageB = await contextB.newPage();

        await pageB.goto('/');
        await pageB.locator('[data-test="username"]').fill('locked_out_user');
        await pageB.locator('[data-test="password"]').fill('secret_sauce');
        await pageB.locator('[data-test="login-button"]').click();

        await expect(pageB.locator('[data-test="error"]')).toBeVisible();
        await expect(pageA.locator('.title')).toHaveText('Products');

        await contextA.close();
        await contextB.close();
    });
});
