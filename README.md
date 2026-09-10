# genetic-algorithms-js

Ejercicios de algoritmos genéticos escritos en TypeScript, con JavaScript compilado en `dist/` y una página HTML para ejecutarlos.

## Estructura

- [dist](dist)
- [src](src)
- [index.html](index.html)

## Preparación y uso

Sirve la raíz con un servidor estático; por ejemplo, si tienes Python 3:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Abre `http://127.0.0.1:8000/` y navega al ejemplo:

- [index.html](index.html)

Los recursos cargados desde servicios externos requieren conexión. La comprobación local debe incluir la consola del navegador y la carga de imágenes, scripts y estilos.

## Validación y estado

Esta guía se contrastó con el árbol de archivos y los manifiestos del repositorio. No se ha validado una ejecución completa contra servicios externos, bases de datos o hardware. Las versiones y los scripts mostrados describen el código actual; no implican que sus dependencias antiguas sigan siendo compatibles.

## Documentación previa

Se conserva como referencia histórica, incluidas las imágenes y atribuciones originales. Los enlaces a demos y servicios no se han comprobado.

# Genetic Algorithms using Javascript

This is a repository that contains genetic algorithms written in javascript using typescript. The written algorithms are based on the book called *"Genetic Algorithms with Python" by Clinton Sheppard*.

The intention of create it with javascript is to see the execution directly in the browser.

## Installation

For the installation is necessary to have the following tools:
* [TypeScript](https://www.typescriptlang.org/)

You can install TypeScript using [Node.js](https://nodejs.org/)

1. Install typescript

```bash
npm install -g typescript
```

2. Clone the repository

```bash
https://github.com/EladioRocha/genetic-algorithms-js.git
```

3. Access the project path

```bash
cd genetic-algorithms-js
```

4. Compile .ts files to .js

```bash
tsc
```

## Usage

Once installed the necessary tools, at this step you should be able to run the algorithms, to do this, we open the file **index.html**
