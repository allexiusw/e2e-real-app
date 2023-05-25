describe('Real Wordl app tests', () => {
    // get uuid random string
    const accountName = `Bank of America ${Cypress._.random(0, 1e6)}`
    beforeEach(()=> {
        cy.visit('/');
        cy.get('#username').clear().type('Katharina_Bernier');
        cy.get('#password').clear().type('s3cret');
        cy.get('.MuiButton-label').click();
        cy.get('h6[data-test="sidenav-username"]').should('contain', '@Katharina_Bernier');
    });

    it('should create a Bank Account', () => {
        cy.get('.MuiTypography-root').contains('Bank Accounts').click();
        cy.get('a[data-test="bankaccount-new"] span').contains('Create').click({force: true});
        cy.get('#bankaccount-bankName-input').clear().type(accountName);
        cy.get('#bankaccount-routingNumber-input').clear().type('111111111');
        cy.get('#bankaccount-accountNumber-input').clear().type('111111111');
        cy.get(".MuiButton-label").contains('Save').click();
        cy.get('ul[data-test="bankaccount-list"] > li').contains(accountName).should('be.visible');
    });

    it('should delete a Bank Account', () => {
        cy.get('.MuiTypography-root').contains('Bank Accounts').click();
        cy.get('ul[data-test="bankaccount-list"] li p').contains(accountName).parents('li').find('button').click();
        cy.get('ul[data-test="bankaccount-list"] li p').contains(`${accountName} (Deleted)`).should('be.visible');
    });

    afterEach(() => {
        cy.get('span.MuiTypography-root').contains('Logout').click();
    });
});