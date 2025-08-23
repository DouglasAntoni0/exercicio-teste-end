/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /* Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/produtos/') 
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        // Colocando o produto 1
        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', '“Abominable Hoodie” foi adicionado no seu carrinho.')

        // Colocando o produto 2
        cy.visit('/produtos/') // Volta para a lista de produtos
        cy.get('[class="product-block grid"]').contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', '“Arcadio Gym Short” foi adicionado no seu carrinho.')

        // Colocando o produto 3
        cy.visit('/produtos/')
        cy.get('[class="product-block grid"]').contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', '“Ajax Full-Zip Sweatshirt” foi adicionado no seu carrinho.')

        // Colocando o produto 4
        cy.visit('/produtos/')
        cy.get('[class="product-block grid"]').contains('Atlas Fitness Tank').click()
        cy.get('.button-variable-item-S').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.plus').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', '2 × “Atlas Fitness Tank” foram adicionados no seu carrinho.')

        // Checkout
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        // Prencher os dados
        cy.get('#billing_first_name').type('Douglas Antonio')
        cy.get('#billing_last_name').type('Miranda Dias')
        cy.get('#billing_company').type('EBAC TESTE')
        cy.get('#billing_address_1').type('Rua Logo Ali 56')
        cy.get('#billing_address_2').type('Apartamento de Luxo')
        cy.get('#billing_city').type('Belo Horizonte')
        cy.get('#billing_postcode').type('39600-000')
        cy.get('#billing_phone').type('33999723800')
        cy.get('#billing_email').type('aluno_ebac@teste.com')
        cy.get('#order_comments').type('Favor enviar a encomenda o mais rapido impossivel')

        // Finalizar a compra
        cy.get('#payment_method_cod').check()
        cy.get('#terms').check()
        cy.get('#place_order').click()
        
        // Certeza de que tudo funcionou
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
})


      





     





      









