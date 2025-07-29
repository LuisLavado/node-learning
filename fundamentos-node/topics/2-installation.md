**Curso de Fundamentos de Node.js**
# Gestión de Múltiples Versiones de Node.js con NVM

### Resumen
La gestión de versiones de Node.js es una habilidad fundamental para cualquier desarrollador que trabaje con esta tecnología. Aunque inicialmente pueda parecer suficiente tener instalada la última versión, la realidad del desarrollo web implica frecuentemente trabajar con proyectos que requieren versiones específicas. Dominar esta gestión te permitirá moverte con fluidez entre diferentes entornos de desarrollo y mantener la compatibilidad de tus aplicaciones.

### ¿Por qué necesitas manejar múltiples versiones de Node.js?
Cuando te incorporas a un equipo de desarrollo o retomas un proyecto antiguo pero funcional (donde aplica la regla "si funciona, no lo toques"), es muy probable que te encuentres con código que fue construido para una versión específica de Node.js. En estos casos, necesitarás cambiar a esa versión particular para ejecutar el proyecto correctamente.

El manejo de versiones te permite:
* __Trabajar simultáneamente en proyectos que requieren diferentes versiones de Node.js__
* __Probar tu código en distintos entornos de ejecución__
* __Mantener la compatibilidad con proyectos antiguos__
* __Explorar nuevas características disponibles solo en versiones específicas__

### Entendiendo los tipos de versiones de Node.js
Antes de aprender a gestionar versiones, es importante comprender los diferentes tipos que existen:

* __Current (Actual):__ La versión más reciente con las últimas características, actualmente la versión 23.8
* __LTS (Long Term Support):__ Versión con soporte extendido, actualmente la 22.14, recomendada para proyectos en producción
* __Maintenance:__ Versiones que solo reciben actualizaciones de seguridad, ideales para proyectos que no se modificarán pero requieren mantenerse seguros

La versión LTS es generalmente la recomendada para entornos de producción, ya que ofrece estabilidad y soporte prolongado, minimizando el riesgo de errores inesperados que podrían aparecer en las versiones más recientes.

### ¿Cómo instalar y configurar NVM (Node Version Manager)?
NVM es la herramienta por excelencia para gestionar múltiples versiones de Node.js en un mismo sistema. Este script te permite instalar, desinstalar y cambiar entre diferentes versiones según tus necesidades.

### Instalación de NVM
Para instalar NVM, sigue estos pasos:

1. Abre tu terminal
2. Ejecuta el siguiente comando:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
3. Agrega la configuración a tu archivo de perfil de terminal:
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
4. Actualiza la configuración de tu terminal:
```
source ~/.bashrc  # Si usas Bash
source ~/.zshrc   # Si usas ZSH
```
5. Verifica la instalación:
```
nvm -v
```
Este proceso es bastante estándar independientemente del sistema operativo que utilices. Si estás en Windows, se recomienda usar Windows Subsystem for Linux (WSL) para tener acceso a comandos Unix. Los usuarios de macOS y Linux ya tienen estos comandos disponibles por defecto.

### Comandos básicos de NVM
Una vez instalado NVM, puedes utilizar estos comandos esenciales:

* Listar versiones instaladas:
    ```
    nvm ls
    ```
* Instalar una versión específica:
    ```
    nvm install 23    # Instala la última versión 23.x
    nvm install 22    # Instala la última versión 22.x (LTS actual)
    nvm install 22.14.1  # Instala una versión específica
    ```
* Cambiar entre versiones:
    ```
    nvm use 23        # Cambia a la versión 23
    nvm use 22        # Cambia a la versión 22
    nvm use default   # Cambia a la versión por defecto
    ```
* Verificar la versión actual:
    ```
    node -v
    ```

### ¿Cómo elegir la versión adecuada para cada proyecto?
La elección de la versión de Node.js dependerá del contexto específico de tu proyecto:

### Para proyectos en producción
Es recomendable utilizar la versión LTS, ya que ofrece:
* Mayor estabilidad con menos cambios disruptivos
* Soporte a largo plazo con actualizaciones de seguridad
* Compatibilidad con la mayoría de los paquetes populares

### Para proyectos de desarrollo o experimentación
Puedes optar por la versión Current para:
* Probar las últimas características del lenguaje
* Experimentar con mejoras de rendimiento
* Prepararte para futuras actualizaciones

### Para proyectos heredados
Deberás identificar la versión específica con la que fue desarrollado el proyecto, que puede encontrarse en:
* El archivo package.json (campo "engines")
* La documentación del proyecto
* Consultando con el equipo original

El manejo eficiente de versiones de Node.js es una habilidad que te ahorrará muchos dolores de cabeza y te permitirá adaptarte rápidamente a diferentes entornos de desarrollo. ¿Has tenido que lidiar con problemas de compatibilidad entre versiones?.

## Lecturas recomendadas
* [Node.js Run JavaScript Everywhere](https://nodejs.org/es)  
* [JavaScript Visualizer 9000](https://www.jsv9000.app/)  
* [V8 JavaScript Engine](https://v8.dev/)
* [Instalación de Linux en Windows con WSL](https://learn.microsoft.com/es-es/windows/wsl/install)  
* [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm)
* [Terminal ZSH](https://ohmyz.sh/)