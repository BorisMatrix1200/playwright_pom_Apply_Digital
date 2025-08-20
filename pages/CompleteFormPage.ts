import { Page, Locator,} from '@playwright/test';
import { faker } from '@faker-js/faker';


export class CompleteFormPage {
  readonly page: Page;

  readonly chkName: Locator;
  readonly password: Locator;
  readonly selectDay: Locator;
  readonly selectMonth: Locator;
  readonly selectYear: Locator;
  readonly firstNameRegister: Locator;
  readonly lastNameRegister: Locator;
  readonly company: Locator;
  readonly address: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipcode: Locator;
  readonly mobileNumber: Locator;
  readonly buttonCreateAccount: Locator;
  readonly buttonContinue: Locator;

  // Generate fake data
  private Password: string;
  private Name: string;
  private LastName: string;
  private Company: string;
  private Address: string;
  private State: string;
  private City: string;
  private ZipCode: string;
  private Mobile: string;

  constructor(page: Page) {
    this.page = page;

    this.chkName = page.getByRole('radio', { name: 'Mr.' });
    this.password = page.getByRole('textbox', { name: 'Password *' });
    this.selectDay = page.locator('#days');
    this.selectMonth = page.locator('#months');
    this.selectYear = page.locator('#years');
    this.firstNameRegister = page.getByRole('textbox', { name: 'First name *' });
    this.lastNameRegister = page.getByRole('textbox', { name: 'Last name *' });
    this.company = page.getByRole('textbox', { name: 'Company', exact: true });
    this.address = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
    this.country = page.getByLabel('Country *');
    this.state = page.getByRole('textbox', { name: 'State *' });
    this.city = page.getByRole('textbox', { name: 'City * Zipcode *' });
    this.zipcode =  page.locator('#zipcode');
    this.mobileNumber = page.getByRole('textbox', { name: 'Mobile Number *' });
    this.buttonCreateAccount = page.getByRole('button', { name: 'Create Account' });
    this.buttonContinue = page.getByRole('link', { name: 'Continue' });

     // Generate fake data
    this.Password = faker.internet.password({ length: 8 });
    this.Name = faker.person.firstName();
    this.LastName = faker.person.lastName();
    this.Company = faker.company.name();
    this.Address = faker.location.streetAddress();
    this.State = faker.location.state();
    this.City = faker.location.city();
    this.ZipCode = faker.location.zipCode();
    this.Mobile = "3" + faker.string.numeric(9); //Colombian Style

  }
  
  async completeForm() {
    
    await this.chkName.check();
    await this.password.fill(this.Password)
    await this.selectDay.selectOption('28');
    await this.selectMonth.selectOption('3');
    await this.selectYear.selectOption('1990');
    await this.firstNameRegister.fill(this.Name);
    await this.lastNameRegister.fill(this.LastName);
    await this.company.fill(this.Company);
    await this.address.fill(this.Address);
    await this.country.selectOption('United States');
    await this.state.fill(this.State);
    await this.city.fill(this.City);
    await this.zipcode.fill(this.ZipCode);
    await this.mobileNumber.fill(this.Mobile);
    await this.buttonCreateAccount.click();
    await this.buttonContinue.click();

  }

}

