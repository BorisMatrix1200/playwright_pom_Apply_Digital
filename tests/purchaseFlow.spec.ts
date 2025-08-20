import { AddProductPage } from '../pages/AddProductPage';
import { RegisterPage } from '../pages/RegisterPage';
import { NavigateTo } from '../pages/NavigateTo';
import { CompleteFormPage } from '../pages/CompleteFormPage';
import { ConfirmPurchase} from '../pages/ConfirmPurchase';
import { SecurePageAssertions } from '../assertions/SecurePageAssertions';
import { takeStepScreenshot } from '../utils/screenshotHelper';
import { test } from '@playwright/test';

test.describe('Purchase Flow', () => {

  test('Purchase Flow Complete', async ({ page }) => {
    const navigateTo = new NavigateTo(page);
    const addProductPage = new AddProductPage(page);
    const registertPage = new RegisterPage(page);
    const compliteFormPage = new CompleteFormPage(page);
    const confirmPurchase = new ConfirmPurchase(page);


    await test.step('Add product', async () => {
      await navigateTo.navigateToURL();
      await addProductPage.addProduct();
      await takeStepScreenshot(page, '01-Ingresa a la URL y agrega el producto');
    });

    await test.step('Register user', async () => {
      await registertPage.registerUser();
      await takeStepScreenshot(page, '02-Usuario registrado');
    });

    await test.step('Complete form', async () => {
      await compliteFormPage.completeForm();
      await takeStepScreenshot(page, '03-Formulario completo');
    });

    await test.step('Confirm purchase', async () => {
      await confirmPurchase.confirmPurchase();
      await takeStepScreenshot(page, '04-Pago confirmado');
    });

     await test.step('Confirm purchase', async () => {
      await confirmPurchase.logOut();
      await takeStepScreenshot(page, '05-Cierre de sesion');
    });

    await test.step('Validar que el carrito tenga productos', async () => {
      await SecurePageAssertions.viewCart(page)
      await takeStepScreenshot(page, '06-Login validado correctamente');
    });

  });

});

  
//Comando para ajecutar las pruebas
//npx playwright test

// Comandos para generar el reporte
//npx allure generate ./allure-results --clean -o ./allure-report

//Comando para abrir el reporte
//npx allure open ./allure-report

//Comando para borrar, ejecutar, crear y abrir el reporte
//npm run allure:clean && npm run test && npm run allure:generate && npm run allure:open