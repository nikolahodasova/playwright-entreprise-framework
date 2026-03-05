import { defineConfig } from '@playwright/test';
const retries = process.env.CI ? 2 : 0;

export default defineConfig({
  testDir: './tests',
  globalSetup: require.resolve('./utils/global-setup'),

  fullyParallel: true,
  retries,

  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
    },
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        storageState: 'storage/storageState.json',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
      },
      dependencies: ['setup'],
    },
  ],
});