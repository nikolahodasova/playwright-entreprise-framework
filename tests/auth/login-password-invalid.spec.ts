import { test, expect } from '../../fixtures/all-fixtures';

test.describe('@smoke Login with Invalid Password Test', () => {
  test.describe.configure({ mode: 'parallel' });
  
  test('Login with invalid password displays error message', async ({ loginPage, page }) => {
    await loginPage.navigate('/');
    
    await loginPage.login('standard_user', 'invalid_password');

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Username and password do not match any user in this service');
  });

});
