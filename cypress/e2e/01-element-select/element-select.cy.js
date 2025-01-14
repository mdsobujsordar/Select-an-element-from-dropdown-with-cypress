import selectDropdown from "./element-select.po"
const data = require('/cypress/fixtures/data.json');

describe('Amazon Item Test', function(){
    const action = new selectDropdown();
    beforeEach(() => {
        cy.window().then(win => win.sessionStorage.clear());
        cy.clearCookies();
        cy.clearLocalStorage();
        action.baseURL();
    })
    it('It will select Software from the dropdown', function(){
        action.selectItem();
    })
    it('It will an item in the search bar', function(){
        action.searchItem();
    })
})