var countries = {};

function newCountry(name, capital){
    countries[name] = capital;
}

function delCountryInfo(){
    var name = prompt('Input country name:');
    delete countries[name];
}

function inputCountry(){
    alert('Input country and its capital name:');
    var cName = prompt('Input country:');
    var cCapital = prompt('Input capital (optional):');
    newCountry(cName, cCapital);
}

function showCountryList(){
    console.log('Countries list: ');
    var name;

    for (name in countries){
        if (countries[name] === '' || countries[name] === null){
            console.log('Country: ' + name + ', no additional info');
        }
        else{
            console.log('Country:  ' + name + ', capital: ' + countries[name]);
        }
    }
}

function showCountryInfo(){
    var name = prompt('Input country name:');

    if (name in countries){
        if (countries[name] === '' || countries[name] === null){
            console.log('no additional info');
        }
        else{
            console.log('Capital: ' + countries[name]);
        }
    }
    else{
        alert('Please, check the country list and then input name of country from it');
    }
}






