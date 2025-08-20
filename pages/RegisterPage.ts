import { Page, Locator,} from '@playwright/test';
import { faker } from '@faker-js/faker';


export class RegisterPage {
  readonly page: Page;

  readonly register: Locator;
  readonly firstName: Locator;
  readonly emailAddress: Locator;
  readonly signUp: Locator;

  // Generate fake data
  private Name: string;
  private Email: string;

  constructor(page: Page) {
    this.page = page;

    this.register = page.getByRole('link', { name: 'Register / Login' });
    this.firstName = page.getByRole('textbox', { name: 'Name' });
    this.emailAddress = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    this.signUp = page.getByRole('button', { name: 'Signup' });

     // Generate fake data
    this.Name = faker.person.firstName();
    this.Email = faker.internet.email();

  }
  
  async registerUser() {
    await this.register.click();
    await this.firstName.fill(this.Name);
    await this.emailAddress.fill(this.Email);
    await this.signUp.click();
  }

}
