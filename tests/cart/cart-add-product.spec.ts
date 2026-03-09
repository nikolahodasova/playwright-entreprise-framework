import { test } from '../../fixtures/all-fixtures';

test.describe('@smoke Cart flow', () => {
  test.describe.configure({ mode: 'parallel' });
  
  test('User can add product to cart', async ({ 
    inventoryPage,
     cartPage,
     user 
   }) => {

    await inventoryPage.navigate('/inventory.html');
    await inventoryPage.verifyInventoryLoaded();

    await inventoryPage.addBackpackToCart();
    await inventoryPage.verifyCartCount('1');

    await inventoryPage.goToCart();
    await cartPage.verifyItemInCart();

    console.log(`Test beží pre: ${user.username}`);
  });

});