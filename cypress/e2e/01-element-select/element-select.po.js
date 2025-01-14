class selectDropdown {
    baseURL() {
        cy.visit(data.url);
        cy.url().should('include', 'amazon.com');
    }
    selectItem() {
        cy.get('#searchDropdownBox').should('be.enabled').select(data.item_name, { force: true });

    }
    searchItem() {
        cy.get('#twotabsearchtextbox').should('be.enabled').type(data.item_name);
        cy.get('#nav-search-submit-button').should('be.enabled').click();
    }
}
export default selectDropdown;