import { Page, Locator,} from '@playwright/test';
import { faker } from '@faker-js/faker';


export class ConfirmPurchase {
  readonly page: Page;

  readonly cart: Locator;
  readonly checkOut: Locator;
  readonly placeOrder: Locator;
  readonly nameCard: Locator;
  readonly numberCard: Locator;
  readonly cvc: Locator;
  readonly expMonth: Locator;
  readonly expYear: Locator;
  readonly payOrder: Locator;
  readonly continue: Locator;
  readonly logout: Locator;
  

  // Generate fake data
  private CardName: string;
  private CardNumber: string;
  private CVC: string;
  private ExpMonth: string;
  private ExpYear: string;


  constructor(page: Page) {
    this.page = page;

    this.cart = page.getByRole('link', { name: ' Cart' });
    this.checkOut = page.getByText('Proceed To Checkout');
    this.placeOrder = page.getByRole('link', { name: 'Place Order' });
    this.nameCard = page.locator('input[name="name_on_card"]');
    this.numberCard = page.locator('input[name="card_number"]');
    this.cvc = page.getByRole('textbox', { name: 'ex.' });
    this.expMonth = page.getByRole('textbox', { name: 'MM' });
    this.expYear = page.getByRole('textbox', { name: 'YYYY' });
    this.payOrder = page.getByRole('button', { name: 'Pay and Confirm Order' });
    this.continue = page.getByRole('link', { name: 'Continue' });
    this.logout = page.getByRole('link', { name: ' Logout' });

     // Generate fake data 
    this.CardName = faker.person.firstName();
    this.CardNumber = faker.finance.creditCardNumber();
    this.CVC = faker.finance.creditCardCVV();
    this.ExpMonth = '08';
    this.ExpYear = '2028';

  }
  
  async confirmPurchase() {
    
    await this.cart.click();
    await this.checkOut.click();
    await this.placeOrder.click();
    await this.nameCard.fill(this.CardName);
    await this.numberCard.fill(this.CardNumber);
    await this.cvc.fill(this.CVC);
    await this.expMonth.fill(this.ExpMonth);
    await this.expYear.fill(this.ExpYear);
    await this.payOrder.click();
    await this.continue.click();

  }

  async logOut() {
    
    await this.logout.click();

  }

}
