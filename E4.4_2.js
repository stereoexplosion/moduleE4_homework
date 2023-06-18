const dogObj = {
    dogName: 'Шарпей',
    dogAge: 4,
    dogColor: 'Чёрный'
}

const trueString = 'Чёрный',
    falseString = 'Белый';

const checkPropertyExists = (string, obj) => {
    for (let key in obj) {
        if (obj[key] === string) {
            return console.log(true)
        }
    }
    return console.log(false)
}

checkPropertyExists(trueString, dogObj);
checkPropertyExists(falseString, dogObj);