describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('USER_LOGIN');               // вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD');         // вводим пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
         cy.wait(2000)                                                   // жду 2 секунды
         cy.get('.header__btns > :nth-child(4)').click();                // нажимаем кнопку Магазин
         cy.get('.available > button').eq(4).click();                    // кликаем по кнопке Купить у первого доступного аватара
         cy.get('.credit').type('5469520018951673');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('0924');                           // вводим срок действия карты
         cy.get('.k_input_name').type('ANTON DERECHA');                  // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });
