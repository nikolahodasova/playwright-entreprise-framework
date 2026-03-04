import { test as setup } from '../../fixtures/all-fixtures';

setup('authenticate', async ({ loginPage, user, page }) => {
  await loginPage.navigate('/');

  await loginPage.login(user.username, user.password);
  
  await page.context().storageState({
    path: 'storage/storageState.json',
  });
});