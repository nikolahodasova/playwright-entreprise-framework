import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

type TestFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  user: { username: string; password: string };
};

export const test = base.extend<TestFixtures>({

  user: async ({}, use) => {
    const users = require('../test-data/users.json');
    await use(users.standardUser);
  },

});