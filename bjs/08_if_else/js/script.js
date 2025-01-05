//
//
// Роман Волков
// мой GutHub https://github.com/rwolfin
//
//


//все 5 переменных через запятую в одну. На мой взгляд это правильно
let minValue, maxValue, answerNumber, orderNumber, gameRun;


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
const questionPhrases = [
    "Да это легко! Ты загадал число {number}?",
    "Наверное, это число {number}?",
    "Может быть, это {number}?",
    "Хмм.. неужели это {number}",
    "Да ты издеваешься ! {number}",
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
    70: 'семьдесят', 80: 'восемьдесят', 90: 'девяносто', 100: 'сто',
};




function getNumberInWords(number) {
    if (numbersToWords[number]) {
        return numbersToWords[number];
    }
    if (number < 100) {
        return numbersToWords[Math.floor(number / 10) * 10] + (number % 10 > 0 ? ' ' + numbersToWords[number % 10] : '');
    }
    if (number < 1000) {
    
    const hundreds = Math.floor(number / 100);
    const remaining = number % 100;
    let result = (hundreds > 1 ? numbersToWords[hundreds] + ' сто' : numbersToWords[100]);


    if (remaining > 0){
          result +=  ' '+ getNumberInWords(remaining);
    }
    return result;
    }
    return String(number);
}

function getRandomQuestionPhrase() {
    const randomIndex = Math.floor(Math.random() * questionPhrases.length);
    const numberText = getNumberInWords(answerNumber);

    return questionPhrases[randomIndex].replace("{number}", numberText);
}


function getRandomSuccessPhrase() {
    const randomIndex = Math.floor(Math.random() * successPhrases.length);
    return successPhrases[randomIndex];
}

function startGame() {
  
    minValue = parseInt(minValueInput.value) || 0;
    maxValue = parseInt(maxValueInput.value) || 100;

    minValue = minValue > 999 ? 999 : (minValue < -999 ? -999 : minValue);
    maxValue = maxValue > 999 ? 999 : (maxValue < -999 ? -999 : maxValue);
    
     minValueInput.value = minValue;
     maxValueInput.value = maxValue;


    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

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


btnEqual.addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = getRandomSuccessPhrase();
        gameRun = false;
       btnRetry.classList.remove("collapse");
    }
});