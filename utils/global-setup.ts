import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Spúšťam Global Setup: Prihlasujem sa pre auth.json...');

  try {
    // 1. Choď na stránku (zmeň podľa potreby)
    await page.goto('https://www.saucedemo.com');

    // 2. Vyplň prihlasovacie údaje
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // 3. Počkaj, kým sa prihlásiš (napr. kým uvidíš zoznam produktov)
    await page.waitForURL('**/inventory.html');

    // 4. ULOŽ STAV (cookies, session atď.) do súboru auth.json
    // Vytvorí ho v priečinku, ktorý si určíš
    await page.context().storageState({ path: 'auth.json' });
    
    console.log('auth.json bol úspešne vygenerovaný!');
  } catch (error) {
    console.error('Global Setup zlyhal:', error);
  } finally {
    await browser.close();
  }
}

export default globalSetup;