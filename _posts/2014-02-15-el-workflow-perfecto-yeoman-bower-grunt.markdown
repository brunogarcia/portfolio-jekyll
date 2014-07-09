--- 
layout: post 
title: ! 'El workflow perfecto: Yeoman + Bower + Grunt'
date: '2014-02-15T07:56:00+01:00' 
tags: 
tumblr\_url: http://blog.garciaechegaray.com/post/76709316302/el-workflow-perfecto-yeoman-bower-grunt
---

<big>Últimamente estoy trasteando con los
[generadores](http://yeoman.io/community-generators.html) de
[Yeoman](http://yeoman.io "Yeoman").</big>

[Yeoman](http://yeoman.io "Yeoman") es una herramienta para automatizar
tareas en proyectos front-end. Trabaja conjuntamente con
[Bower](http://bower.io) y [Grunt](http://gruntjs.com), otro par de
proyectos *open source* para (adivina...) automatizar tareas.

### Bower

[Bower](http://bower.io) fue liberado por Twitter y sirve para gestionar
todas las dependencias de tu proyecto front-end. La idea es similar a
[Composer](https://getcomposer.org/) en PHP o
[Bundler](http://bundler.io/) para Ruby.

El funcionamiento de Bower es bastante simple: creas la configuración en
un archivo *bower.json* y después basta con lanzar una línea en la
terminal (*$ bower install*) para tener todas las dependencias en local. Da
igual si son 5 o 50, Bower las bajara por ti en pis pas.

### Grunt

[Grunt](http://gruntjs.com) creado y mantenido por la gente de
[Bocoup](http://bocoup.com/), es una herramienta para automatizar tareas
en tu entorno de desarrollo.

Por ejemplo concatenar *.js* o *.css*, minimizar HTML e incluso
imágenes, compilar archivos *.less* o *.sass*, crear sprites sobre la
marcha, etc. En fin, Grunt tiene un gran repositorio de
[plugins](http://gruntjs.com/plugins "Grunt plugins") para cualquier
tarea que te puedas imaginar.

Para configurar Grunt son necesarios dos archivos: *package.json* y
*Gruntfile.js.*En el primero debes listar todas las dependencias
necesarias para correr las tareas. En el segundo creas la configuración
de cada tarea o grupo de tareas. Si sientes curiosidad, te recomiendo
leer este artículo: [Grunt for People Who Think Things Like Grunt are
Weird and
Hard](http://24ways.org/2013/grunt-is-not-weird-and-hard/ "Grunt for People Who Think Things Like Grunt are Weird and Hard")

### Resumen

Un generador Yeoman instala dependencias, crea carpetas, configura
entornos (uno para producción y otro para desarrollo), arranca un
servidor local, realiza tests, etc. Cualquier tarea por compleja que
sea, basta con configurarlo correctamente para que Yeoman sea capaz de
hacerlo el solo (siempre con la ayuda de Bower y Grunt).

La verdad es que existen cientos de
[generadores](http://yeoman.io/community-generators.html) super útiles,
para prácticamente cualquier tipo de proyecto. Y si no encuentras alguno
que se adapte a tu requerimientos, siempre puedes [crear un generador
personalizado](http://yeoman.io/generators.html#writing-your-first-generator "Yeoman: writing your first generator").

Lo que más me gusta es que se aprende mucho leyendo el código de cada
generador. La gente intenta volcar todo su conocimiento técnico y forma
de trabajar en cada generador. Y eso es oro puro.

### Manos a la obra

Si os apetece trastear un poco, os dejo un par de ejemplos.

**Importante**: previamente debéis tener instalados
[Node](http://nodejs.org/download/), [Git](http://git-scm.com/),
[Yeoman](http://yeoman.io/community-generators.html "Yeoman: community generators"),
[Bower](http://bower.io) y [Grunt](http://gruntjs.com) en vuestras
máquinas.

### Crear un proyecto Bootstrap

Vamos a utilizar
el [generador](https://github.com/Thomas-Lebeau/generator-bootstrap-less "yeoman generator bootstrap") creado
por [Thomas Lebeau](https://github.com/Thomas-Lebeau)

Este generador creará un proyecto con las siguientes dependencias:
[Bootstrap 3](http://getbootstrap.com),
[Modernizr](http://modernizr.com/), [jQuery](http://jquery.com/) y [Font
Awesone](http://fortawesome.github.io/Font-Awesome/) (opcional).

La configuración de Bower la podéis encontrar en
[\_bower.json](https://github.com/Thomas-Lebeau/generator-bootstrap-less/blob/master/app/templates/_bower.json). Las
tareas de Grunt están listadas en
[\_package.json](https://github.com/Thomas-Lebeau/generator-bootstrap-less/blob/master/app/templates/_package.json). Estos
ficheros forman parte del template que necesita Yeoman para hacer su
magia.

La configuración de Yeoman la podéis encontrar en el fichero
[/app/index.js](https://github.com/Thomas-Lebeau/generator-bootstrap-less/blob/master/app/index.js)
del generador.

Con la ayuda de npm, **instalamos el generador del proyecto** en global.

> $ sudo npm install -g generator-bootstrap-less

Si queréis ver los generadores instalados:

> $ yo —help

**Creamos un directorio**

> $ mkdir \~/learning-bootstrap && cd $_

Le decimos a Yeoman que cree el **scaffolding del proyecto**

> $ yo bootstrap-less

**Instalamos las dependencias del proyecto**

Esto creará y descargará dichas dependencias en la
ruta *app/bower\_components* del proyecto

> $ bower install

**Construimos el proyecto**

El siguiente comando lanzará el grupo de tareas *default* descrita en
la línea 289 del fichero *Gruntfile.js*. En este caso: *jshint, test y build*.

Las dependencias necesarias para ejecutar las tareas se encuentran en la
carpeta *node\_modules* en la raíz del proyecto.

Para ir más ligeros, vamos a saltarnos las comprobaciones de [JSHint](http://www.jshint.com/install/)

> $ grunt —force

**Arrancamos el servidor**

> $ grunt serve

Si todo es correcto veréis en vuestra terminal la siguiente información:

> Running “serve” task
>
> Running “clean:server” (clean) task
>
> Running “coffee:dist” (coffee) task
>
> File app/scripts/hello.js created.
>
> Running “less:dist” (less) task
>
> File app/styles/main.css.map created.
>
> File app/styles/main.css created.
>
> Running “copy:server” (copy) task
>
> Running “connect:livereload” (connect) task
>
> Started connect web server on 127.0.0.1:9000.
>
> Running “watch” task Waiting...

Estas son todas las tareas y grupos de tareas que ha lanzado *$ grunt
serve*. Si queréis ver la configuración de esta tarea, abrid el archivo
*Gruntfile.js* y buscad la línea 260.

**Creamos el proyecto listo para subir a PRO**

Probad a lanzar la siguiente línea:

> $ grunt serve:dist

Como veréis las tareas ejecutadas son completamente distintas. Esto es
posible gracias a que con Grunt podemos encadenar tareas con
diferentes propósitos.

Una vez finalizada la tarea *$ server:dist* podéis ver que se ha creado
una carpeta llamada *dist*. Allí es donde podéis encontrar vuestro
proyecto listo para subir a PRO. ¿Fascinante eh? :)

Con el siguiente comando podréis ver las tareas disponibles:

> $ grunt —help

### Crear un proyecto Foundation

Vamos a utilizar el
[generador](https://github.com/bauschan/generator-foundation-five)
creado por [Peter Foerger](https://github.com/bauschan).

Este generador funciona básicamente como el anterior, con la única
diferencia que el layout se gestiona con [Foundation
5](http://foundation.zurb.com).

La configuración de Bower la podéis encontrar en [_bower.json](https://github.com/bauschan/generator-foundation-five/blob/master/app/templates/_bower.json).
Las tareas de Grunt están listadas en [_package.json](https://github.com/bauschan/generator-foundation-five/blob/master/app/templates/_package.json).
Estos ficheros forman parte del template que necesita Yeoman para hacer su magia.

La configuración de Yeoman la podéis encontrar en el fichero [/app/index.js](https://github.com/bauschan/generator-foundation-five/blob/master/app/index.js)
del generador.

Con la ayuda de npm, **instalamos el generador** en global

> $ sudo npm install -g generator-foundation-five

**Creamos un directorio**

> $ mkdir \~/learning-foundation && cd $_

Le decimos a Yeoman que cree el **scaffolding del proyecto**

> $ yo foundation-five

**Instalamos las dependencias del proyecto**

> $ bower install

**Instalamos las dependencias de Grunt**. Esto no debería ser necesario pero el generador tiene un bug.

> $ npm install

**Construimos el proyecto**

> $ grunt

**Arrancamos el servidor**

> $ grunt serve
