const fs = require('fs');
const { Builder } = require('selenium-webdriver');
const VehicleDataPage = require('../page_objects/VehicleDataPage');
const InsurantDataPage = require('../page_objects/InsurantDataPage');

(async function runTest() {
    const driver = new Builder().forBrowser('chrome').build();
    const logFile = './test-report.log'; // Caminho do arquivo de log

      // Função para registrar no log
      const log = (message) => {
        const timestamp = new Date().toISOString();
        fs.appendFileSync(logFile, `[${timestamp}] - ${message}\n`);
    };

    try {
        // Página "Enter Vehicle Data"
        const vehicleDataPage = new VehicleDataPage(driver);
        await driver.get('http://sampleapp.tricentis.com/101/app.php');
        log('Página carregada com sucesso.');
    
        await vehicleDataPage.validateMakeSelection();
        log('Validação do campo "Make" concluída.');

        await vehicleDataPage.fillVehicleData();
        log('Formulário preenchido na aba "Enter Vehicle Data".');

        await vehicleDataPage.clickNext();
        log('Teste concluído com sucesso.');

        // Página "Enter Insurant Data"
        const insurantDataPage = new InsurantDataPage(driver);  
        log('Teste concluído com sucesso.');
        await insurantDataPage.fillInsurantData();
        await insurantDataPage.clickNext();

    } finally {
        // Finalizar o WebDriver
        await driver.quit();
    }
})();
