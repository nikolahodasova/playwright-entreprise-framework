import { test, expect } from '../../fixtures/all-fixtures';

test.describe('@smoke Login with Locked User Test', () => {
    test.describe.configure({ mode: 'parallel' });

    test('Login with locked_out_user displays specific error message', async ({ loginPage, page }) => {
        // 1. Prechod na stránku cez tvoj Page Object
        await loginPage.navigate('/');

        // 2. Prihlásenie zablokovaného používateľa (meno: locked_out_user)
        // Heslo pre všetkých na SauceDemo je 'secret_sauce'
        await loginPage.login('locked_out_user', 'secret_sauce');
        
        // 3. Overenie konkrétnej chybovej hlášky pre zablokovaného používateľa
        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText('Sorry, this user has been locked out');
    });
});
