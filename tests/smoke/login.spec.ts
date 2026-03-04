import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('@smoke Login', () => {

  test('User can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate('/');
    await loginPage.verifyLoginPageLoaded();
    await loginPage.login('standard_user', 'secret_sauce');
  });

});