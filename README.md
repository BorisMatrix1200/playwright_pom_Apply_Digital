
================================
# Prueba Técnica - Apply Digital
================================

Este proyecto corresponde a la **automatización del flujo de compra** en [AutomationExercise](https://automationexercise.com) utilizando **Playwright** con el patrón **Page Object Model (POM)**.  
Incluye pruebas de **funcionalidad, accesibilidad y rendimiento**, con reportería en **Allure** y **Lighthouse**.

===========================================================================

## Framework Utilizado
- **Playwright**
  - Escalable y con soporte multi-navegador.
  - Permite ejecuciones paralelas de forma nativa.
  - Respaldado por Microsoft, con mantenimiento activo.
  - Ideal para flujos complejos de compra, formularios y modales.

===========================================================================

## Requisitos Previos
- Node.js **v18 o superior**
- Visual Studio Code u otro IDE
- Acceso a línea de comandos (CLI)

===========================================================================

## Instalación y Ejecución

### 1. Clonar el proyecto
```bash
git clone https://github.com/BorisMatrix1200/playwright_pom_Apply_Digital.git
cd playwright_pom_Apply_Digital
```

### 2. Instalar dependencias
```bash
npm install
npx playwright install
```

### 3. Ejecutar pruebas
```bash
npx playwright test
```

### 4. Generar y abrir reporte Allure
```bash
npx allure generate allure-results --clean -o allure-report
npx allure open
```

============================================================================

## Estructura del Proyecto
```
pages/           # Page Objects (LoginPage.ts, SecurePage.ts)
assertions/      # Validaciones del flujo de login
tests/           # Archivos de prueba (login.spec.ts)
utils/           # Funcionalidades auxiliares (ej. screenshotHelper.ts)
screenshots/     # Capturas de pantalla paso a paso
allure-results/  # Resultados crudos de pruebas
allure-report/   # Reportes generados por Allure
playwright.config.ts  # Configuración general
.gitignore       # Archivos ignorados en Git
lighthouse-report.html  # Reporte de rendimiento y accesibilidad
```

=============================================================================

## Resultados

- **Capturas de pantalla** del flujo completo en `/screenshots`
- **Reporte Allure** interactivo disponible tras ejecución
- **Reporte Lighthouse** para rendimiento y accesibilidad

==============================================================================

## Caso de Prueba (Gherkin)

```gherkin
Feature: Flujo de compra en AutomationExercise
  Como usuario del sitio
  Quiero seleccionar un producto, añadirlo al carrito y finalizar la compra
  Para validar el flujo completo de compra con registro de usuario

  Background:
    Given que el usuario accede al sitio https://automationexercise.com/

  Scenario: Flujo completo de compra con registro de nueva cuenta
    When el usuario navega a la sección "Productos"
    And selecciona el tercer producto de la lista
    And consulta los detalles del producto
    And ingresa una cantidad aleatoria entre 1 y 20
    And añade el producto al carrito
    And procede a finalizar la compra
    And registra una nueva cuenta con datos aleatorios
    And accede al carrito
    And confirma el pedido
    And cierra sesión
    Then el sistema debe mostrar la página principal sin sesión iniciada
```

===============================================================================

## Pruebas de Accesibilidad y Rendimiento
- Dependencias:  
  ```bash
  npm install --save-dev playwright @playwright/test lighthouse chrome-launcher
  ```
- Reporte Lighthouse disponible en:  
  - `lighthouse-report.html` (abrir en el navegador)
  - `start lighthouse-report.html` (por CLI en Windows)

================================================================================

## Resultados de Lighthouse
- **Performance (Rendimiento):** Bajo (~28/100)  
- **Accessibility (Accesibilidad):** Aceptable (~84/100)  
- **Best Practices:** Alto (~90+)  
- **SEO:** Bueno (~85-90/100)  
- **PWA:** No cumple requisitos principales  

================================================================================

## Conclusiones
- Rendimiento bajo por tiempos de carga altos (**FCP > 5 s, LCP > 7 s**).  
- Accesibilidad aceptable, requiere mejoras en contraste y textos alternativos.  
- Buen nivel en **SEO** y **buenas prácticas**.  
- No es instalable como **PWA**.  

========================
Autor: **Andres Velez**  
bavelch.0328@gmail.com
========================
