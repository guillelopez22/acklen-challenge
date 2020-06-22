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
let parkingTime;


async function connectingToSite() {
    await driver.get('http://www.shino.de/parkcalc/').then(async () => {
        title = await driver.getTitle();

        // select options
        await driver.findElement(By.id('ParkingLot')).then(async function (element) {
            await element.findElements(By.tagName('option')).then(async function (optionArray) {
                for (let index = 0; index < optionArray.length; index++) {
                    await optionArray[index].getAttribute('value').then(function (value) {
                        options.push(value)
                    });
                }
            });
        });

        // inputs
        startingDate = await driver.findElement(By.id('StartingDate'));
        startingTime = await driver.findElement(By.id('StartingTime'));
        startingTimeAMPM = await driver.findElements(By.name('StartingTimeAMPM'));

        leavingDate = await driver.findElement(By.id('LeavingDate'));
        leavingTime = await driver.findElement(By.id('LeavingTime'));
        leavingTimeAMPM = await driver.findElements(By.name('LeavingTimeAMPM'));
        cost = await driver.findElement(By.xpath("//td[@class='SubHead']//b")).getText();
        
        console.log('connected successfully to', title);

        valetParkingCorrectDates();
    }).catch(error => {
        console.log(error);
    });
}

async function valetParkingCorrectDates() {
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



    // await driver.findElement(By.id('StartingDate')).click();
    // await driver.findElement(By.id('StartingDate')).clear();
    // await driver.findElement(By.id('StartingDate')).sendKeys('20/12/2020');

    // await driver.findElement(By.id('StartingTime')).click();
    // await driver.findElement(By.id('StartingTime')).clear();
    // await driver.findElement(By.id('StartingTime')).sendKeys('12:00');


}



// // valet parking testing


connectingToSite();