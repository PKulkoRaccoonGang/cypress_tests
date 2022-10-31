describe('Edx tests', () => {
    it('Home page snap', () => {
        cy.visit('http://localhost:18000/')

        const djangoSitebar = cy.get('a').contains('Hide »');
        djangoSitebar.click();

        cy.compareSnapshot();
    });
});