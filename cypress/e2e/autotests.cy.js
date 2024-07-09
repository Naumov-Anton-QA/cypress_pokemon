describe('Тестирование авторизации', function () {

    it('1.Верная авторизация', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').should('be.visible');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();   
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('2.Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();  
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#forgotForm > .header').should('be.visible');
        cy.get('#exitRestoreButton').should('be.visible');
        cy.get('#restoreEmailButton').click();

    })
    it('3.Авторизация с ошибкой в пароле', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio12');
        cy.get('#loginButton').click();   
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
     it('4.Авторизация с ошибкой в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#mail').type('Jerman@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();   
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
     it('5.Авторизация без @ в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();   
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
     it('5.Авторизация со строчными и заглавными буквами в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#mail').type('German@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();   
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
})