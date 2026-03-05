import { test } from '../fixtures/all-fixtures';

test.beforeEach(async ({ page }) => {
  console.log('Starting test...');
});

test.afterEach(async ({ page }) => {
  console.log('Test finished');
});