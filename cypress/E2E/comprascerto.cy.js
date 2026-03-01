describe('teste de compras', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
        cy.login('standard_user', 'secret_sauce')
    })
    it('compras', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('.shopping_cart_link').click()
        cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
        cy.checkout({ firstName: 'João', lastName: 'Silva', zip: '12345' })
    })
  
    it('compras tudo', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '6')
        cy.get('.shopping_cart_link').click()
        const itens = [
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt',
            'Sauce Labs Fleece Jacket',
            'Sauce Labs Onesie',
            'Test.allTheThings() T-Shirt (Red)',
        ]
        itens.forEach((nome) => {
            cy.get('.inventory_item_name').should('contain', nome)
        })
        cy.checkout({ firstName: 'Maria', lastName: 'Souza', zip: '54321' })
    })

})