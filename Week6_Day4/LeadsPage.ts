import { expect, Locator, Page } from '@playwright/test';

export class LeadsPage {
  readonly page: Page;
  readonly leadsTab: Locator;
  readonly createLeadLink: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyNameInput: Locator;
  readonly localFirstNameInput: Locator;
  readonly departmentNameInput: Locator;
  readonly descriptionInput: Locator;
  readonly emailInput: Locator;
  readonly createButton: Locator;
  readonly leadIdValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.leadsTab = page.locator('a:has-text("Leads")');
    this.createLeadLink = page.locator('a:has-text("Create Lead")');
    this.firstNameInput = page.locator('#createLeadForm_firstName');
    this.lastNameInput = page.locator('#createLeadForm_lastName');
    this.companyNameInput = page.locator('#createLeadForm_companyName');
    this.localFirstNameInput = page.locator('#createLeadForm_firstNameLocal');
    this.departmentNameInput = page.locator('#createLeadForm_departmentName');
    this.descriptionInput = page.locator('#createLeadForm_description');
    this.emailInput = page.locator('#createLeadForm_primaryEmail');
    this.createButton = page.locator('input[name="submitButton"]');
    this.leadIdValue = page.locator('#sectionHeaderTitle_leads');
  }

  async openCreateLead(): Promise<void> {
    await this.leadsTab.click();
    await expect(this.createLeadLink).toBeVisible();
    await this.createLeadLink.click();
  }

  async fillLeadForm(data: {
    companyName: string;
    firstName: string;
    lastName: string;
    localFirstName: string;
    department: string;
    description: string;
    email: string;
  }): Promise<void> {
    await this.companyNameInput.fill(data.companyName);
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.localFirstNameInput.fill(data.localFirstName);
    await this.departmentNameInput.fill(data.department);
    await this.descriptionInput.fill(data.description);
    await this.emailInput.fill(data.email);
  }

  async submit(): Promise<void> {
    await this.createButton.click();
  }

  async expectLeadCreated(): Promise<void> {
    await expect(this.page).toHaveURL(/.*viewLead/);
    await expect(this.leadIdValue).toContainText('View Lead');
  }
}
