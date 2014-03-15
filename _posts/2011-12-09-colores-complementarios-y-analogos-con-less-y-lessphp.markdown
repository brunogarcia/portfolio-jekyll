--- 
layout: post 
title: Colores complementarios y análogos con LESS y lessphp 
date: '2011-12-09T18:03:00+01:00' 
tumblr\_url: http://blog.garciaechegaray.com/post/13972402072/colores-complementarios-y-analogos-con-less-y-lessphp
---

Disfruto mucho con cada [The Mêlée](http://themelee.org/) que se
organiza en Donostia. Las charlas y talleres son una auténtica
maravilla, y además es la oportunidad perfecta para conocer a gente del
sector web con nuevas ideas y ganas de hacer las cosas bien.

Quizás lo mejor de todo es que a muchos de nosotros nos sirve como un
pequeño brainstorming un tanto anárquico. En el 3º tiempo, entre caña y
pintxo, puedes escuchar (y soltar) ideas y pets proyects en las cuales
estas trabajando. Así pude conocer [Tendumi](http://www.tendumi.com/) o
[Gzaas](http://gzaas.com/) cuando todavía estaba en fase [*tengo una
idea muy
loca*](http://www.ojoven.es/gzaas/gzaas-historia-de-un-desarrollo-i/).

En la última mêlée pude hablar con [@maxkuri](http://maxkuri) y me contó
una idea que me gusto mucho. Básicamente consistía en jugar con la
función [spin() de LESS](http://lesscss.org/#-color-functions) para
obtener  (de manera dinámica) las armonías
[complementarias](http://en.wikipedia.org/wiki/Complementary_colors) y
[análogas](http://en.wikipedia.org/wiki/Analogous_colors) de un color
previamente seleccionado.

La idea inicial era crear un [mixins](http://lesscss.org/#-mixins) para
[LESS Element](http://lesselements.com/), pero una vez puestos nos dimos
cuenta de que la solución era un poco más compleja de lo esperado.

Para empezar necesitábamos enviarle a LESS una variable (en este caso un
color en [hexadecimal](http://www.colorschemer.com/online.html)) para
que lo procesara y nos diera unos valores concretos (otros tres colores
también en hexadecimal). Pero claro, LESS tiene muchas cosas buenas,
pero no es capaz de trabajar conjuntamente con un JS externo, leerlo y
escupir algo. Pensé en atacar directamente la librería JS de LESS, pero
no me gustaba la idea de depender de ella.

La solución salomónica: usar la función [parse() de
lessphp](http://leafo.net/lessphp/docs/#setting_variables_from_php) de
la siguiente forma:

Os explico un poco: la función
[spin()](http://lesscss.org/#-color-functions) nos permite mostrar un
color según los grados que le digamos del [círculo
cromático](http://en.wikipedia.org/wiki/Color_wheel). En este caso el
punto de partida es [\#0081d1](http://www.color-hex.com/color/0081d1),
del cual buscamos los análogos: 45º y -45º, y el complementario: 180º.
Nota:  también podemos pedir las
[tríadas](http://www.beading-design-jewelry.com/triadic-color-scheme.html)
o [tétradas](http://palettebuilder.com/colorTheory/Tetradic.aspx), sólo
es necesario crear otra variable y asignarles los grados necesarios.

El código generado es un CSS normal y corriente que cualquier navegador
puede entender:

> <style media='all' type='text/css'>
>   .example { color:white; }
>   .example.base { background-color:#0081d1; }
>   .example.analogousLeft { background-color:#1c00d1; }
>   .example.analogousRight { background-color:#00d184; }
>   .example.complementary { background-color:#d10000; }
> </style>

Con esto ya podemos trabajar directamente, y con un poco de HTML mostrar
esto:

![](http://bruno.garciaechegaray.com/img/experimentos/spin-colores.png)

Claro, después ves cosas como [Color Scheme
Designer](http://colorschemedesigner.com/) y piensas: ¡menudo curro!.
Pero nuestro experimento tampoco esta tan mal, si tienes en cuenta que
nació entre un par de cañas un viernes por la noche y un lunes por la
tarde ya estaba resuelto (con un [Code Retreat](http://coderetreat.com/)
de ocho horas el sábado).

Estos pequeños ejercicios son muy divertidos, a ver que sorpresas nos
trae la próxima mêlée.
