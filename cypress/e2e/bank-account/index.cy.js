import { bankAccount } from '../../page-objects/pages/bank-account';
import { user } from '../../page-objects/pages/user';

describe('BankAccount', () => {
    
    // get uuid random string
    const accountNumber = '111111111';
    const routingNumber = '111111111';
    const username = 'Katharina_Bernier';
    const password = 's3cret';

    beforeEach(()=> {
        user.login(username, password);
        user.matchers.getSuccessMsg().should('contain', `@${username}`);
    });

    it('creates a with valid data', () => {
        const accountName = `Bank of America ${Cypress._.random(0, 1e6)}`;
        bankAccount.new(accountName, accountNumber, routingNumber);
        bankAccount.matchers.getSuccessMsg().contains(accountName).should('be.visible');
        bankAccount.elements.getListAccountItem().contains(accountName).parents('li').find('button').click();
    });

    it('delete with valida data', () => {
        const accountName = `Bank of America ${Cypress._.random(0, 1e6)}`;
        bankAccount.new(accountName, accountNumber, routingNumber);
        bankAccount.elements.getBankAccountBtn().click();
        bankAccount.elements.getListAccountItem().contains(accountName).parents('li').find('button').click();
        bankAccount.matchers.getSuccessMsg().contains(`${accountName} (Deleted)`).should('be.visible');
    });

    afterEach(() => {
        user.logout();
    });
});
