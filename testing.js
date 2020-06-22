// declarations
const { Builder, By, Key, util } = require('selenium-webdriver');
const assert = require('assert');
let driver = new Builder().forBrowser('firefox').build();

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
        startingTimeAMPM = await driver.findElement(By.name('StartingTimeAMPM'));

        leavingDate = await driver.findElement(By.id('LeavingDate'));
        leavingTime = await driver.findElement(By.id('LeavingTime'));
        leavingTimeAMPM = await driver.findElement(By.name('LeavingTimeAMPM'));

        
        
        console.log('connected successfully to', title);
    }).catch(error => {
        console.log(error);
    });
}

async function valetParking() {

}



// // valet parking testing
// await driver.findElement(By.id('StartingDate')).click();
// await driver.findElement(By.id('StartingDate')).clear();
// await driver.findElement(By.id('StartingDate')).sendKeys('20/12/2020')

connectingToSite();