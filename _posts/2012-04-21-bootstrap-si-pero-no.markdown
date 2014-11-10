--- 
layout: post 
title: Bootstrap sí, pero no 
date: '2012-04-21T22:05:00+02:00' 
tumblr\_url: http://blog.garciaechegaray.com/post/21518567400/bootstrap-si-pero-no
---

<big>El pasado 21 de abril, [Goio](http://twitter.com/#!/maxkuri) de [La
Personnalite](http://lapersonnalite.com/) y yo, dimos una charla sobre
[Bootstrap](http://twitter.github.com/bootstrap/), el nuevo framework
front-end desarrollado y liberado por Twitter.</big>

La organización del evento corrió a cargo de nuestros compis de [The
Mêlée](http://themelee.org/post/21218720637/melee-bipolar-bootstrap-si-pero-no-y-dingadanga).

Y como predicamos con el ejemplo, para la presentación hemos utilizado
HTML5, CSS3 y Javascript, con la ayuda de la super librería
[deck.js](https://github.com/imakewebthings/deck.js)

Son [35 slides repletas de referencias y recursos sobre
Bootstrap](http://bruno.garciaechegaray.com/Bootstrap.The.Melee/presentation/index.html):
ventajas, desventajas, consejos y alternativas varias.

Realmente Boostrap ha sido una excusa para hablar sobre nuevas
tecnologías y metodologías de desarrollo front-end, como pueden ser
[LESS](http://lesscss.org/),
[OOCSS](https://github.com/stubbornella/oocss/wiki) o [Responsive Web
Design.](http://www.alistapart.com/articles/responsive-web-design/)

Y si aún quieres más, visita [Front-end
Wiki](https://github.com/brunogarcia/Front-end-Wiki/wiki) para encontrar
cientos de recursos muy bien organizados sobre desarrollo front-end.

<iframe border="0" height="600px" src="http://bruno.garciaechegaray.com/Bootstrap.The.Melee/presentation/index.html" width="100%"></iframe>

### Resumen

Desde que descubrí [Blueprint](http://www.blueprintcss.org/) hace varios
años, no he dejado de decirle a todo el mundo que trabajar con un
Framework CSS es el mejor camino para enfrentarse a un proyecto web.
Independientemente del tamaño del proyecto, es una buena idea no
reinventar la rueda cada vez. Sobre todo porque te centras en cosas mas
importantes y te olvidas del layout, que siempre da problemas y quita
tiempo.

Ahora bien, con un megaframework del
tipo [Bootstrap](http://twitter.github.com/bootstrap/) la curva de
aprendizaje es un pelín dura. Sobre todo porque te obliga a entender su
estructura y forma de trabajar. Configurar todo te puede llevar un
tiempo (por ejemplo aprender a trabajar con
[LESS](http://lesscss.org/)es una prioridad). Pero creo que compensa, ya
que la siguiente vez lo harás con los ojos cerrados.

[Bootstrap](http://twitter.github.com/bootstrap/) tiene varios
componentes, uno de ellos es el [Scaffolding](http://twitter.github.com/bootstrap/scaffolding.html), que
viene a ser básicamente un reset + grid (implementado de fábrica con un
layout fixed, fluid y responsive). El resto de componentes (tablas,
formularios, buttons, icons, plugins jquery, etc.) te los puedes saltar
si quieres, pero es una buena idea echarle un ojo.

Otra punto importante: necesitas venderle la idea al resto del equipo
(diseñadores, programadores, jefe de proyecto, etc.), porque sin su
implicación será imposible que todo salga bien.

El diseñador gráfico necesitará saber que debe trabajar con un grid.
Podrá elegir el número de columnas y el gutter, pero deberá adaptarse al
mismo. También deberá asumir que ya no sirve de nada diseñar una única
pantalla en el Photoshop/Fireworks, ahora el grid es responsive. Por lo
tanto deberá tener en cuenta los [diferentes tamaños de los dispositivos](http://twitter.github.com/bootstrap/scaffolding.html#responsive):
+1200px, +980px, +768px, -767px, -480px.

Nuevas cuestiones técnicas para los programadores: [el problema de las imágenes en las implementaciones responsive](https://docs.google.com/spreadsheet/ccc?key=0Al0lI17fOl9DdDgxTFVoRzFpV3VCdHk2NTBmdVI2OXc&pli=1#gid=0). Todo un mundo por descubrir.

Un último punto, todo esto implica aumentar el tiempo de trabajo y alguien deberá asumir los costes. El cliente deberá saberlo, ya que tendrá que pagarlo.
