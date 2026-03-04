import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  private username = '#user-name';
  private password = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  async login(user: string, pass: string) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginButton);
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async verifyLoginPageLoaded() {
    await expect(this.page.locator(this.loginButton)).toBeVisible();
  }

  async verifyLoginError() {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }

  async saveState(path: string) {
    await this.page.context().storageState({ path });
  }
}