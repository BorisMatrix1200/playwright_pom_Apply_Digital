import { expect, Page } from '@playwright/test';
import { SecurePage } from '../pages/SecurePage';

export class SecurePageAssertions {
  static async assertUserIsLoggedIn(page: Page) {
    const securePage = new SecurePage(page);

    const url = await securePage.getUrl();
    expect(url).toContain('practicetestautomation.com/logged-in-successfully/');

    const message = await securePage.getSuccessMessage();
    expect(message).toContain('Logged In Successfully');
  }
}
