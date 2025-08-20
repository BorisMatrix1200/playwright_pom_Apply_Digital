import { Page, Locator,} from '@playwright/test';


export class AddProductPage {
  readonly page: Page;

  readonly selectProduct: Locator;
  readonly addQuantity: Locator;
  readonly addToCart: Locator;
  readonly viewCart: Locator;
  readonly checkout: Locator;

  constructor(page: Page) {
    this.page = page;

    this.selectProduct = page.locator('div:nth-child(5) > .product-image-wrapper > .choose > .nav > li > a');
    this.addQuantity = page.locator('#quantity');
    this.addToCart = page.getByRole('button', { name: ' Add to cart' });
    this.viewCart = page.getByRole('link', { name: 'View Cart' });
    this.checkout = page.getByText('Proceed To Checkout');

  }
  
  async addProduct() {
    await this.selectProduct.click();
    await this.addQuantity.fill('3');
    await this.addToCart.click();
    await this.viewCart.click();
    await this.checkout.click();
  }


}


