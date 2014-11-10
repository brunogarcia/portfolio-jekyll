--- 
layout: post 
title: ! 'Google Maps: demasiados markers en una misma coordenada espacial'
date: '2014-11-10T21:00:00+01:00' 
---

<big>¿Cómo abordar el siguiente problema de interfaz de usuario?: tienes un mapa con demasiados marcadores y además muchos de ellos se encuentran en la misma coordenada espacial</big>

Existe un artículo en [Google Map API](https://developers.google.com/maps/) con varios plugins interesantes. El artículo se llama [Too Many Markers!](https://developers.google.com/maps/articles/toomanymarkers) y me ha servido como punto de partida para encontrar una solución. 

## Marker Clusterer

Demasiados markers (o localizadores) en un mapa es claramente un problema de interfaz. La idea es poder agruparlos por cercanía según un criterio muy simple: nivel de zoom. Mientras más lejano el zoom (por debajo del nivel 13) más agrupados los tendremos. Y al contrario, si acercanos el zoom (por encima del nivel 15) podremos mostrar todos los markers a la vez, ya que a este nivel el marco de visualización nos permite una interacción correcta y fluida.

Entre todas las opciones, he optado por [Marker Clusterer](https://code.google.com/p/google-maps-utility-library-v3/), ya que hace exactamente lo que tengo en mente: agrupar ĺos markers según el nivel de zoom. 

Este es un ejemplo de la implementación final sacado de la documemtación del plugin. Los datos se encuentran en un [fichero JSON](http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/src/data.json) alojado en el repositorio del plugin.

<iframe width="100%" height="450" src="http://jsfiddle.net/brunogarcia/cxgwb4oh/5/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<p></p>

Podemos añadir una serie de opciones para configurar el plugin a nuestro gusto. En este caso un _gridSize_ de 40 y un _maxZoom_ de 15. 
La primera opción especifica el tamaño de la cruadrícula que servirá para agrupar nuestros markers. O sea mientras más grande sea la cuadrícula, más markers podremos agrupar en la misma.
Puede ser un valor entre 40 y 80. 
La segunda opción establece el límite de zoom al cual el plugin puede ser visualizado. Recomendable un valor por encima de 15. Recordemos que Google Maps acepta un [máximo de 18 para el nivel de zoom](https://developers.google.com/maps/documentation/javascript/maxzoom).

## Overlapping Marker Spiderfier 

Este plugin de nombre tan largo y extraño [Overlapping Marker Spiderfier](https://github.com/jawj/OverlappingMarkerSpiderfier) nos permite agrupar aquellos markers que se encuentran en el mismo punto geográfico, o sea en la misma longitud y latitud. 

Por ejemplo, imagina que necesitas mostrar en un mapa diferentes ofertas pertenecientes al mismo establecimiento. Si tienes, digamos, 10 ofertas por establecimiento, por defecto Google Map ubicará cada marker uno encima de otro, y sólo podremos hacer click sobre el marker que se encuentra más arriba. Resultado final: no es usable.

Overlapping Marker Spiderfier soluciona este problema moviendo cada marker en un radio precalculado por el mismo plugin. Visualmente verás un circulo de markers y podrás hacer click en cada uno de ellos indistintamente.

Este es un ejemplo de la implementación final sacado de la documemtación del plugin. Los datos se generan automáticamente. La [configuración](https://github.com/jawj/OverlappingMarkerSpiderfier#how-to-use) de este plugin es un poco compleja ya que requiere una serie de pasos muy específicos que afectan directamente al objeto instanciado de Google Maps.

<iframe width="100%" height="450" src="http://jawj.github.io/OverlappingMarkerSpiderfier/demo.html"  allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<p></p>

## Resumen

Finalmente utilizando ambos plugins en un mapa podemos combinar dos comportamientos bastante complejos a nivel de interfaz de usuario.

En este primer pantallazo, se puede observar como funciona Marker Clusterer en un proyecto real. En este caso agrupando 17 markers en uno solo, con una iconografía personalizada.

![image](http://bruno.garciaechegaray.com/blog/startclub-example-01.png)

En el segundo pantallazo, se puede observar como funciona Overlapping Marker Spiderfier en un proyecto real. Al hacer click sobre un establecimiento con varias ofertas, se despliegan todos los markers permitiendo una correcta interacción con la interfaz.

![image](http://bruno.garciaechegaray.com/blog/startclub-example-02.png)