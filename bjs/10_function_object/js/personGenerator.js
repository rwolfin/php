const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александра",
            "id_2": "Екатерина",
            "id_3": "Анна",
            "id_4": "Мария",
            "id_5": "София",
            "id_6": "Виктория",
            "id_7": "Полина",
            "id_8": "Елена",
            "id_9": "Анастасия",
            "id_10": "Дарья"
        }
    }`,
     professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Программист",
             "id_2": "Инженер",
            "id_3": "Врач",
            "id_4": "Строитель",
            "id_5": "Водитель",
            "id_6": "Шахтер",
            "id_7": "Полицейский",
            "id_8": "Слесарь",
            "id_9": "Пожарный",
            "id_10": "Фермер"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
           "id_1": "Учительница",
             "id_2": "Медсестра",
            "id_3": "Дизайнер",
            "id_4": "Повар",
            "id_5": "Секретарь",
            "id_6": "Бухгалтер",
            "id_7": "Продавец",
            "id_8": "Флорист",
            "id_9": "Художник",
            "id_10": "Парикмахер"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

     generateMiddleNameFromFirstName: function (firstName, gender) {
        let middleName = "";
        firstName = firstName.toLowerCase();

        if (gender === this.GENDER_MALE) {
            if (firstName.endsWith('а')) {
                 if(firstName === "никита" || firstName === "савва" || firstName === "мина" ) {
                       middleName = firstName.slice(0, -1) + "ич";
                   }
                   else {
                       middleName = firstName.slice(0, -1) + "ович"
                   }
            }else if (firstName.endsWith('ж') || firstName.endsWith('ш') || firstName.endsWith('ч') || firstName.endsWith('щ') || firstName.endsWith('ц')) {
              middleName = firstName + "евич";
           }else if (firstName.endsWith('ь'))
           {
               middleName = firstName.slice(0, -1) + "евич";
           }
           else if (firstName.endsWith('й'))
           {
               middleName = firstName.slice(0, -1) + "евич";
           }
           else if (firstName.endsWith('е'))
           {
               middleName = firstName.slice(0, -1) + "евич";
           }
           else if(firstName.endsWith('и'))
           {
             middleName = firstName + "евич";
           }
            else {
                 middleName = firstName + "ович";
            }
        } else {
            if (firstName === "виктория"){
                middleName = "викторовна";
            }
            else if (firstName === "дарья"){
                 middleName = "дарьевна";
             }
            else if (firstName === "мария"){
                middleName = "мариевна";
             }
            else if (firstName === "софия"){
                 middleName = "софьевна";
             }
             else if (firstName === "анастасия") {
                middleName = "анастасиевна";
            }
           else if (firstName.endsWith('а')) {
                 if(firstName === "никита" || firstName === "савва" || firstName === "мина" ) {
                       middleName = firstName.slice(0, -1) + "ична";
                   }
                    else {
                        middleName = firstName.slice(0, -1) + "овна";
                   }
            }
            else if (firstName.endsWith('ж') || firstName.endsWith('ш') || firstName.endsWith('ч') || firstName.endsWith('щ') || firstName.endsWith('ц')) {
                middleName = firstName + "евна";
            }else if (firstName.endsWith('ь'))
           {
               middleName = firstName.slice(0, -1) + "евна";
           }
            else if (firstName.endsWith('й'))
            {
                middleName = firstName.slice(0, -1) + "евна";
            }
             else if (firstName.endsWith('е'))
            {
                middleName = firstName.slice(0, -1) + "евна";
            }
            else if(firstName.endsWith('и'))
            {
                middleName = firstName + "евна";
            }
              else {
                middleName = firstName + "овна";
            }
        }

        return middleName.charAt(0).toUpperCase() + middleName.slice(1);
    },
    randomMiddleName: function(firstName,gender) {
           return  this.generateMiddleNameFromFirstName(firstName,gender);
    },

     randomProfession: function(gender) {
           if (gender === this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },


    randomSurname: function(gender) {
          const surname = this.randomValue(this.surnameJson);
          if (gender === this.GENDER_FEMALE)
          {
            return surname + 'а';
          }
          else {
             return surname;
          }

    },

    randomGender: function() {
       return this.randomIntNumber(1,0) === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },
     randomBirthYear: function() {
          return this.randomIntNumber(2000,1950)
    },

    randomMonth: function(){
        return this.randomValue(this.monthJson);
    },
     randomDay: function(month){
      const monthNumber = Object.keys(JSON.parse(this.monthJson).list).find(key => JSON.parse(this.monthJson).list[key] === month);
      
         if (monthNumber === "id_2") { // февраль
            return this.randomIntNumber(28, 1);
        } else if (["id_4", "id_6", "id_9", "id_11"].includes(monthNumber)) { // Апрель, Июнь, Сентябрь, Ноябрь
            return this.randomIntNumber(30, 1);
        } else {
            return this.randomIntNumber(31, 1);
        }
    },



    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.middleName = this.randomMiddleName(this.person.firstName, this.person.gender);
        this.person.profession = this.randomProfession(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.birthYear = this.randomBirthYear();
        this.person.birthMonth = this.randomMonth();
        this.person.birthDay = this.randomDay(this.person.birthMonth);

        return this.person;
    }
};