const { By } = require('selenium-webdriver');

class VehicleDataPage {
    constructor(driver) {
        this.driver = driver;
    }

    async validateCylinderCapacity() {
        const cylinderCapacityField = await this.driver.findElement(By.id('cylindercapacity'));
        const value = await cylinderCapacityField.getAttribute('value');
        if (!value || isNaN(value)) {
            throw new Error('Erro: O campo "Cylinder Capacity" deve ser preenchido com um número válido.');
        }
    }

    async validateMakeSelection() {
        const makeDropdown = await this.driver.findElement(By.id('make'));
        const selectedValue = await makeDropdown.getAttribute('value');
        if (!selectedValue) {
            throw new Error('Erro: O campo "Make" deve ser selecionado.');
        }
    }

    async fillVehicleData() {
        await this.driver.findElement(By.id('make')).sendKeys('Audi');
        await this.driver.findElement(By.id('cylindercapacity')).sendKeys('2000');
        await this.driver.findElement(By.id('engineperformance')).sendKeys('1500');
    }

    async clickNext() {
        const nextButton = await this.driver.findElement(By.id('nextenterinsurantdata'));
        await nextButton.click();
    }
}

module.exports = VehicleDataPage;
