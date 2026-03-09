import { test, expect } from '../../fixtures/all-fixtures';

test.describe('@smoke Cart Remove Item Test', () => {
    test.describe.configure({ mode: 'parallel' });

    test('User can remove an item from the cart', async ({ loginPage, page, user }) => {
        // 1. Setup: Prihlásenie a príprava stavu
        await loginPage.navigate('/');
        await loginPage.login(
            user.username,
            user.password
        );

        // 2. Akcia A: Pridanie produktu (aby sme mali čo mazať)
        const addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        await addToCartButton.click();
        
        // Overíme, že v košíku svieti "1" (badge)
        const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        await expect(cartBadge).toHaveText('1');

        // 3. Akcia B: Odstránenie produktu
        const removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        await removeButton.click();

        // 4. Asertácia: Overenie, že košík je prázdny
        // Na SauceDemo badge zmizne z DOM-u, keď je košík prázdny
        await expect(cartBadge).not.toBeVisible();
    });
});
