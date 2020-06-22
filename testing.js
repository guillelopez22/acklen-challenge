// declarations
const { Builder, By, Key, util } = require('selenium-webdriver');
const assert = require('assert');
const AssertionError = require('assert').AssertionError;

async function parkingCalculatorTests() {
    // define browser driver
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('http://www.shino.de/parkcalc/');
    
    describe('Parking Calculator Tests', async function() {
        describe('driver.get()', async function() {
            it('No error when connecting', async function() {
                this.timeout(5000);
            });
        });
    });

    // getting select options
    // let options = [];
    // await driver.findElement(By.id('ParkingLot')).then(async function (element) {
    //     await element.findElements(By.tagName('option')).then(async function (optionArray) {
    //         for (let index = 0; index < optionArray.length; index++) {
    //             await optionArray[index].getAttribute('value').then(function(value) {
    //                 options.push(value)
    //             });
    //         }
    //     });
    // });

    
    // // valet parking 
    // await driver.findElement(By.id('StartingDate')).click();
    // await driver.findElement(By.id('StartingDate')).clear();
    // await driver.findElement(By.id('StartingDate')).sendKeys('20/12/2020')

    

}




parkingCalculatorTests()