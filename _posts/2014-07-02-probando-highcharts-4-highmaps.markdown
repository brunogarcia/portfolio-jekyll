--- 
layout: post 
title: ! 'Probando Highcharts 4 y Highmaps'
date: '2014-07-02T17:55:00+01:00' 
---

<big>Highcharts es una librería desarrollada en Javascript que permite crear fácil y rápidamente gráficos interactivos. </big>

Trae de serie un nutrido pack de gráficos: área, columnas, barras, pasteles (o quesitos), etc. Simplemente necesitas añadir un set de datos (acepta JSON, CSV, XML) y ya puedes incorporarlo en cualquier proyecto web. Además puedes configurar prácticamente toda la interfaz de usuario con la imagen corporativa que desees (colores, fuentes, tamaños, idiomas, etc.).

Librerías como Highcharts existen muchas, algunas mucho más potentes como D3 o más básicas como Flot, Fusion Charts o incluso Google Charts. Pero a mi entender Highcharts es actualmente la librería de facto para crear gráficos "precocinados". Quizás si necesitas crear un nuevo tipo de gráfico muy específico y personalizado, D3 sea la mejor (y única) opción.

## Highcharts 4

Hace unas pocas semanas Highcharts ha lanzado una nueva versión (v4) con un muchas novedades. Por ejemplo han añadido nuevos tipos de gráficos: heat charts, 3D charts, bubble charts, funnel/piramid chart, waterfall. También tienen un [download builder](http://www.highcharts.com/download) bastante útil que te permite personalizar la librería con los componentes que vayas a necesitar en cada proyecto, ahorrandole muchos kb al usuario final.

## Highmaps

Pero de todas las novedades, me ha gustado mucho [Highmaps](http://www.highcharts.com/products/highmaps). Esta es una librería específica para crear (como su nombre indica) mapas. Siempre con la filosofía que  ha seguido Highcharts: una librería sencilla y fácil de usar. Aqui tambíen existen otras opciones mucho más completas y potentes como [Leaflet](http://leafletjs.com/) o [CartoDB](http://cartodb.com).

Cosas a destacar: acepta GeoJSON y SVG. Puedes encontrar un listado de recursos gratuitos para ambos formatos en [Highcharts Code: Map Data](http://code.highcharts.com/mapdata/). También tienes acceso gratuito a la [API](http://api.highcharts.com/highmaps) y ejemplos de implementación en la [demo](http://www.highcharts.com/maps/demo).

<iframe width="100%" height="650" src="http://jsfiddle.net/brunogarcia/6ccrt/embedded/result,js,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
