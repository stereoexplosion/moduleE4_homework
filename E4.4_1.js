const dogObj = {
    dogName: 'Шарпей',
    dogAge: 4,
    dogColor: 'Чёрный'
}

const getOwnKeysProperties = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} : ${obj[key]}`)
        }
    }
}

getOwnKeysProperties(dogObj);