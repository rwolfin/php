//
//
// Роман Волков
// Мой GutHub https://github.com/rwolfin
// t.me/roman_volkow
//
//


//все 5 переменных через запятую в одну.
let minValue, maxValue, answerNumber, orderNumber, gameRun;

//Можно еще было использовать query.Selector но getElementById на мой взгляд изящней :) в данных переменных

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
const btnLess = document.getElementById('btnLess');
const btnOver = document.getElementById('btnOver');
const btnEqual = document.getElementById('btnEqual');
const btnRetry = document.getElementById('btnRetry');
const btnStart = document.getElementById('btnStart');
const gameArea = document.getElementById('game-area');
const startAlert = document.getElementById('start-game-alert');

const minValueInput = document.getElementById('min-value');
const maxValueInput = document.getElementById('max-value');

//Сообщения лучше добавить в массив 
//Сюда тоже можно добавить различные смайлики
const questionPhrases = [
    "Да это легко! Ты загадал число {number}?",
    "Наверное, это число {number}?",
    "Может быть, это {number}?",
    "Хмм.. неужели это {number}",
    "Я знаю, это ! {number}",
];

//И это тоже лучше в массив. Можно добавить очень много фраз - это что сделает игру интереснее :) 
const successPhrases = [
    "Я всегда угадываю! \u{1F60E}",
    "Вот это был вызов, но я справился! \u{1F973}",
    "Угадывание - это моя стихия! \u{1F929}",
    "Чтобы ты не загадал - я всегда угадаю какое это число \u{1F929}",
    "Я всегда узнаю какую ты цифру держишь в голове \u{1F929}",
];

//Числа которые будут выводится текстом лучше всего добавить в оъект 
const numbersToWords = {
    0: 'ноль', 1: 'один', 2: 'два', 3: 'три', 4: 'четыре',
    5: 'пять', 6: 'шесть', 7: 'семь', 8: 'восемь', 9: 'девять',
    10: 'десять', 11: 'одиннадцать', 12: 'двенадцать', 13: 'тринадцать', 14: 'четырнадцать',
    15: 'пятнадцать', 16: 'шестнадцать', 17: 'семнадцать', 18: 'восемнадцать', 19: 'девятнадцать',
    20: 'двадцать', 30: 'тридцать', 40: 'сорок', 50: 'пятьдесят', 60: 'шестьдесят',
    70: 'семьдесят', 80: 'восемьдесят', 90: 'девяносто', 100: 'сто', 200: 'двести',
    300: 'триста', 400: 'четыреста', 500: 'пятьсот', 600: 'шестьсот', 700: 'семьсот',
    800: 'восемьсот', 900: 'девятьсот'
};


// Эта функция которая решает задачу по преобразованию угаданного числа в текст, пример - 99 = "девяносто девять" 
function getNumberInWords(number) {
    // Проверяем является ли число отрицательным
    if (number < 0) {
        return "минус " + getNumberInWords(Math.abs(number)); // рекурсия для положительного значения числа
    }
    if (numbersToWords[number]) {
        return numbersToWords[number];
    }
    // Обработка чисел меньше 100
    if (number < 100) {
        return numbersToWords[Math.floor(number / 10) * 10] + (number % 10 > 0 ? ' ' + numbersToWords[number % 10] : '');
    }

// Обработка чисел меньше 1000
//Этот блок кода выполняется если число меньше 1000 но больше или равно 100 :)
      if (number < 1000) {
        const hundreds = Math.floor(number / 100) * 100;
        const remaining = number % 100;
        let result = numbersToWords[hundreds];


        if (remaining > 0) {
            result += ' ' + getNumberInWords(remaining);
        }
        return result;
    }
    return String(number);
}


// Эта функция которая формирует случайную фразу из массива questionPhrases
function getRandomQuestionPhrase() {
    const randomIndex = Math.floor(Math.random() * questionPhrases.length);
    const numberText = getNumberInWords(answerNumber);
    return questionPhrases[randomIndex].replace("{number}", numberText);
}

// А эта функция формерует фразу из массива successPharases - когда число угаданно 
function getRandomSuccessPhrase() {
    const randomIndex = Math.floor(Math.random() * successPhrases.length);
    return successPhrases[randomIndex];
}


//Функция которая выполняется при нажатии на кнопку "Начать игру"

function startGame() {
  
    //Получаем максимальное или минимальное значение parseInt() делает из строк числа
    // Если мы введем текст вместо числа то мы получим NaN, по умолчанию используем 0 и 100 
    minValue = parseInt(minValueInput.value) || 0;
    maxValue = parseInt(maxValueInput.value) || 100;

    // делаем ограничение от -999 до 999 с помощью тернарных опператоров
    minValue = minValue > 999 ? 999 : (minValue < -999 ? -999 : minValue);
    maxValue = maxValue > 999 ? 999 : (maxValue < -999 ? -999 : maxValue);
    
    minValueInput.value = minValue;
    maxValueInput.value = maxValue;

    //А здесь Вычисляется середина диапазона (minValue и maxValue) и сохраняется в answerNumber. 
    //Это начальное число, которое будет пытаться угадать компьютер. Math.floor округляет значение до ближайшего меньшего целого числа.
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    //тут обновляем интерфейс
    orderNumberField.innerText = orderNumber;
    answerField.innerText = getRandomQuestionPhrase();
    gameArea.classList.remove("collapse");
    startAlert.classList.remove("show");
    btnRetry.classList.add("collapse")

}

    btnStart.addEventListener('click', startGame);
    btnRetry.addEventListener('click', function () {
    gameArea.classList.add("collapse");
    startAlert.classList.add("show");
    btnRetry.classList.add("collapse");
    
});

//Кнопка Меньше
btnLess.addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            answerField.innerText = "Вы загадали неправильное число!\n\u{1F914}";
            gameRun = false;
           btnRetry.classList.remove("collapse");
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getRandomQuestionPhrase();
        }
    }
});

//Кнопка Больше
btnOver.addEventListener('click', function () {
     if (gameRun) {
        if (minValue === maxValue) {
            answerField.innerText = "Вы загадали неправильное число!\n\u{1F914}";
            gameRun = false;
             btnRetry.classList.remove("collapse");
        } else {
           minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getRandomQuestionPhrase();
        }
    }
});

//Кнопка верно
btnEqual.addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = getRandomSuccessPhrase();
        gameRun = false;
       btnRetry.classList.remove("collapse");
    }
});