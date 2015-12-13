---
layout: post
title: Enfold & Fontello
grid: normal
color: color-4
---

## Comenzamos con las presentaciones: [Enfold](http://themeforest.net/item/enfold-responsive-multipurpose-theme/4519990) es un theme para Wordpress bastante completo (muchos widgets por defecto). [Fontello](http://fontello.com/) es una herramienta que te permite utilizar icon webfonts en tus proyectos web/mobile.

El problema con [Enfold](http://themeforest.net/item/enfold-responsive-multipurpose-theme/4519990) es carece de una documentación completa, y para realizar algunas tareas que
no están ya implementadas por defecto es bastante engorroso encontrar la
forma de hacerlo.

Hace unos días he descubierto como añadir nuevos iconos en
[Enfold](http://themeforest.net/item/enfold-responsive-multipurpose-theme/4519990), aprovechando la librería [Fontello](http://fontello.com/) que ya viene
pre-instalada.

En la ruta <code>enfold/functions.php</code> existe un array  con todos los iconos
por defecto. Por ejemplo el icono de búsqueda es algo así:

> 'search' =\> array( 'font' =\>'entypo-fontello', 'icon' =\> 'ue803')

Si queremos añadir uno nuevo (por ejemplo ‘phone’) debemos ir al
fichero:

> /enfold/config- templatebuilder/avia-template-
> builder/assets/fonts/entypo-fontello.svg

y buscar la cadena ‘phone’ (o algo similar) dentro de cada propiedad glyph-name.

Seguidamente copiamos el valor numérico adyacente de la propiedad ‘unicode’ (en este caso 854).

Volvemos a ‘enfold/functions.php’ y añadimos la siguiente línea al array:

> 'phone' =\> array( 'font' =\>'entypo-fontello', 'icon' =\> 'ue854')

Finalmente ya podemos usarlo en cualquier parte del theme:

> echo ‘\<span ‘.av\_icon\_string(‘phone’).’\>\</ span\>’;

Ayudaría mucho que existiera un documento con todos los iconos
disponibles, pero por ahora esta es la única forma.
