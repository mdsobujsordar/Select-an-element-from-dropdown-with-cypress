class seliseAssessment {
    baseURL () {
        cy.fixture('data.json').then((data) =>{
            cy.visit(data.url);
            cy.url().should('include', 'amazon.com');
        })
    }
    selectItem () {
        cy.fixture('data.json').then((data) =>{
            cy.get('#searchDropdownBox').select(data.item_name, {force:true});
            
        })
    }
    searchItem() {
        cy.fixture('data.json').then((data) =>{
            cy.get('#twotabsearchtextbox').type(data.item_name);
            cy.get('#nav-search-submit-button').click();
        })
    }
}
export default seliseAssessment;