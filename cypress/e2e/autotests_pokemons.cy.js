describe('Тестирование авторизации', function () {

    it('Авторизация на сайт', function () {
       cy.visit('https://pokemonbattle.ru/login');
       cy.get(':nth-child(1) > .auth__input').type('naum-123@yandex.ru'); // Вводим логин
       cy.get('#password').type('Qwerty163zxcv'); // Вводим пароль
       cy.get('.auth__button').click(); // Нажимаем Войти

       cy.get('.header__btns > :nth-child(4)').click(); // Нажимаем на Магазин
       cy.get(':nth-child(2) > .shop__button').click(); // Выбираем и покупаем первого аватара (КАЖДЫЙ РАЗ НЕОБХОДИМО ИЗМЕНЯТЬ НОМЕР КАРТОЧКИ АВАТАРА)

        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // Вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // Вводим срок годности карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Вводим CVV
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Anton Antonov'); // Вводим владельца карты
        cy.get('.pay-btn').click(); // Нажимаем оплатить
        cy.get('#cardnumber').type('56456'); // Вводим код из СМС
        cy.get('.payment__submit-button').click(); // Подтверждаем
        cy.get('.payment__adv').click(); // Возвращаемся в битву покемонов

        cy.get('.header__container > .header__id').click(); // Нажимаем на иконку нашего тренера, чтобы перейти и убедиться, что мы его купили
     })
})