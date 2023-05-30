/// <reference types="cypress" />
import { transaction } from '../../page-objects/pages/transaction';
import { user } from '../../page-objects/pages/user';

describe('Transaction', () => {
    const customerName = 'Arely Kertzmann';
    const transactionAmount = 100;
    const transactionNote = 'testing';
    const username = 'Katharina_Bernier';
    const password = 's3cret';

    beforeEach(()=> {
        user.login(username, password);
        user.matchers.getSuccessMsg().should('contain', `@${username}`);
    });
    
    afterEach(()=> {
        user.logout();
    });

    it('creates a new pay request', () => {
        transaction.new(customerName, transactionAmount, transactionNote);
        transaction.matchers.getSuccessMsg()
            .should('have.text', `${customerName}Paid $${transactionAmount}.00 for ${transactionNote}`);
        transaction
    });
});
