/// <reference types="cypress" />
import { transaction } from '../../page-objects/pages/transaction';

describe('Transaction', () => {
    const customerName = 'Arely Kertzmann';
    const transactionAmount = 100;
    const transactionNote = 'testing';
    const username = 'Katharina_Bernier';
    const password = 's3cret';

    beforeEach(()=> {
        cy.visit('/');
        cy.get('#username').clear().type(username);
        cy.get('#password').clear().type(password);
        cy.get('.MuiButton-label').click();
        cy.get('h6[data-test="sidenav-username"]').should('contain', `@${username}`);
    });
    
    afterEach(()=> {
        cy.get('span.MuiTypography-root').contains('Logout').click();
    });

    it('creates a new pay request', () => {
        transaction.new(customerName, transactionAmount, transactionNote);
        transaction.matchers.getSuccessMsg()
            .should('have.text', `${customerName}Paid $${transactionAmount}.00 for ${transactionNote}`);
    });
});
