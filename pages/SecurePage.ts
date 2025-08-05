import { Page } from '@playwright/test';

export class SecurePage {
  readonly page: Page;
  readonly successMessageLocator = 'h1';

  constructor(page: Page) {
    this.page = page;
  }

  async getSuccessMessage() {
    return this.page.textContent(this.successMessageLocator);
  }

  async getUrl() {
    return this.page.url();
  }
}
