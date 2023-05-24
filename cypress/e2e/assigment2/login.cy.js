describe('Real Wordl app tests', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000/signin');
        cy.get('#username').clear().type('Katharina_Bernier');
        cy.get('#password').clear().type('s3cret');
        cy.get('.MuiButton-label').click();
        cy.get('h6[data-test="sidenav-username"]').should('contain', '@Katharina_Bernier');
    });

    it('Create a Bank Account', () => {
        cy.get('.MuiTypography-root').contains('Bank Accounts').click();
        cy.get('a[data-test="bankaccount-new"] span').contains('Create').click({force: true});
        cy.get('#bankaccount-bankName-input').clear().type('Bank of America');
        cy.get('#bankaccount-routingNumber-input').clear().type('111111111');
        cy.get('#bankaccount-accountNumber-input').clear().type('111111111');
        cy.get(".MuiButton-label").contains('Save').click();
        cy.get('ul[data-test="bankaccount-list"] > li').should('contain', 'Bank of America');
    });

    afterEach(() => {
        cy.get('span.MuiTypography-root').contains('Logout').click();
    });
});