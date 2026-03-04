import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

  private title = '.title';
  private cartBadge = '.shopping_cart_badge';
  private backpackAddBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
  private cartLink = '.shopping_cart_link';

  async verifyInventoryLoaded() {
    await expect(this.page.locator(this.title)).toHaveText('Products');
  }

  async addBackpackToCart() {
    await this.page.click(this.backpackAddBtn);
  }

  async verifyCartCount(count: string) {
    await expect(this.page.locator(this.cartBadge)).toHaveText(count);
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}