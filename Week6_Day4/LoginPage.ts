import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly crmSfaLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('.decorativeSubmit');
    this.crmSfaLink = page.locator('text=CRM/SFA');
  }

  async goto(): Promise<void> {
    await this.page.goto('http://leaftaps.com/opentaps/control/main');
    await expect(this.usernameInput).toBeVisible();
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async openCrmSfa(): Promise<void> {
    await this.crmSfaLink.click();
    await expect(this.page.locator('a:has-text("Leads")')).toBeVisible();
  }
}
