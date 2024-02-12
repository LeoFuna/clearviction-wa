describe('From Home Page', () => {
  it('its possible to access calculator and copy link to share', () => {
    cy.visit('/');

    cy.get('a:contains("Access Calculator"):visible').should('have.length', 2);
    cy.get('a:contains("Access Calculator"):visible').first().click();
    cy.url().should('include', '/calculator/head-initial-1-cont');
    cy.visit('/');
    cy.get('a:contains("Access Calculator"):visible').eq(1).click();
    cy.url().should('include', '/calculator/head-initial-1-cont');
    // cy.contains('Access Calculator').click();

    // cy.contains('Check your eligibility using the Eligibility Calculator').should('exist');
    // cy.contains('Next').should('exist');
    // cy.contains('Copy Link').should('not.exist');
    // cy.contains('Share the calculator').should('exist');
  });
});
