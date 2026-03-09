import { test } from '../../fixtures/all-fixtures';

test.describe('@smoke Login', () => {
  test.describe.configure({ mode: 'parallel' });

  test('Standard user can login', async ({ loginPage, user }) => {

    await loginPage.navigate('/');
    await loginPage.login(
      user.username,
      user.password
    );
    await loginPage.verifyLoginSuccess();
  });

});