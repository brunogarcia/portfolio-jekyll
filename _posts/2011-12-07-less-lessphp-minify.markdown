---
layout: post
title: LESS, lessphp & minify
date: '2011-12-07T11:00:00+01:00'
grid: normal
color: color-2
---

## A continuación os explicaré como ser un front-end más feliz, organizado y productivo con [LESS](http://lesscss.org/). Y si esto os parece poco: cómo reducir una tercera parte la carga de vuestras páginas con [lessphp](http://leafo.net/lessphp/) y [minify](http://code.google.com/p/minify/).

***

### LESS

Desde hace algunos meses estoy trabajando con
[LESS](http://lesscss.org/) para diferentes proyectos web. LESS es un
pre-procesador para CSS basado en [SASS](http://sass-lang.com/).
Sinceramente esto suena a chino, lo realmente importante es que añade
una serie de mejoras propias, como por ejemplo poder utilizar variables,
funciones, [mixins](http://lesselements.com/) y anidar estilos. Si has
trabajado con CSS entenderás lo revolucionario que es poder utilizar
estas capacidades que antes sólo existían en programación servidor.

Ahora bien, para que LESS pueda funcionar correctamente en cualquier
browser  necesitas cargar un archivo javascript de 36 Kb. Dependiendo de
tu proyecto, quizás puedas pensar que añadir "otra librería" no merezca
la pena. Te equivocas, lo vale. Pero no te preocupes, porque aquí entra
en escena [lessphp.](http://leafo.net/lessphp/)

***

### lessphp

[lessphp](http://leafo.net/lessphp/) es una librería escrita en PHP que
te permite compilar automágicamente cualquier archivo _less_ y enviar al
navegador del usuario un *css* que pueda entender correctamente.

¿Ventajas?. Para empezar le ahorras al usuario cargar el compilador LESS
(recordemos que son 36 Kb). Y lo mas importante: podrás trabajar y
organizar tus archivos _less_ como mejor te parezca.

Por ejemplo, yo suelo trabajar con varios archivos en local: _grid.less,
reset.less, typo.less, [element.less](http://lesselements.com/),
hacks-ie.less, proyect-name.less_, etc. Por otra parte tengo
un*proyect-name-master.less*con un _@import_ para cada uno de los
archivos mencionados.

<iframe width="100%" src="http://pastebin.com/embed_iframe.php?i=qPDpUCxw"></iframe>

Después le digo a [lessphp](http://leafo.net/lessphp/) que haga su
magia: convertirlo a CSS (por ejemplo: _proyect-name.css_).

<iframe width="100%" src="http://pastebin.com/embed_iframe.php?i=n5R38wbB"></iframe>

A tener en cuenta: lessphp interpreta la etiqueta _@import_ como una
copia directa del archivo enlazado. O sea, el CSS final será una mezcla
(en orden de aparición) de todos los archivos enlazados en
proyect-name-master.less
Caramelito extra: ya te estás ahorrando unos
cuantos KB en esta conversión.

***

### minify

Pero se puede rizar aún más el rizo. Existe otra librería PHP llamada
[minify](http://code.google.com/p/minify/) la cual combina, minimiza y
cachea archivos CSS y JS.

Por ejemplo ¿qué pasa con todas aquellas librerías externas que sueles
utilizar en tus proyectos?. Prácticamente todos los plugins jQuery
vienen con sus propios estilos y javascripts. Lo bueno de
[minify](http://code.google.com/p/minify/) es que te permite juntar
todos esos archivos (y tu *less/css* compilado) en un único documento.
Sólo hace falta modificar ligeramente tus enlaces:

	<link type='text/css' rel='stylesheet' href='/min/g=cssProyectName'>
	<script type='text/javascript' src='/min/g=jsProyectName'></script>

Y configurar correctamente [minify](http://code.google.com/p/minify/)
con todas aquellos archivos que quieras procesar:

<iframe width="100%" src="http://pastebin.com/embed_iframe.php?i=UjCUjKzM"></iframe>

***

### Resumen

-   **La carga de la página se reduce una tercera parte**, ya que
    obtienes un único documento CSS, minimizado, agrupado y cacheado en
    servidor.
-   Podrás **trabajar en local con LESS sin ataduras**, según tu propio
    modelo mental, organizando tus estilos según la estructura y
    peculiaridades de cada proyecto.
-   No tendrás que preocuparte del usuario final o de sobrecargar el
    servidor con ** peticiones HTTP innecesarias**.
