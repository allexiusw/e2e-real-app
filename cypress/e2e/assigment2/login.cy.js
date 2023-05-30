import { transaction } from "../../page-objects/pages/transaction";

describe('Real Wordl app tests', () => {
    
    // get uuid random string
    const accountName = `Bank of America ${Cypress._.random(0, 1e6)}`;
    const accountNumber = '111111111';
    const routingNumber = '111111111';
    const username = 'Katharina_Bernier';
    const password = 's3cret';

    beforeEach(()=> {
        cy.visit('/');
        cy.get('#username').clear().type(username);
        cy.get('#password').clear().type(password);
        cy.get('.MuiButton-label').click();
        cy.get('h6[data-test="sidenav-username"]').should('contain', `@${username}`);
    });

    it('should create a Bank Account', () => {
        cy.get('.MuiTypography-root').contains('Bank Accounts').click();
        cy.get('a[data-test="bankaccount-new"] span').contains('Create').click({force: true});
        cy.get('#bankaccount-bankName-input').clear().type(accountName);
        cy.get('#bankaccount-routingNumber-input').clear().type(routingNumber);
        cy.get('#bankaccount-accountNumber-input').clear().type(accountNumber);
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
