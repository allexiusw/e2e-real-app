export class Transaction {
    constructor(){
        this.path = '/transaction';
        this.elements = {
            getNewBtn: () => cy.get('a').contains('New'),
            getSearchBar: () => cy.get('#user-list-search-input'),
            getContactLst: () => cy.get('ul[data-test="users-list"] li'),
            getAmountTxt: () => cy.get('#amount'),
            getNoteTxt: () => cy.get('#transaction-create-description-input'),
            getPayBtn: () => cy.get('button[data-test="transaction-create-submit-payment"] > .MuiButton-label'),
        }

        // Set of elements that are going to be usefull for assertions
        this.matchers = {
            getSuccessMsg: () => cy.get('h2'),
        }
    }

    new(contactName, amount, note) {
        this.elements.getNewBtn().click();
        this.elements.getSearchBar().type(contactName);
        this.elements.getContactLst().contains(contactName).click();
        this.elements.getAmountTxt().clear().type(amount);
        this.elements.getNoteTxt().clear().type(note);
        this.elements.getPayBtn().click();
    }
}

export const transaction = new Transaction();
