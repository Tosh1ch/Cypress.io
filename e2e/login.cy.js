describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');  //Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click(); //Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //После авторизации вижу верный текст
         cy.get('#messageHeader').should('be.visible'); //Тест виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и его видит пользователь
    })


    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
        cy.get('#forgotEmailButton').click(); //Нажали "Забыли пароль"
        cy.get('#mailForgot').type('tosha-ashot@mail.ru'); //Ввёл любой имеил
        cy.get('#restoreEmailButton').click(); //Нажал на кнопку "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //После восстановления вижу верный текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и его видит пользователь

    })

     it('Правильный логин и не правильный пароль', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('223445'); //Ввели не верный пароль
         cy.get('#loginButton').click(); //Нажал войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //После не верной авторизации вижу не верный текст
         cy.get('#messageHeader').should('be.visible'); //Тест виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и его видит пользователь
     })      

     it('Не правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
         cy.get('#mail').type('tosha-ashot@mail.ru'); //Ввели не верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click(); //Нажал войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //После не верной авторизации вижу верный текст
         cy.get('#messageHeader').should('be.visible'); //Тест виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и его видит пользователь
     })    

     it('Логин без @ и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
         cy.get('#mail').type('germandolnikov.ru'); //Ввели не верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click(); //Нажал войти
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //После не верной авторизации вижу верный текст
         cy.get('#messageHeader').should('be.visible'); //Тест виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и его видит пользователь
     })    
         
     it('Логин, написанный разным регистром и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
         cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели не верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click(); //Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //После не верной авторизации вижу верный текст
         cy.get('#messageHeader').should('be.visible'); //Тест виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и его видит пользователь
     })   

})