export class User {

    constructor(){
        this.elements = {
            goToUrl: () => cy.visit('/'),
            getUsernameInput: () =>  cy.get('#username').clear(),
            getPasswordInput: () => cy.get('#password').clear(),
            getLoginBtn: () => cy.get('.MuiButton-label'),
            getLogoutBtn: () => cy.get('span.MuiTypography-root').contains('Logout')
        }

        // Set of elements that are going to be usefull for assertions
        this.matchers = {
            getSuccessMsg: () =>  cy.get('h6[data-test="sidenav-username"]'),
        }
    }

    login(username, password) {
        this.elements.goToUrl();
        this.elements.getUsernameInput().type(username);
        this.elements.getPasswordInput().type(password);
        this.elements.getLoginBtn().click();
    }

    logout() {
        this.elements.getLogoutBtn().click();
    }
}

export const user = new User();
