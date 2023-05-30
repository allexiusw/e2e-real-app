export class BankAccount {
    constructor(){
        this.elements = {
            getBankAccountBtn: () => cy.get('.MuiTypography-root').contains('Bank Accounts'),
            getNewBtn: () => cy.get('a[data-test="bankaccount-new"] span').contains('Create'),
            getAccountNameInput: () => cy.get('#bankaccount-bankName-input').clear(),
            getRountingNumberInput: () => cy.get('#bankaccount-routingNumber-input').clear(),
            getAccountNumberInput: () => cy.get('#bankaccount-accountNumber-input').clear(),
            getSaveBtn: () => cy.get(".MuiButton-label").contains('Save'),
            getListAccountItem: () => cy.get('ul[data-test="bankaccount-list"] li p')
        }

        // Set of elements that are going to be usefull for assertions
        this.matchers = {
            getSuccessMsg: () => cy.get('ul[data-test="bankaccount-list"] li p'),
        }
    }

    new(accountName, accountNumber, routingNumber) {
        this.elements.getBankAccountBtn().click();
        this.elements.getNewBtn().click({force: true});
        this.elements.getAccountNameInput().type(accountName);
        this.elements.getRountingNumberInput().type(routingNumber);
        this.elements.getAccountNumberInput().type(accountNumber);
        this.elements.getSaveBtn().click();
    }

    delete(accountName){
        this.elements.getBankAccountBtn().click();
        this.elements.getListAccountItem().contains(accountName).parents('li').find('button').click();
    }
}

export const bankAccount = new BankAccount();
