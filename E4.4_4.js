let powerConsumptionSumm = 0;

function Device(deviceName, powerConsumption, deviceLocation) {
    this.deviceName = deviceName,
        this.deviceLocation = deviceLocation,
        this.powerConsumption = powerConsumption,
        this.isPowerOn = false
}

Device.prototype.changePower = function () {
    if (this.isPowerOn === false) {
        this.isPowerOn = true
        console.log(`Питание ${this.deviceName} включено!`)
        this.powerConsumptionMath(this.isPowerOn)
    } else {
        this.isPowerOn = false
        console.log(`Питание ${this.deviceName} выключено!`)
        this.powerConsumptionMath(this.isPowerOn)
    }
}

Device.prototype.powerConsumptionMath = function (boolean) {
    if (boolean === true) {
        powerConsumptionSumm += this.powerConsumption
        console.log(`Общее энергопотребление включённых приборов в доме теперь равняется ${powerConsumptionSumm} W`)
    } else {
        powerConsumptionSumm -= this.powerConsumption
        console.log(`Общее энергопотребление включённых приборов в доме теперь равняется ${powerConsumptionSumm} W`)
    }
}

const personalComputer = new Device('Персональный Компьютер', 500, 'Гостинная');
personalComputer.videoCard = 'GeForce 3060';
personalComputer.CPU = 'Intel i-5 12600k';

personalComputer.doJS = function () {
    if (this.isPowerOn == true) {
        console.log('Начинаем со всей силы вникать в JS...');
    } else {
        console.log('Для того, чтобы изучать JS, для начала включите компьютер!');
    }
}

const deskLamp = new Device('Настольная лампа', 50, 'Гостинная');
deskLamp.brightness = '700 люмен';

const microwave = new Device('Микроволновая печь', 800, 'Кухня');
microwave.developerName = 'Samsung';
microwave.modelName = 'ME16K3000AS';

microwave.doChebupeli = function () {
    if (this.isPowerOn === true) {
        console.log('Разогреваем чебупели...');
    } else {
        console.log('Для того, чтобы начать готовку, для начала включите питание микроволновки!');
    }
}

microwave.doPopcorn = function () {
    if (this.isPowerOn === true) {
        console.log('Готовим попкорн...');
    } else {
        console.log('Для того, чтобы начать готовку, для начала включите питание микроволновки!');
    }
}
console.log(personalComputer, deskLamp, microwave);
personalComputer.doJS();
personalComputer.changePower();
personalComputer.doJS();
microwave.doChebupeli();
microwave.changePower();
microwave.doChebupeli();
microwave.doPopcorn();
microwave.changePower();