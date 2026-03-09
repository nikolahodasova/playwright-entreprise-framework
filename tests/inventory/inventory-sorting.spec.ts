import { test, expect } from '../../fixtures/all-fixtures';

test.describe('@smoke Inventory Sorting', () => {
    test.describe.configure({ mode: 'parallel' });

    test('User can sort products by price from low to high', async ({ loginPage, page, user }) => {
        // 1. Prihlásenie
        await loginPage.navigate('/');
        await loginPage.login(user.username, user.password);

        // 2. Akcia: Výber sortingu "Price (low to high)"
        // Selektor pre dropdown na SauceDemo je .product_sort_container
        await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

        // 3. Získanie cien všetkých produktov po zoradení
        // .inventory_item_price vráti pole všetkých cien na stránke
        const priceLocators = page.locator('.inventory_item_price');
        
        // Vytiahneme texty (napr. "$7.99", "$9.99") a očistíme ich na čísla
        const allPricesText = await priceLocators.allInnerTexts();
        const prices = allPricesText.map(price => parseFloat(price.replace('$', '')));

        // 4. Asertácia: Overenie, či je každá nasledujúca cena vyššia alebo rovná tej predošlej
        for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
        }
    });
});