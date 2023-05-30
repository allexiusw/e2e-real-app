import { bankAccount } from '../../page-objects/pages/bank-account';

describe('BankAccount', () => {
    
    // get uuid random string
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

    it('creates a with valid data', () => {
        const accountName = `Bank of America ${Cypress._.random(0, 1e6)}`;
        bankAccount.new(accountName, accountNumber, routingNumber);
        bankAccount.matchers.getSuccessMsg().contains(accountName).should('be.visible');
    });

    it('delete with valida data', () => {
        const accountName = `Bank of America ${Cypress._.random(0, 1e6)}`;
        bankAccount.new(accountName, accountNumber, routingNumber);
        bankAccount.elements.getBankAccountBtn().click();
        cy.get('ul[data-test="bankaccount-list"] li p').contains(accountName).parents('li').find('button').click();
        bankAccount.matchers.getSuccessMsg().contains(`${accountName} (Deleted)`).should('be.visible');
    });

    afterEach(() => {
        cy.get('span.MuiTypography-root').contains('Logout').click();
    });
});
