// declarations
const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');
let driver = new Builder().forBrowser('firefox').build();
let moment = require('moment');

const today = moment();
let options = [];
let startingDate;
let startingTime;
let startingTimeAMPM;
let leavingDate;
let leavingTime;
let leavingTimeAMPM;
let cost;
let submit;
let parkingTime;


async function connectingToSite() {
    await driver.get('http://www.shino.de/parkcalc/').then(async () => {
        title = await driver.getTitle();

        
        await valetParkingTests();
        await shortTermParkingTests();
        console.log('connected successfully to', title);

    }).catch(error => {
        console.log(error);
    });
}

async function getInputs() {
    // select options
    await driver.findElement(By.id('ParkingLot')).then(async function (element) {
        await element.findElements(By.tagName('option')).then(async function (optionArray) {
            options = optionArray;
        });
    });

    // inputs
    startingDate = await driver.findElement(By.id('StartingDate'));
    startingTime = await driver.findElement(By.id('StartingTime'));
    startingTimeAMPM = await driver.findElements(By.name('StartingTimeAMPM'));

    leavingDate = await driver.findElement(By.id('LeavingDate'));
    leavingTime = await driver.findElement(By.id('LeavingTime'));
    leavingTimeAMPM = await driver.findElements(By.name('LeavingTimeAMPM'));
    // cost = await driver.findElement(By.xpath("//td[@class='SubHead']//b")).getText();
    submit = await driver.findElement(By.name('Submit'));

}

async function valetParkingTests() {
    await getInputs();
    options[0].click();
    // 12 hours
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('20/12/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('20/12/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('11:00');
    await leavingTimeAMPM[1].click();

    await submit.click();

    await driver.get('http://www.shino.de/parkcalc/');
    await getInputs();
    options[0].click();
    // >=5 hours
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('20/12/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('20/12/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('4:00');
    await leavingTimeAMPM[1].click();

    await submit.click();
}

async function shortTermParkingTests() {
    await getInputs();
    options[1].click();
    // 12 hours
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('20/12/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('20/12/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('11:00');
    await leavingTimeAMPM[1].click();

    await submit.click();

    await driver.get('http://www.shino.de/parkcalc/');
    await getInputs();
    options[1].click();
    // >=5 hours
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('20/12/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('20/12/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('4:00');
    await leavingTimeAMPM[1].click();

    await submit.click();
}



// // valet parking testing


connectingToSite();