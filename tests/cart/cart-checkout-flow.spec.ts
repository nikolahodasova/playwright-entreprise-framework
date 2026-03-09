import { test, expect } from '../../fixtures/all-fixtures';

test.describe('@smoke Checkout Flow Test', () => {
    test.describe.configure({ mode: 'parallel' });

    test('User can successfully complete checkout', async ({ loginPage, page, user }) => {
        // 1. Prihlásenie (používame tvoj objekt user)
        await loginPage.navigate('/');
        await loginPage.login(user.username, user.password);

        // 2. Pridanie produktu a prechod do košíka
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        
        // 3. Checkout - Krok 1: Kliknutie na Checkout tlačidlo
        await page.locator('[data-test="checkout"]').click();

        // 4. Checkout - Krok 2: Vyplnenie údajov (použijeme fixné dáta pre rýchlosť)
        await page.locator('[data-test="firstName"]').fill('Nikol');
        await page.locator('[data-test="lastName"]').fill('Testovacia');
        await page.locator('[data-test="postalCode"]').fill('81101');
        await page.locator('[data-test="continue"]').click();

        // 5. Checkout - Krok 3: Review a dokončenie
        await expect(page).toHaveURL(/.*checkout-step-two/);
        await page.locator('[data-test="finish"]').click();

        // 6. Asertácia: Overenie úspešnej objednávky
        const completeHeader = page.locator('[data-test="complete-header"]');
        await expect(completeHeader).toBeVisible();
        await expect(completeHeader).toHaveText('Thank you for your order!');
    });
});  