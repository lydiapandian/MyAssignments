import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../page/LoginPage';
import { LeadsPage } from '../page/LeadsPage';

// Test suite for creating a lead in the leaftaps application.
test.describe('Leads creation using POM', () => {
  test('Create a new lead with valid data', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const leadsPage = new LeadsPage(page);

    // Navigate to the Leaftaps login page and verify the login form.
    await loginPage.goto();

    // Log in with provided credentials.
    await loginPage.login('democsr', 'crmsfa');

    // Open the CRM/SFA application section.
    await loginPage.openCrmSfa();

    // Navigate to the Create Lead page.
    await leadsPage.openCreateLead();

    // Fill the create-lead form with generated test data.
    const leadData = {
      companyName: faker.company.name(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      localFirstName: faker.person.firstName(),
      department: faker.commerce.department(),
      description: faker.lorem.sentence(),
      email: faker.internet.email(),
    };

    await leadsPage.fillLeadForm(leadData);
    await leadsPage.submit();

    // Verify the lead was created successfully.
    await leadsPage.expectLeadCreated();
    await expect(page.locator('span[id="viewLead_companyName_sp"]')).toContainText(leadData.companyName.split(' ')[0]);
  });
});
