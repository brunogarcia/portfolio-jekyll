--- 
layout: post 
title: Los navegadores web explicado para muggles 
date: '2013-04-08T12:21:00+02:00' 
tumblr\_url: http://blog.garciaechegaray.com/post/47447879446/los-navegadores-web-explicado-para-muggles
---

<big>Intentaré hacer una introducción muy básica sobre como funciona un
navegador web. Me gustaría que sea capaz de entenderlo cualquier persona
alejada del sector y sin conocimientos técnicos previos.</big>

Está escrito muy rápidamente para contestar a un [twit lanzado
por @mcesttevan](https://twitter.com/mcestevan/status/321170764021776386),
con respecto a la Bonilista “[Evangelista Técnico por un
día](http://us2.campaign-archive2.com/?u=374c664073e1a1fa3deca53b4&id=92e3e39bcd)”.

### Conceptos básicos

Un **navegador web** es un software que nos permite visualizar e
interactuar con páginas World Wide Web. Actualmente los más importantes
son: Chrome (Google), Firefox (Mozilla) e Internet Explorer (Microsoft).

También existen Safari y Opera, pero con una cuota de mercado muy
pequeña en *desktop*. *Corrección: olvide mencionar que Safari es el
navegador por defecto en iPhone/iPad, lo cual le otorga un puesto
relevante en el mercado de los navegadores web.*

Para realizar correctamente la tarea asignada (navegar por la web) esta
aplicación necesita de varios **componentes**. Los mas importantes:

1.  [Motor de Renderizado](http://en.wikipedia.org/wiki/Layout_engine),
    encargado de procesar y “pintar” los componentes de cada página
    (HTML, CSS, XML, imágenes) en la pantalla de tu navegador.
    Actualmente existen varios en el mercado: Webkit (Chrome, Safari,
    Opera), Gecko (Firefox) y Trident (Internet Explorer).
2.  [Motor Javascript](http://en.wikipedia.org/wiki/JavaScript_engine),
    encargado de procesar el código javascript de la página web. Los
    principales: V8 (Google), Rhino (Mozilla), Chakra (Microsoft).

Conociendo estas diferencias, pasemos el siguiente punto básico. Existe
algo llamado **estándares web**. Esos estándares se han ido creado poco
a poco, a base de conseguir un consenso entre las distintas partes
involucradas.

1.  **Organizaciones**: la encargada de crear la mayoría de
    los estándares que actualmente usamos en cualquier página web es la
    [W3C](http://www.w3.org/). Fue fundada por Tim Bernes-Lee (el
    creador  de la WWW). Aunque también cabe destacar a
    [ECMA](http://www.ecma-international.org/) (Javascript)
    y [WHATWG](http://www.whatwg.org/) (HTML5).
2.  **Grandes empresas** con intereses económicos en el sector: Google,
    Adobe, Apple, Microsoft, Oracle, etc.

Como os podréis imaginar poner en orden a tantos actores es muy
complicado y los conflictos de intereses son enormes. Por esta razón la
W3C ha tardado muchos años en sacar adelante algunos estándares o
versionar los ya existentes (recordemos el caso de HTML5 que da para
toda una novela de intrigas). Por esta razón se ha ganado una fama de
burocrática y lenta, a mi entender poco justificada. No todo es culpa de
la W3C.

### Incompatibilidades entre distintos navegadores

Resumiendo, por una parte tenemos una serie de estándares que deben
cumplirse (para eso fueron creados) y por otra tenemos el software
creado por las distintas empresas (Google, Microsoft) o fundaciones
(Mozilla).

El problema está en que muchas veces estos estándares no se cumplen o se
implementar erróneamente. Esto es un gran problema para todos, ya que
tiene grandes repercusiones económicas.

Si Microsoft decide arbitrariamente no implementar cierta característica
en su navegador (basándose en su cuota de mercado o en decisiones
empresariales) entonces los desarrolladores tendrán que trabajar el
doble o el triple para que dicha característica sea compatible y el
cliente final no se vea perjudicado. Y cuando digo cliente final me
refiero a mi padre comprando un libro o un colchón en un comercio
online.

 Si ya es complicado que un usuario compre por internet (seguridad,
precios, marketing, usabilidad, etc.), imaginaros añadir un problema
técnico. Si el **botón de compra** no funciona correctamente por un
problema de incompatibilidad no detectado, entonces todo el proceso se
va al carajo. Y esto es una pérdida de dinero y sobre todo una gran
pérdida de confianza en el sector como medio de compra. Vamos, un medio
en el cual no vale la pena invertir dinero y tiempo. Y donde sólo viven
hackers y gente chunga.

### WebKit & Blink: otra guerra de navegadores

En la primera década del nuevo siglo (2000-2010) el sector ha estado
luchando constantemente por resolver este problema de una vez por todas.

Yo realmente veía el asunto casi finalizado. Parecía que todos estaban
de acuerdo en que [WebKit](http://www.webkit.org/) era la mejor opción.
Es un proyecto de software libre que utilizan dos de los principales
navegadores: Chrome y Safari. Además es por defecto el motor utilizado
en las principales plataformas móviles: iPhone/iPad y Android. Y por
supuesto cumple muy bien los estándares web (para los más curiosos:
existe una herramienta llamada [Acid Test](http://acid3.acidtests.org/)
que mide este grado de compatibilidad).

El problema es que ahora Google ha anunciado que hará un fork de WebKit,
o sea una copia exacta del proyecto original.

Entonces,  ¿si es una copia exacta, por qué se ha armado tanto revuelo?.
El problema está en que todos los cambios y mejoras aplicados a este
fork (llamado [Blink](http://www.chromium.org/blink)) serán
incompatibles con WebKit. O sea a la larga se irá convirtiendo en un
nuevo motor de renderizado, con todo lo que ello conlleva:**  otra vez
perdida de consenso y nuevas y molestas****incompatibilidades entre
navegadores.**

Vamos, otra [guerra de
navegadores](http://en.wikipedia.org/wiki/Browser_wars) que tantos
problemas causo en el pasado. Y eso no beneficia a nadie.
