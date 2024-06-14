document.addEventListener('DOMContentLoaded', function() {
  const increaseButtons = document.querySelectorAll('.right-panel__item-quantity-increase');
  const decreaseButtons = document.querySelectorAll('.right-panel__item-quantity-decrease');
  let quantityValue = document.querySelectorAll('.right-panel__item-quantity-value');
  let increasePrice = document.querySelectorAll('.right-panel__item-choice-price');
  let totalPrice = document.querySelector('.right-panel__total-price');

  let counter = 0;// счетчик для колличество
  let initialPrice = 220;// начальная общая сумма
  let souseCounter = 0;// количество соусов
  let freeSauceAdded = false;// флаг для бесплатного соуса

  // Кнопка увеличение
  increaseButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      counter = parseInt(quantityValue[index].textContent);
      if (counter < 10) {
        if (!freeSauceAdded) {
          freeSauceAdded = true;
          increasePrice[index].textContent = '+0 ₽';
        } else {
          initialPrice += 60;
          totalPrice.textContent = `${initialPrice} ₽`;
          increasePrice[index].textContent = '+60 ₽';
        }

        souseCounter++;
        quantityValue[index].textContent = counter + 1;
      }
    });
  });

  // Кнопка уменьшение
  decreaseButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      counter = parseInt(quantityValue[index].textContent);
      if (counter > 0) {
        if (counter === 2) {
          increasePrice[index].textContent = '+0 ₽';
          initialPrice -= 60;
          totalPrice.textContent = `${initialPrice} ₽`;
        } else if (counter === 1) {
          if (souseCounter === 1) {
            freeSauceAdded = false;
            initialPrice -= 0; // No price change
          } else {
            initialPrice -= 60;
            totalPrice.textContent = `${initialPrice} ₽`;
          }
        } else if (counter > 2) {
          initialPrice -= 60;
          totalPrice.textContent = `${initialPrice} ₽`;
        }

        souseCounter--;
        quantityValue[index].textContent = counter - 1;
      }
    });
  });
});
