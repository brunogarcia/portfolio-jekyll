--- 
layout: post 
title: ! 'Probando Highcharts 4 y Highmaps'
date: '2014-07-02T17:55:00+01:00' 
---

<big>Highcharts es una librería desarrollada en Javascript que permite crear fácil y rápidamente gráficos interactivos. </big>

Trae de serie un nutrido pack de gráficos: área, columnas, barras, pasteles (o quesitos), etc. Simplemente necesitas añadir un set de datos (acepta JSON, CSV, XML) y ya puedes incorporarlo en cualquier proyecto web. Además puedes configurar prácticamente toda la interfaz de usuario con la imagen corporativa que desees (colores, fuentes, tamaños, idiomas, etc.).

Librerías como Highcharts existen muchas, algunas mucho más potentes como [D3](http://d3js.org/) o más básicas como [Flot](http://www.flotcharts.org/), [Fusion Charts](http://www.fusioncharts.com/) o incluso [Google Charts](https://developers.google.com/chart/). Pero a mi entender Highcharts es actualmente la librería de facto para crear gráficos "precocinados". 
Quizás si necesitas crear un nuevo tipo de gráfico muy específico y personalizado, [D3](http://d3js.org/) sea la mejor y única opción por el momento, siempre teniendo en cuenta que existen librerías como [NVD3](http://nvd3.org/) o [Rickshaw](http://code.shutterstock.com/rickshaw/) que te pueden ahorrar tiempo de desarrollo. [NVD3](http://nvd3.org/) todavía se encuentra en beta, pero a nivel de [performance]( http://jsperf.com/charts-lib-comparasion/8) por lo visto gana de lejos. 

## Highcharts 4

Hace unas pocas semanas Highcharts ha lanzado una nueva versión (v4) con un muchas novedades. Por ejemplo han añadido nuevos tipos de gráficos: [heat charts](http://www.highcharts.com/demo/heatmap), [3D charts](http://www.highcharts.com/demo/3d-column-interactive), [scatter plot](http://www.highcharts.com/demo/scatter), [funnel chart](http://www.highcharts.com/demo/funnel), [waterfall](http://www.highcharts.com/demo/waterfall). También tienen un [download builder](http://www.highcharts.com/download) bastante útil que te permite personalizar la librería con los componentes que vayas a necesitar en cada proyecto, ahorrandole muchos kb al usuario final.

## Highmaps

Pero de todas las novedades, me ha gustado mucho [Highmaps](http://www.highcharts.com/products/highmaps). Es un componente pensado para la creación de mapas. Siempre con la filosofía que  ha seguido Highcharts: sencillo y fácil de usar. Aqui tambíen existen otras opciones mucho más completas y potentes como [Leaflet](http://leafletjs.com/) o [CartoDB](http://cartodb.com).

A destacar: acepta [GeoJSON](http://en.wikipedia.org/wiki/GeoJSON) y [SVG](http://en.wikipedia.org/wiki/Svg). Puedes encontrar un listado de recursos gratuitos para ambos formatos en [Highcharts Code](http://code.highcharts.com/mapdata/). También tienes acceso gratuito a la [API](http://api.highcharts.com/highmaps) y ejemplos de implementación en la [demo](http://www.highcharts.com/maps/demo).

## Manos a la obra

Para esta prueba, he usado el [GeoJSON para España](http://code.highcharts.com/mapdata/countries/es/es-all.geo.json). Se encuentra mínimizado y tiene un peso de 64 kb. Por lo tanto si queréis echarle un ojo tendréis que pasar el código por una herramienta tipo [JS Beautifier](http://jsbeautifier.org/). 

Leyendo el código vi algo que me resulto extraño: no sé por qué razón utilizan una nomenclatura tan rara para los ID de ciudades. Por ejemplo a Ciudad Real le corresponde el código _"es-393"_, a Palencia el _"es-7254_, y Salamanca tiene el _"es-7251"_. Y así con varias ciudades más. Esto huele raro. Estuve revisando la Wikipedia y encontre una ISO que resuelve este problema. En concreto la [ISO_3166-2:ES](http://es.wikipedia.org/wiki/ISO_3166-2:ES). En ella Palencia es _"es-p"_, Ciudad Real _"es-cr"_ y Salamanca _"es-sa"_, vamos una nomenclatura mucho más eficiente para trabajar. En resumen, he enviado un [post](http://forum.highcharts.com/highmaps-usage-f14/geojson-spain-iso-3166-2-es-t30083/) al foro oficial de Highcharts, a ver si me explican por qué narices no utilizan el ISO correspondiente.

Dicho esto, si le echaís un ojo la pestaña Javascript de JSFiddle, veréis que la configuración no tiene mucho misterio.
Primero cambio los colores y tipos de fuentes por defecto. Seguidamente preparo los datos a mostrar, asignandole al "hc-key" de cada ciudad un valor aleatorio de 0 a 99. Y despúes instancio el mapa en el nodo correspondiente (en este caso "#container"). Y poco más, con estos pequeños pasos ya tienes un mapa interactivo de España para mostrar datos.

<iframe width="100%" height="650" src="http://jsfiddle.net/brunogarcia/6ccrt/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
