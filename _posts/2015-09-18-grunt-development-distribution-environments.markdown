---
layout: post
title: ! 'Grunt: development & distribution environments'
date: '2015-09-18T18:50:30+02:00'
---

***

<big>Llevo trabajando con Grunt mucho tiempo, al principio solo lo utilizaba para compilar ficheros LESS/Sass o para concatenar y comprimir ficheros JS. Pero últimamente lo utilizo para crear entornos de trabajo diferenciados, por ejemplo un entorno para desarrollo y otro para distribución. 

Si quieres ver un ejemplo real, he creado una [plantilla](https://github.com/brunogarcia/panda/blob/master/Gruntfile.js) para un pet project.</big>

***

## Entorno de desarrollo

Es el entorno que utilizo para trabajar en local. Dentro del proyecto, se ubica en la carpeta <code>dev</code>. Este grupo de tareas se llama <code>default</code> y la registro de la siguiente forma:

	grunt.registerTask('default', ['connect:livereload', 'watch']);

### Connect

Primero arranco un servidor Node con la ayuda del plugin [Connect](https://github.com/gruntjs/grunt-contrib-connect) y abro automáticamente un navegador con la IP y el puerto especificado en la configuración. Por defecto <code>http://localhost:9001</code>.

<script src="https://gist.github.com/brunogarcia/1c2ddab2790a4adf9a7e.js"></script>

### Watch

Despúes configuro [Watch](https://www.npmjs.com/package/grunt-contrib-watch) conjuntamente con _livereload_. Esta combinación me permite _observar_ modificaciones en un listado de ficheros y actualizar el navegador automáticamente cuando sea necesario. Esto mejora mucho mi flujo de trabajo, sobre todo si dispones de dos monitores. Es una maravilla ver los cambios aplicados inmediatamente en el navegador.

<script src="https://gist.github.com/brunogarcia/f0a932a1d48d1ddc5353.js"></script>

### Sass

Utilizo el plugin [Sass](https://www.npmjs.com/package/grunt-contrib-sass) para Grunt que me permite transformar mis ficheros <code>scss</code> a <code>css</code>. En el entorno <code>dev</code>, compilo Sass en modo _expanded_ para poder debugear los ficheros <code>css</code> fácilmente. Para que este plugin funcione necesitas tener instalado Ruby y Sass.

<script src="https://gist.github.com/brunogarcia/a5632a66b7e945317a52.js"></script>

### JSHint

Por último utilizo [JSHint](https://github.com/gruntjs/grunt-contrib-jshint) para comprobar que mi código Javascript no contiene ningún error. 

<script src="https://gist.github.com/brunogarcia/404def30d6708c78bc0b.js"></script>

Este plugin se configura con un fichero llamado <code>.jshintrc</code> que en nuestro caso contiene los siguientes valores:

	{
	  // Require {} for every new block or scope
	  "curly": true, 

	  // Tolerate use of `== null`
	  "eqnull": true, 

	  // Require triple equals (===) for comparison
	  "eqeqeq": true,

	  // Require all non-global variables to be declared (prevents global leaks)
	  "undef": true,

	  // Custom globals: additional predefined global variables
	  "globals": {
	    "jQuery": true,
	    "createjs": true,
	    "document": true,
	    "require": true,
	    "module": true
	  }
	}

Si estas opciones se te quedan cortas, existen [multiples opciones de configuración](https://github.com/jshint/jshint/blob/master/examples/.jshintrc) para JSHint.

***

## Entorno de distribución

Es el entorno que utilizo para hacer deploy en el servidor de producción. Dentro del proyecto, se ubica en las carpetas <code>dist</code> y <code>tmp</code>. Ambas carpetas se encuentran añadidas al <code>.gitignore</code>, ya que no nos interesa tenerlas en el repositorio de versiones.

Este grupo de tareas se llama <code>dist</code> y la registro de la siguiente forma:

	grunt.registerTask('dist', ['clean', 'copy', 'uglify', 'processhtml', 'htmlmin:dist', 'sass:dist', 'cachebreaker']);

La configuración de este entorno es un poco más compleja, ya que requiere un mayor número de plugins, todos ellos debidamente coordinados. 
El orden de las tareas es importante. Tal como funciona Grunt, necesito modificar y guardar ficheros en la carpeta <code>temp</code> para que las tareas puedan hacer su trabajo.

### Clean

Primero utilizo el plugin [Clean](https://github.com/gruntjs/grunt-contrib-clean) para borrar todo el contenido de las carpetas <code>dist</code> y <code>tmp</code>. Esto me facilita tener en todo momento un entorno de distribución actualizado, sin archivos innecesarios.

<script src="https://gist.github.com/brunogarcia/359691d6c12db5e98cfb.js"></script>

### Copy

El plugin [Copy](https://github.com/gruntjs/grunt-contrib-copy) me permite copiar ficheros de una carpeta a otra. En este caso desde <code>dev/assets</code> a <code>dist/assets</code>. En esta carpeta guardo todos los ficheros que necesita la parte front del proyecto: css, js, imagenes, fuentes, etc.

<script src="https://gist.github.com/brunogarcia/e46c4fb1880f0755ceda.js"></script>

### Uglify

[Uglify](https://github.com/gruntjs/grunt-contrib-uglify) me permite concatenar y comprimir los ficheros <code>.js</code> de la aplicación. 

<script src="https://gist.github.com/brunogarcia/e891f7886a0b62898720.js"></script>

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
	<span id="debug">Soy un texto para el entorno de desarrollo</span>
	<!-- /build -->

Y la configuración es bastante simple:

<script src="https://gist.github.com/brunogarcia/56e9033b82d56afd0618.js"></script>	

### HTML Min

[HTML Min](https://github.com/gruntjs/grunt-contrib-htmlmin) hace exactamente lo que su nombre indica, comprime el fichero <code>HTML</code>. Incluso puedes espefificar que elimine los comentarios que pueda tener tu fichero.

<script src="https://gist.github.com/brunogarcia/50f3428f05c3868285b5.js"></script>

### Sass

 En el entorno <code>dist</code>, compilo Sass en modo _compressed_. Todas las [configuraciones de salida](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style) de Sass las puedes encontrar en la documentación oficial.

<script src="https://gist.github.com/brunogarcia/3e6f1e6c797c2e882cf8.js"></script>

### Cache Breaker

[Cache Breaker](https://www.npmjs.com/package/grunt-cache-breaker) me permite _engañar_ al browser añadiendo un _timestamp_ a las urls que yo decida.

<script src="https://gist.github.com/brunogarcia/88aca2a93303ea177ac3.js"></script>

***

## Utilidades

Además la [plantilla](https://github.com/brunogarcia/panda/blob/master/Gruntfile.js) dispone de un par de plugins extras.

### FTP Deploy

Con [FTP Deploy](https://github.com/zonak/grunt-ftp-deploy) puedo realizar subidas por FTP automáticamente. Esta tarea la tengo registrada como <code>ftp</code> y va unida con la tarea de distribución.

	grunt.registerTask('ftp', ['dist', 'ftp-deploy']);

En la configuración, además de los datos obvios (host, puerto, carpeta de destino, etc.), debes especificar la key del fichero <code>.ftppass</code> que contiene tu nombre de usuario y contraseña.

<script src="https://gist.github.com/brunogarcia/a68d50b58862db6337c0.js"></script>

### Bowercopy

Dependiendo del autor de la librería encontrarás muchas carperas y ficheros que no serán necesarios para tu proyecto. Hago uso de [Bowercopy](https://www.npmjs.com/package/grunt-bowercopy) para copiar únicamente los ficheros que necesita mi proyecto. 

<script src="https://gist.github.com/brunogarcia/1d1d7da1246e5688c20d.js"></script>
