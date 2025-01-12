window.onload = function() {
    const generateButton = document.createElement('button');
    generateButton.innerText = 'Сгенерировать';
    generateButton.classList.add('btn','btn-primary','m-2')


    const clearButton = document.createElement('button');
    clearButton.innerText = 'Очистить';
    clearButton.classList.add('btn','btn-danger', 'm-2')

    const cardBody = document.querySelector('.card-body');
    cardBody.appendChild(generateButton);
    cardBody.appendChild(clearButton);


     function updatePerson() {
            const initPerson = personGenerator.getPerson();
            document.getElementById('surnameOutput').innerText = initPerson.surname;
            document.getElementById('firstNameOutput').innerText = initPerson.firstName + " " + initPerson.middleName;
            document.getElementById('genderOutput').innerText = initPerson.gender;
            document.getElementById('birthYearOutput').innerText = `${initPerson.birthDay} ${initPerson.birthMonth} ${initPerson.birthYear} года, профессия ${initPerson.profession}`;
        }
    updatePerson();

    generateButton.addEventListener('click', updatePerson);


   clearButton.addEventListener('click', function(){
           document.getElementById('surnameOutput').innerText = "Генерация фамилии";
           document.getElementById('firstNameOutput').innerText = "Имя";
          document.getElementById('genderOutput').innerText = "Генерация пола";
           document.getElementById('birthYearOutput').innerText = "Генерация года рождения";
   });


};