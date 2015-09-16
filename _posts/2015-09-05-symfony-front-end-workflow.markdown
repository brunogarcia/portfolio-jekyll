---
layout: post
title: ! 'Symfony Front-end Workflow: Assetic, Bower & Grunt'
date: '2015-09-05T18:40:30+02:00'
---

***

<big>Después de desarrollar un par de proyectos con [Symfony](http://www.symfony.com/) he encontrado un flujo de trabajo que funciona bastante bien para implementar diferentes librerías front-end en dicho framework PHP</big>

***

<img src="http://bruno.garciaechegaray.com/blog/symfony-bower-grunt.png" alt="Symfony Front-end Workflow: Assetic, Bower, Grunt">

La idea consiste en utilizar [Bower](http://bower.io) para gestionar las dependencias front-end del proyecto. [Grunt](http://gruntjs.com) para seleccionar y copiar dichas dependencias a nuestro bundle principal. Y finalmente dejamos que [Assetic](http://symfony.com/doc/current/cookbook/assetic/index.html) realice el resto de tareas: aplicar los filtros (sass, rewrite, uglify, etc.) y gestionar el flujo dentro de Symfony.

Implementar todo esto por primera vez requiere una importante carga de configuración, sobre todo si eres completamente nuevo en el mundo Symfony (como era mi caso hasta hace 6 meses), pero una vez le pillas el truco todo va como la seda. 

Lo mejor de usar conjuntamente Bower y Grunt, es que toda esta configuración la podemos copiar a otro proyecto y en 5 minutos ya tendremos todos los assets bajados y copiados a sus rutas correspondientes.

¿Tienes alguna duda o pregunta?. Me encantaría saber como trabajaís vosotros en proyectos similares.

<a href="https://twitter.com/intent/tweet?screen_name=garciaechegaray" class="twitter-mention-button" data-size="large" data-related="garciaechegaray">Tweet to @garciaechegaray</a>

<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

***

## Bower

[Bower](http://bower.io) es una herramienta _open source_ liberada por Twitter que sirve para gestionar
todas las dependencias de tu proyecto front-end. La idea es similar a [Composer](https://getcomposer.org/) en PHP o [Bundler](http://bundler.io/) para Ruby.

El funcionamiento de Bower es bastante simple. Primero creas la configuración necesaria en un archivo _bower.json_. Esto lo puedes hacer   lanzando el comando _bower init_ en tu consola. El atributo más importante es _dependencies_, el cual será un objeto (key: value) con el nombre y la versión de la dependencia.

Para añadir una nueva librería lo primero que debes hacer es buscarla en [bower.io](http://bower.io/search/). Esto también lo puedes hacer por consola lanzando el siguiente comando:

	$ bower search NOMBRE_DE_LA_LIBRERIA

Si la librería se encuentra registrada como package en Bower entonces la podrás añadir directamente por consola con el flag <code>--save</code>

	$ bower install --save jquery

Esto además de bajar la librería, modifica automáticamente el fichero _bower.json_ añadiendola como dependencia y también especificará la versión. Por ejemplo la versión ~2.1.1. El simbolo <code>~</code> significa que las siguientes veces que solicites a Bower actualizar las dependencias del proyecto, comenzará siempre con la versión 2.1.1 hasta un máximo de 2.2.0. Puedes encontrar más información sobre este tema en [Bower Version Syntax](http://stackoverflow.com/a/20412378).

Si la librería que necesitas *no* se encuentra registrada como package en Bower, entonces puedes modificar el _bower.json_ a mano, añadiendo la url del repositorio (público o privado). Es buena práctica especificar la versión que deseas utilizar.

	"bootstrap-datepicker": "https://github.com/eternicode/bootstrap-datepicker.git#~1.4.0"

Una vez finalizado este proceso basta con lanzar una línea en la terminal para tener todas las dependencias disponibles en local. Da igual si son 5 o 50, Bower las bajará todas por ti en un pis pas.

	$ bower install

Los ficheros se guardarán en una carpeta llamada _bower components_. Dependiendo del autor de la librería encontrarás muchas carperas y ficheros que no serán necesarios para tu proyecto (por ejemplo: test, build, changelogs, licencias, readme, etc.). Pero no hay problema, esto lo resolveremos con un plugin para Grunt llamado [bower copy](https://www.npmjs.com/package/grunt-bowercopy).

Así es como quedaría un archivo _bower.json_ completamente configurado:

<script src="https://gist.github.com/brunogarcia/062562fde7a65df01fb8.js"></script>

***

## Grunt

[Grunt](http://gruntjs.com) creado y mantenido por la gente de [Bocoup](http://bocoup.com/), es una herramienta para automatizar tareas en tu entorno de desarrollo.

Para configurar Grunt son necesarios dos ficheros: _package.json_ y _Gruntfile.js_. 

En _package.json_ deberás listar todas las dependencias necesarias para correr las tareas. En nuestro caso solo necesitamos [bower copy](https://www.npmjs.com/package/grunt-bowercopy), ya que el resto de tareas que normalmente realizaríamos con Grunt, en el entorno de Symfony será Assetic quien se encargará de ellas.

Como he comentado anteriormente dependiendo del autor de la librería encontrarás muchas carperas y ficheros que no serán necesarios para tu proyecto. Hago uso de [bower copy](https://www.npmjs.com/package/grunt-bowercopy) para *copiar únicamente los ficheros que necesita mi proyecto*. 

<script src="https://gist.github.com/brunogarcia/9f5c2a46f981fe037886.js"></script>

Para instalar las dependencias de Grunt deberás escribir en tu consola:

	$ npm install

En _Gruntfile.js_ creas la configuración de cada tarea o grupo de tareas. En nuestro caso solo tendremos una única tarea llamada 'default'.

En este caso, todos se copiaran a la ruta <code>/src/AppBundle/Resources/public</code>. He dividido los assets en varios grupos: CSS, JS, sass, fonts e imágenes. Dependiendo del grupo al cual pertenezcan, cada asset se copiará a una carpeta distinta. Incluso podemos cambiar el nombre al fichero antes de llevarlo a su destino final.

Para lanzar esta tarea simplemente escribes en tu consola:

	$ grunt

Si existieran más tareas, deberíamos especificar el nombre, pero en este caso no es necesario.

Así es como quedaría un archivo _Gruntfile.js_ completamente configurado:

<script src="https://gist.github.com/brunogarcia/000951d92e40ad219c95.js"></script>

***

## Git Ignore

Un punto importante: las carpetas _bower components_ y _node modules_  deberás añadirlas a _.gitignore_. Ya que no hace falta subir todas las dependencias de desarrollo a tu repositorio, siempre que tengas a mano los ficheros de configuración de Bower y Grunt podrás realizar la misma tarea todas las veces que quieras. 

<script src="https://gist.github.com/brunogarcia/79e9d6880b3d5ab3d7f9.js"></script>

<script src="https://gist.github.com/brunogarcia/b6aac16fad9d22ef0784.js"></script>

Estos datos los he sacado de [gitignore.io](https://www.gitignore.io/), una herramienta muy útil para saber que carpetas debes ignorar según qué tecnología utilizas.

****

## Assetic

Un asset es cualquier componente de nuestro front-end. Por ejemplo un fichero CSS o Javascript, una imagen o una webfont.

[Assetic](https://github.com/kriswallsmith/assetic) es el gestor de assets que utiliza Symfony. Assetic está basado en [webassets](http://webassets.readthedocs.org/en/latest), una librería del mundo Python.

Assetic trabaja conjuntamente con el [componente Asset](http://symfony.com/doc/current/components/asset/introduction.html) para gestionar todo el flujo de nuestros assets dentro de los entornos de desarrollo y producción de Symfony. Gracias a Assetic podremos aplicar filtros a nuestros assets antes de dejarlos disponibles para el usuario final. Por ejemplo una tarea de un filtro sería compilar un fichero _sass_ o comprimir y combinar ficheros _js_.

La configuración de Assetic la haremos siempre en un fichero [twig](http://twig.sensiolabs.org/). 

### CSS

Comencemos con los hojas de estilo de nuestra aplicación. Trabajaremos con un fichero llamado <code>css.html.twig</code> que se encuentra alojado en <code>/app/Resources/views/includes/</code>

<script src="https://gist.github.com/brunogarcia/612319c831fdd302d599.js"></script>

Como veréis primero aplicamos el filtro _sass_ a nuestro fichero _main.scss_. Incluso podemos decidir el nombre que tendrá el fichero CSS final, en este caso _main.css_. Para hacer uso de este filtro es necesario tener instalado [Ruby](https://www.ruby-lang.org) y [Sass](http://sass-lang.com/) en nuestro entorno. Mi recomendación es instalar Ruby vía [RVM](https://rvm.io/) para evitar problemas con las versiones de las gemas.

A continuación aplicamos a un grupo de ficheros CSS (plugins) un par de filtros. El filtro _cssrewrite_ se encarga de sobreescribir las rutas relativas que se encuentren en nuestros estilos. El filtro _uglyfycss_ comprime y concatena nuestros ficheros CSS. 
Este último filtro necesita [Node](https://nodejs.org) y el package [UglifyCSS](https://github.com/fmarcia/UglifyCSS) para funcionar.

Si añadimos a cualquier filtro el signo de interrogación <code>?</code> significa que solo debe ejecutar dicha tarea en el entorno de producción. La razón es que no nos interesa trabajar con archivos comprimidos en el entorno de desarrollo, básicamente porque sería un infierno debugear.

El lector avispado se preguntará por qué no he aplicado el filtro _uglifycss_ a los ficheros _sass_. La respuesta es sencilla: no hace falta. Sass ya se encarga de comprimir y concatenar los ficheros que compila. Solo es necesario especificar este comportamiento en la configuración del entorno de producción de Symfony. 

<script src="https://gist.github.com/brunogarcia/1e40e9123c4892b0e281.js"></script>

### Javascript

Ahora es el turno de los ficheros Javascript. Trabajaremos con un fichero llamado <code>js.html.twig</code> que se encuentra alojado en <code>/app/Resources/views/includes/</code>

<script src="https://gist.github.com/brunogarcia/416503dd5e2599d43499.js"></script>

En este caso aplicamos un único filtro llamado _uglyfyjs_, cuya tarea es comprimir y concatenar nuestros ficheros Javascript. Este filtro necesita [Node](https://nodejs.org) y el package [UglifyJS](https://github.com/mishoo/UglifyJS2) para funcionar. También aplicamos la opción de realizar esta tarea únicamente en el entorno de producción.

### Entornos de Symfony

Como he mencionado anteriormente, Symfony tiene dos entornos de ejecución diferenciados: desarrollo y producción. 
Dichos entornos de ejecución afectan directamente a la forma de trabajar con nuestros assets. Necesitaremos conocer algunos comandos extras. 

El primero es <code>assets install web</code> que buscará dentro de todos nuestros bundles la ruta <code>/Resources/public/</code>. Si encuentra algún fichero los copiará a la ruta pública <code>/web/bunles/[nombre del bundle]</code>.

	$ php app/console assets:install web

El segundo es <code>assetic dump</code>. Este comando aplicará los filtros a los assets correspondientes y a continuación los copiará a la ruta <code>/web</code>. Dependiendo del entorno en el cual quieras realizar el dump, deberás utilizar el flag <code>--env</code>.

	$ php app/console assetic:dump --env=dev

	$ php app/console assetic:dump --env=prod

Nosotros tenemos deshabilitado por defecto que Symfony realice esta tarea por nosotros. Esto agiliza la carga en el entorno de desarrollo. En todo caso, existe el comando <code>watch</code> que se encarga de _observar_ si hemos realizado alguna modificación en nuestros assets, y es entonces cuando aplica el <code>assetic dump</code>.

	$ php app/console assetic:watch

Lo genial de trabajar con Symfony es que podemos tener un entorno de desarrollo donde debugear es una tarea sencilla y cómoda:

<script src="https://gist.github.com/brunogarcia/8ff1a0e423fa10d7b800.js"></script>

Y un entorno de producción con todos los assets concatenados y comprimidos:

<script src="https://gist.github.com/brunogarcia/5a0d619d3de17fbbf981.js"></script>

***

## Bundles externos

Este workflow funciona bastante bien si la librería front-end requerida se adapta a la forma de trabajar de Symfony. En algunos casos es mejor optar por algún bundle externo. Por ejemplo [IvoryCKEditorBundle](https://github.com/egeloen/IvoryCKEditorBundle) y [ObHighchartsBundle](https://github.com/marcaube/ObHighchartsBundle) son dos bundles que nos simplifican la forma de trabajar con [CKEditor](http://ckeditor.com/) y [Highchart](http://www.highcharts.com/).





