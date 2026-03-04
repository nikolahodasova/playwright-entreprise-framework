import { mergeTests } from '@playwright/test';
import { test as pageTest } from './pages.fixture';
import { test as userTest } from './user.fixtures';

// Toto je ten moment, kedy sa z dvoch stane jeden "Super-Test"
export const test = mergeTests(pageTest, userTest);

export { expect } from '@playwright/test';