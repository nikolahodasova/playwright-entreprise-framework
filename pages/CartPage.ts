import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  private cartItem = '.cart_item';
  private checkoutButton = '#checkout';

  async verifyItemInCart() {
    await expect(this.page.locator(this.cartItem)).toBeVisible();
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}