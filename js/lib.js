// 'use strict'

(function () {
  function numTrue() {
    let textForUser =
      "Я загадаю число от 0 до 1000. У вас будет 10 попыток. Но вы можете ввести свое максимальное число:";
    let maxNumDefault = 1000;

    let max = getNumMax(textForUser, maxNumDefault);
    let numTrue = Math.floor(Math.random() * (max + 1));
    console.log("загаданное число: " + numTrue);

    return numTrue;
  }

  window.start = function start() {
    let j = 0;
    let n = numTrue();
    let i = makeCounter();

    while (j < 10) {
      j = i();
      console.log(j);

      let numForUser = getNum_or_null(
        "Попытка номер " + j + ". Введите число:", ""
        );
      if (numForUser === null) {
        alert("Было загаданно : " + n + ".");
        break;
      } else if (n > +numForUser) {
        alert("Больше!");
      } else if (n < +numForUser) {
        alert("Меньше!");
      } else if (n === +numForUser) {
        i = makeCounter();
        alert("Правильно!!!");
        break;
      }
    }
    if (j === 10) {
      alert("Вы не уложились в 10 попыток. Было загаданно : " + n + ".");
    }
  };

  function makeCounter() {
    let count = 1;
    return function () {
      return count++;
    };
  }

  //Дополнительные параметры для игры
  function getNumMax(text, byDefault = 0) {
    while (true) {
      if (num === null) {
        break;
      }
      var num = getNum_or_null(text, byDefault); //Выполняет стандартную функцию
      if (num === 0) {
        alert("Хитрец!!! Как много вариантов от 0 до 0?");
      } else if (num < 0) {
        alert("Зачем так усложнять. Введите положительное число.");
      } else if (num > 9007199254740991) {
        alert("Я не сомневаюсь в твоей интуиции, но давай уменьшим интервал.");
      } else {
        return +num;
      }
    }
  }

  // Запрашивает, обрабатывает, возвращает число или null.
  function getNum_or_null(text, byDefault = 0) {
    while (true) {
      var num = prompt(text, byDefault);
      if (num === null) {
        return num;
      }
      num = num.replace(/\s/g, "");
      if (num === "") {
        alert("Вы ничего не ввели");
      } else if (isNaN(Number(num))) {
        alert("Числа вводим цифрами )");
      } else {
        return +num;
      }
    }
  }
})();
