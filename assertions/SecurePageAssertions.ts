import { expect, Page } from '@playwright/test';
import { SecurePage } from '../pages/SecurePage';

export class SecurePageAssertions {
  static async viewCart(page: Page) {
    const securePage = new SecurePage(page);

    const url = await securePage.getUrl();
    expect(url).toContain('automationexercise.com/login');
  }
}
