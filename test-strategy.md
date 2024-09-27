# Estrategia de Pruebas para el Juego Adivina tu Número

## Objetivo
Asegurar que el juego `Adivina tu Número` funcione correctamente según los requisitos especificados, identificando y corrigiendo errores de funcionalidad y visualización.

## Casos de Prueba

### IMPORTANTE 
**Es fundamental** tener en cuenta que una correcta modularización del código implica la separación del HTML, CSS y JavaScript para lograr un mejor mantenimiento y organización del proyecto. 

### 1. Verificación de la funcionalidad básica
**Descripción:** Verificar que el número a adivinar se genera correctamente y está dentro del rango permitido (1 a 100).
**Resultado esperado:** El número generado es un entero entre 1 y 100.

### 2. Validación de entradas
**Descripción:** Ingresar valores no enteros (letras, símbolos, números decimales) y comprobar que se muestra una alerta sin incrementar los intentos.
**Resultado esperado:** Se muestra una alerta y el contador de intentos no se incrementa.

### 3. Comparación de números
**Descripción:** Ingresar un número mayor y menor al número a adivinar y verificar que se muestra el mensaje adecuado.
**Resultado esperado:** Se muestran los mensajes "Incorrecto! El número es mayor!" o "Incorrecto! El número es menor!" según corresponda.

### 4. Mensajes finales
**Descripción:** Probar los escenarios de victoria y derrota (adivinar el número y llegar a 10 intentos sin adivinar).
**Resultado esperado:** Se muestran los mensajes "Felicitaciones! Adivinaste el número!" en verde o "!!!Pérdiste!!!" en rojo según corresponda (Se mejoró también la falta ortográfica).

## Observaciones
1. **Error en la generación del número aleatorio:** No se estaba generando correctamente el número, se solucionó usando `Math.floor(Math.random() * 100) + 1`.
2. **Error en la validación de entradas:** Se aceptaban valores no válidos, se corrigió implementando una función de validación que muestra una alerta.
3. **Error en el contador de intentos:** Se incrementaba con valores inválidos, se corrigió modificando la lógica de conteo.

### EXTRA 
1. **Recuento de intentos** Se implementó un sistema de conteo para que el jugador pueda visualizar cuántos intentos le restan, brindándole una mejor percepción de sus oportunidades disponibles.
2. **Mejora de visualización** Se optimizó la interfaz de usuario para ofrecer una experiencia más intuitiva y agradable, facilitando la interacción de los jugadores con el sistema.
3. **Pruebas con Cypress** Se implementaron pruebas funcionales para la integracion correcta de estos.


## Conclusión
Todos los errores han sido identificados y corregidos. El archivo `index-mejorado.html` ha sido actualizado para cumplir con los requisitos establecidos y funciona correctamente.
