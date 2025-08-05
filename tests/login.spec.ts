import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SecurePageAssertions } from '../assertions/SecurePageAssertions';
import { takeStepScreenshot } from '../utils/screenshotHelper';

test.describe('Login Suite', () => {

  test('Login exitoso con usuario válido', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navegar a la página de login', async () => {
      await loginPage.navigate();
      await takeStepScreenshot(page, '01-navegacion');
    });

    await test.step('Ingresar usuario', async () => {
      await loginPage.enterUsername('student');
      await takeStepScreenshot(page, '02-usuario-ingresado');
    });

    await test.step('Ingresar contraseña', async () => {
      await loginPage.enterPassword('Password123');
      await takeStepScreenshot(page, '03-password-ingresado');
    });

    await test.step('Enviar formulario de login', async () => {
      await loginPage.submitLogin();
      await takeStepScreenshot(page, '04-login-enviado');
    });

    await test.step('Validar que el login fue exitoso', async () => {
      await SecurePageAssertions.assertUserIsLoggedIn(page);
      await takeStepScreenshot(page, '05-login-exitoso');
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