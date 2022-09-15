var countries = new Object();
var countriesList = new Array();


function newCountry(name, capital){
    countries[name] = capital;
    countriesList.push(name);
}

function delCountryInfo(){
    var name = prompt('Введите название страны:');
    delete countries[name];

    var item = countriesList.indexOf(name, 0);
    countriesList.splice(item, 1);
}

function inputCountry(){
    alert('Введите страну и её столицу');
    var cName = prompt('Введите страну:');
    var cCapital = prompt('Введите столицу (не обязательно):');

    newCountry(cName, cCapital);
}

function showCountryList(){
    console.log('Countries list: ');
    
    for (var i = 0; i < countriesList.length; i++){
        console.log(countriesList[i]);
    }
}

function showCountryInfo(){
    var name = prompt('Введите название страны:');

    if (name in countries){
        if (countries[name] == false){
            console.log('Нет информации о стране');
        }
        else{
            console.log('Столица: ' + countries[name]);
        }
    }
    else{
        alert('Загляните в список стран и введите необходимую из перечня');
    }
}






