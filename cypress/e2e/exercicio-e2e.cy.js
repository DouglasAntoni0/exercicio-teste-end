/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedidos', () => {
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

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta com produtos diferentes', () => {


        // Colocando o produto 1
        cy.adicionarProduto('Abominable Hoodie', 'L', 'Red')
        cy.get('.woocommerce-message').should('contain', '“Abominable Hoodie” foi adicionado no seu carrinho.')
        cy.visit('/produtos/')

        // Colocando o produto 2
        cy.adicionarProduto('Atlas Fitness Tank', 'S', 'Blue')
        cy.get('.woocommerce-message').should('contain', '“Atlas Fitness Tank” foi adicionado no seu carrinho.')
        cy.visit('/produtos/')

        // Colocando o produto 3
        cy.adicionarProduto('Arcadio Gym Short', '34', 'Black')
        cy.get('.woocommerce-message').should('contain', '“Arcadio Gym Short” foi adicionado no seu carrinho.')
        cy.visit('/produtos/')

        // Colocando o produto 4
        cy.adicionarProduto('Ariel Roll Sleeve Sweatshirt', 'L', 'Red')
        cy.get('.woocommerce-message').should('contain', '“Ariel Roll Sleeve Sweatshirt” foi adicionado no seu carrinho.')

        // Checkout 
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        // Prencher os dados do formulário
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
        
        // Validação final de que deu tudo certo
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
})


      





     





      









