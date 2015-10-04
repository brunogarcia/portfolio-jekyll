---
layout: post
title: ! 'Grunt: development & distribution environments'
date: '2015-09-18T18:50:30+02:00'
---

***

<big>Llevo trabajando con Grunt mucho tiempo, al principio solo lo utilizaba para compilar ficheros LESS/Sass o para concatenar y comprimir ficheros JS. Pero últimamente lo utilizo para crear entornos de trabajo diferenciados, por ejemplo un entorno para desarrollo y otro para distribución. Si quieres ver un ejemplo real, he creado una [plantilla](https://github.com/brunogarcia/panda/blob/master/Gruntfile.js) para un pet project.</big>

***

## Entorno de desarrollo

Es el entorno que utilizo para trabajar en local. Dentro del proyecto, se ubica en la carpeta <code>dev</code>. Este grupo de tareas se llama 
_default_ y la registro de la siguiente forma:

	grunt.registerTask('default', ['connect:livereload', 'watch']);

### Connect

Primero arranco un servidor Node con la ayuda del plugin [Connect](https://github.com/gruntjs/grunt-contrib-connect) y abro automáticamente un navegador con la IP y el puerto especificado en la configuración. Por defecto <code>http://localhost:9001</code>.

### Watch

Despúes configuro [Watch](https://www.npmjs.com/package/grunt-contrib-watch) conjuntamente con _livereload_. Esta combinación me permite _observar_ modificaciones en un listado de ficheros y actualizar el navegador automáticamente cuando sea necesario. Esto mejora mucho mi flujo de trabajo, sobre todo si dispones con dos monitores. Es una maravilla ver los cambios aplicados inmediatamente en el navegador.

### Sass

Por último utilizo el plugin [Sass](https://www.npmjs.com/package/grunt-contrib-sass) para Grunt que me permite transformar mis ficheros <code>scss</code> a <code>css</code>. En el entorno <code>dev</code>, compilo Sass en modo _expanded_ para poder debugear los ficheros <code>css</code> facilmente.

## Bowercopy

* [Bowercopy](https://www.npmjs.com/package/grunt-bowercopy)

### Resultado final del entorno desarrollo

<script src="https://gist.github.com/brunogarcia/8e8c22869452b144c765.js"></script>

***

## Entorno de distribución

Es el entorno que utilizo para hacer deploys en el servidor de producción. Dentro del proyecto, se ubica en las carpetas <code>dist</code> y <code>tmp</code>. Este grupo de tareas se llama _dist_ y la registro de la siguiente forma:

	grunt.registerTask('dist', ['clean', 'copy', 'uglify', 'processhtml', 'htmlmin:dist', 'sass:dist', 'cachebreaker']);

La configuración de este entorno es un poco más compleja, ya que requiere un mayor número de plugins, todos ellos debidamente coordinados. 
El orden de las tareas es importante. Tal como funciona Grunt, necesito modificar y guardar ficheros en la carpeta <code>temp</code> para que las tareas puedan hacer su trabajo.

### Clean

Primero utilizo el plugin [Clean](https://github.com/gruntjs/grunt-contrib-clean) para borrar todo el contenido de las carpetas <code>dist</code> y <code>tmp</code>. Esto me facilita tener en todo momento un entorno de distribución actualizado, sin archivos innecesarios.

### Copy

El plugin [Copy](https://github.com/gruntjs/grunt-contrib-copy) me permite copiar ficheros de una carpeta a otra. En este caso desde <code>dev/assets</code> a <code>dist/assets</code>. En esta carpeta guardo todos los ficheros que necesita la parte front del proyecto: css, js, imagenes, fuentes, etc.

### Uglify

[Uglify](https://github.com/gruntjs/grunt-contrib-uglify) me permite concatenar y comprimir los ficheros <code>.js</code> de la aplicación. 

### Process HTML

[Process html](https://www.npmjs.com/package/grunt-processhtml) es un plugin muy útil para editar o eliminar partes de un fichero <code>HTML</code>. Imaginate que tu aplicación trabaja con 5 librerías Javascript distintas. En modo desarrollo te interesa tenerlas separadas para debugear tranquilamente, pero cuando vas a hacer un deploy necesitas tenerlas todas en un solo fichero. 
Con este plugin podrás especificar exactamente este comportamiento. Por ejemplo estas dos librerías:

	<!-- build:js app.js -->
	<script src="my/lib/path/lib.js"></script>
	<script src="my/deep/development/path/script.js"></script>
	<!-- /build -->
	 
Se convertirán en esta otra:

	<script src="app.js"></script>

Incluso puedes eliminar una etiqueta o grupo de etiquetas del fichero <code>HTML</code>

	<!-- build:remove -->
	<span id="debug">Soy un texto para modo debug</span>
	<!-- /build -->

### HTML Min

[HTML Min](https://github.com/gruntjs/grunt-contrib-htmlmin) hace exactamente lo que su nombre indica, comprime el fichero <code>HTML</code>. Incluso puedes espefificar que elimine los comentarios que pueda tener tu fichero.

### Sass

 En el entorno <code>dist</code>, compilo Sass en modo _compressed_. Todas las [configuraciones de salida](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style) de Sass las puedes encontrar en la documentación oficial.


### Cache Breaker

[Cache Breaker](https://www.npmjs.com/package/grunt-cache-breaker) me permite _engañar_ al browser del usuario añadiendo un _timestamp_ a las urls que yo decida.

	<script src="/js/dist/combined.min.js?rel=123456"></script>

### FTP Deploy

* [FTP Deploy](https://github.com/zonak/grunt-ftp-deploy)

### JSHint

* [JSHint](https://github.com/gruntjs/grunt-contrib-jshint)

### Resultado final del entorno distribución

<script src="https://gist.github.com/brunogarcia/4606f98a9f6a4b4dd001.js"></script>

