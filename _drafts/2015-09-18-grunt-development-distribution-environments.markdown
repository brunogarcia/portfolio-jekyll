---
layout: post
title: ! 'Grunt: development & distribution environments'
date: '2015-09-18T18:50:30+02:00'
---

***

<big>Llevo trabajando con Grunt mucho tiempo, al principio solo lo utilizaba para compilar ficheros LESS/Sass o para concatenar y comprimir ficheros JS. Pero últimamente lo utilizo para crear entornos de trabajo diferenciados, por ejemplo un entorno para desarrollo y otro para distribución. Si quieres ver un ejemplo real, he creado una [plantilla](https://github.com/brunogarcia/panda) para un pet project.</big>

***

## Entorno de desarrollo

Es el entorno que utilizo para trabajar en local. Dentro del proyecto, se ubica en la carpeta <code>dev</code>.

Primero arranco un servidor Node con la ayuda del plugin [Connect](https://github.com/gruntjs/grunt-contrib-connect) y abro automáticamente un navegador con la IP y el puerto especificado en la configuración. Por defecto <code>http://localhost:9001</code>.

Despúes configuro [Watch](https://www.npmjs.com/package/grunt-contrib-watch) conjuntamente con _livereload_. Esta combinación me permite _observar_ modificaciones en un listado de ficheros y actualizar el navegador automáticamente cuando sea necesario. Esto mejora mucho mi flujo de trabajo, sobre todo si dispones con dos monitores. Es una maravilla ver los cambios aplicados inmediatamente en el navegador.

Por último utilizo el plugin [Sass](https://www.npmjs.com/package/grunt-contrib-sass) para Grunt que me permite transformar mis ficheros <code>scss</code> a <code>css</code>. En este entorno, compilo Sass en modo _expanded_ para poder debugear los ficheros <code>css</code> facilmente.

<script src="https://gist.github.com/brunogarcia/8e8c22869452b144c765.js"></script>

***

## Entorno de distribución

Es el entorno que utilizo para hacer deploys en el servidor de producción. Dentro del proyecto, se ubica en las carpetas <code>dist</code> y <code>tmp</code>. 

La configuración de este entorno es un poco más compleja, ya que requiere un mayor número de plugins, todos ellos debidamente coordinados.

* [Clean](https://github.com/gruntjs/grunt-contrib-clean)
* [Copy](https://github.com/gruntjs/grunt-contrib-copy)
* [Uglify](https://github.com/gruntjs/grunt-contrib-uglify)
* [Process html](https://www.npmjs.com/package/grunt-processhtml)
* [HTML Min](https://github.com/gruntjs/grunt-contrib-htmlmin)
* [Sass](https://www.npmjs.com/package/grunt-contrib-sass)
* [Cache Breaker](https://www.npmjs.com/package/grunt-cache-breaker)

<script src="https://gist.github.com/brunogarcia/4606f98a9f6a4b4dd001.js"></script>


## Utilidades

* [Bowercopy](https://www.npmjs.com/package/grunt-bowercopy)
* [JSHint](https://github.com/gruntjs/grunt-contrib-jshint)
* [FTP Deploy](https://github.com/zonak/grunt-ftp-deploy)





