let lastOperand = 0;
let minusOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


//операнды

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';

})

document.getElementById('btn_7').addEventListener('click', function () {
 inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9'
})

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0'
})


//Кнопка плюс
document.getElementById('btn_sum').addEventListener('click', function() {
    lastOperand = parseInt(inputWindow.value);
    operation ='sum';
    inputWindow.value = '';
    console.log(lastOperand);
})

//Кнопка минус
document.getElementById('btn_minus').addEventListener('click', function() {
    lastOperand = parseInt(inputWindow.value);
    operation ='minus';
    inputWindow.value = '';
    console.log(lastOperand);
})


//Оператор суммы и вычитания
document.getElementById('btn_calc').addEventListener('click', function() {
    if (operation === 'sum'){
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }

    if (operation === 'minus'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    

})

//Кнопка равно
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

