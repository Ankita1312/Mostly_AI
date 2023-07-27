
describe('Mostly AI Tests', () => {
  // Before each test, visit the website and click on the cookie consent button
  beforeEach(() => {
    cy.c
    cy.visit('https://mostly.ai/');
    cy.get('#CookieBoxSaveButton').click({ force: true });
  });

  // Test case to verify the visibility of bookmarks
  it('Verify the visible bookmarks', () => {
    const bookmarks = ['Platform', 'Synthetic Data', 'Resources', 'Company', 'Pricing'];
    // Loop through each bookmark and check if it's visible
    bookmarks.forEach(bookmark => {
      cy.get('#-mega-menu-3762-16').contains('.oxy-mega-dropdown', bookmark).should('be.visible');
    });
    // Take a screenshot for verification purposes
    cy.screenshot('verify_bookmark', { capture: 'runner' });
  });

  // Test case to verify search results for wrong spelling
  it('Verify search results for wrong spelling', () => {
    cy.get('#open-header-search-4002-16-icon').click({ force: true });
    cy.get('.oxy-header-search_search-field').type('sythetic{enter}');
    // Verify that the "no results" message is displayed and visible
    cy.get('#div_block-273-1315').should('have.text', 'Sorry, no results for:sythetic').should('be.visible');
    cy.screenshot('wrong_spelling', { capture: 'runner' });
  });

  // Test case to fill and verify the Contact form
  it('Fill and verify Contact form', () => {
    // Hover over the dropdown and click on the link to open the Contact form
    cy.get('#-mega-dropdown-3962-16').trigger('mouseover');
    cy.get('a#link-3983-16').click({ force: true });
    // Form data to be filled
    const formData = {
      firstName: 'Mostly',
      lastName: 'AI',
      businessEmail: 'MostlyAI@algo.com',
      mobileNumber: '1234567890',
      organization: 'ABCCorp',
      countryRegion: 'Germany',
      howDidYouHear: 'Search engine',
      description: 'This is a test message.',
    };
    // Fill the form fields with the provided data
    cy.get('#firstname-27854f4c-b840-41f2-b7af-a3c9f512c9e8').type(formData.firstName);
    cy.get('#firstname-27854f4c-b840-41f2-b7af-a3c9f512c9e8').type(formData.lastName);
    cy.get('#email-27854f4c-b840-41f2-b7af-a3c9f512c9e8').type(formData.businessEmail);
    cy.get('#mobilephone-27854f4c-b840-41f2-b7af-a3c9f512c9e8').type(formData.mobileNumber);
    cy.get('#company-27854f4c-b840-41f2-b7af-a3c9f512c9e8').type(formData.organization);
    cy.get('#country-27854f4c-b840-41f2-b7af-a3c9f512c9e8').select(formData.countryRegion);
    cy.get('#how_did_you_hear_about_mostly_ai___free_text-27854f4c-b840-41f2-b7af-a3c9f512c9e8').type(formData.howDidYouHear);
    cy.get('#message-27854f4c-b840-41f2-b7af-a3c9f512c9e8').type(formData.description);
    cy.get('label.hs-form-booleancheckbox-display').click();
    // Verify that the "SEND MESSAGE" button is visible and hover over it
    cy.get('.btn-block').should('have.value', 'SEND MESSAGE').trigger('mouseover');
    cy.screenshot('contact_form', { capture: 'runner' });
  });

});
