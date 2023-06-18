let powerConsumptionSumm = 0;

class Device {
    constructor(deviceName, powerConsumption, deviceLocation) {
        this.deviceName = deviceName,
            this.deviceLocation = deviceLocation,
            this.powerConsumption = powerConsumption,
            this.isPowerOn = false
    }
    changePower() {
        if (this.isPowerOn === false) {
            this.isPowerOn = true;
            console.log(`Питание ${this.deviceName} включено!`);
            this.powerConsumptionMath(this.isPowerOn);
        } else {
            this.isPowerOn = false;
            console.log(`Питание ${this.deviceName} выключено!`);
            this.powerConsumptionMath(this.isPowerOn);
        }
    }
    powerConsumptionMath(boolean) {
        if (boolean === true) {
            powerConsumptionSumm += this.powerConsumption;
            console.log(`Общее энергопотребление включённых приборов в доме теперь равняется ${powerConsumptionSumm} W`);
        } else {
            powerConsumptionSumm -= this.powerConsumption;
            console.log(`Общее энергопотребление включённых приборов в доме теперь равняется ${powerConsumptionSumm} W`);
        }
    }
}

class Microwave extends Device {
    constructor(deviceName, powerConsumption, deviceLocation, developerName, modelName) {
        super(deviceName, powerConsumption, deviceLocation);
        this.developerName = developerName
        this.modelName = modelName
    }
    doChebupeli() {
        if (this.isPowerOn === true) {
            console.log('Разогреваем чебупели...');
        } else {
            console.log('Для того, чтобы начать готовку, для начала включите питание микроволновки!');
        }
    }
    doPopcorn() {
        if (this.isPowerOn === true) {
            console.log('Готовим попкорн...');
        } else {
            console.log('Для того, чтобы начать готовку, для начала включите питание микроволновки!');
        }
    }
}


class PersonalComputer extends Device {
    constructor(deviceName, powerConsumption, deviceLocation, videoCard, cpu) {
        super(deviceName, powerConsumption, deviceLocation);
        this.videoCard = videoCard,
            this.cpu = cpu
    }
    doJS () {
        if (this.isPowerOn === true) {
            console.log('Начинаем со всей силы вникать в JS...');
        } else {
            console.log('Для того, чтобы изучать JS, для начала включите компьютер!');
        }
    }
}

class DeskLamp extends Device {
    constructor(deviceName, powerConsumption, deviceLocation, brightness) {
        super(deviceName, powerConsumption, deviceLocation);
        this.brightness = `${brightness} люмен`
    }
}


const myPC = new PersonalComputer('Персональный Компьютер', 500, 'Гостинная', 'GeForce 3060', 'Intel i-5 12600k');

const myDeskLamp = new DeskLamp('Настольная лампа', 50, 'Гостинная', 700);

const samsungME16K3000AS = new Microwave('Микроволновая печь', 800, 'Кухня', 'Samsung', 'ME16K3000AS');


console.log(myPC, myDeskLamp, samsungME16K3000AS);
myPC.doJS();
myPC.changePower();
myPC.doJS();
myDeskLamp.changePower();
samsungME16K3000AS.doChebupeli();
samsungME16K3000AS.changePower();
samsungME16K3000AS.doChebupeli();
samsungME16K3000AS.doPopcorn();
samsungME16K3000AS.changePower();