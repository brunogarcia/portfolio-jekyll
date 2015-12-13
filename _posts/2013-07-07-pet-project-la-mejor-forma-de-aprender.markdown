---
layout: post
title: Pet Project, la mejor forma de aprender
date: '2013-07-07T18:30:00+02:00'
grid: big
color: color-6
---

## Desde hace algunos meses estoy desarrollando [Tutti Frescuni](http://www.tuttifrescuni.com/). Es una aplicación que constantemente echaba en falta, y ya que no existía en el mercado me propuse crearla desde cero. Incluso diría que fué una de las razones por las cuales estudié un FP de Informática. Quería hacer cosas pero no sabía cómo, me faltaban las bases técnicas para afrontar el reto.

Cuando leí [Getting Real](http://gettingreal.37signals.com/), allá por
el 2010, recuerdo que me abrió los ojos con respecto a muchos aspectos
de mi día a día como profesional del mundo web. Especialmente recuerdo
el capítulo [What’s Your
Problem?](http://gettingreal.37signals.com/ch02_Whats_Your_Problem.php).
Y cito: “*A great way to build software is to start out by solving your
own problems. You’ll be the target audience and you’ll know what’s
important and what’s not. That gives you a great head start on
delivering a breakout product.”*

### Tutti Frescuni

Con este mantra bien aprendido y repetido mil veces en mi cabeza, he
comenzado a darle forma a una idea muy simple: **¿cómo saber qué frutas
y verduras están de temporada en una fecha en concreto?**, o sea ¿cúal
es su mejor momento de recolección y venta?.

Si lo pensamos bien este dato influye en muchos aspectos del producto.
Por ejemplo, si un melón se encuentra en su mejor temporada (de junio a
septiembre según mi base de datos), este tendrá mejor sabor y su precio
será más accesible. ¿Quién no ha cometido el tremendo error de comprar
un melón fuera de temporada? (un *melón-pepino* como dice mi suegra). Mi
idea es evitar este problema.

[![image](http://www.tuttifrescuni.com/assets/images/screenshots/screenshot_01.png)](http://www.tuttifrescuni.com/)

El logotipo, el favicon y el fabuloso nombre han sido creados por la
ilustradora [Eva Santos](http://evasantos.tumblr.com/)

Quiero que la decisión de compra se vea influenciada positivamente
gracias a [Tutti Frescuni](http://www.tuttifrescuni.com/). Y quiero que
lo haga en el momento preciso en el lugar indicado. Por ejemplo, si el
usuario se encuentra en un supermercado y desconoce si una fruta o
verdura en concreto se encuentra en su mejor fecha de recolección,
accediendo a Tutti Frescuni podrá conocerlo al instante.

Una tarea muy simple, pero muchas veces hacer las cosas realmente
simples es más complicado de lo que parece.

### Tecnología

El reto técnico ha sido interesante. He investigado diferentes
tecnologías para desarrollar este proyecto. Desde un primer momento he
apostado por librerías Javascript de código abierto:
[Backbone](http://backbonejs.org/),
[Underscore](http://underscorejs.org/), [jQuery](http://jquery.com/),
[Require.js](http://requirejs.org/) (plugins:
[text](http://requirejs.org/docs/download.html#text) &
[json](https://github.com/millermedeiros/requirejs-plugins)),
[Slim](http://www.slimframework.com/),
[iScroll](http://cubiq.org/iscroll-4),
[Spin.js](http://fgnass.github.io/spin.js/),
[Handlebars](http://handlebarsjs.com/) (plugin:
[hbars](https://github.com/jfparadis/requirejs-handlebars)),
[LESS](http://lesscss.org/) y [Twitter
Bootstrap](http://twitter.github.io/bootstrap/)

Lo más curioso ha sido comprobar que todas estas librerías se pueden
complementar a la perfección con poco esfuerzo. Y esto es un acierto por
parte de la comunidad de desarrolladores, que por encima de egos y
complejos apuesta por crear un entorno de trabajo (por ejemplo
iniciativas del tipo [CommonsJS](http://wiki.commonjs.org/wiki/CommonJS)
o [AMDJS](https://github.com/amdjs/amdjs-api/wiki/AMD)) que nada tiene
que envidiar a mega frameworks corporativos.

Si quieres conocer las tripas del proyecto, puedes ver el [código fuente
en Github](https://github.com/brunogarcia/TuttiFrescuni).

### Backbone

Para este *pet project* he leído decenas de artículos y libros
sobre [Backbone](http://backbonejs.org/)  Si tengo que recomendar alguno
en especial sería [Developing Backbone.js
Applications](http://addyosmani.github.io/backbone-fundamentals/) de
[Addy Osmani](https://twitter.com/addyosmani). Si todos los libros
técnicos fueran de este estilo, seguro que más gente los leería en sus
ratos libres.

Para empezar todo el contenido está [disponible en
Github](https://github.com/addyosmani/backbone-fundamentals). Los
lectores pueden ir mejorándolo constantemente proponiendo cambios
(actualmente 444 issues cerradas y 25 abiertas). Esto implica que
existen más de [140 contribuidores o mejor dicho
cocreadores](https://github.com/addyosmani/backbone-fundamentals/graphs/contributors).

Con respecto al libro, comentar que viene cargado de código, con muchos
ejemplos y casos de uso, abarcando prácticamente cualquier punto
relacionado con Backbone: fundamentos básicos, extensiones, desarrollo
modular, tests unitarios, etc. Obviamente no es un libro para leerlo del
tirón, es mejor en pequeñas dosis a lo largo de varias semanas.

Mención especial también a los videotutoriales de Nettuts+: [Connected
to the Backbone](https://tutsplus.com/course/connected-to-the-backbone/)
y [Advanced Backbone Patterns and
Techniques](https://tutsplus.com/course/advanced-backbone-patterns-and-techniques/).

Y si aún estás muy perdido, en Stack Overflow seguro que encontrarás
alguna respuesta a tus preguntas.

### Fotografías

Otro dato interesante han sido las fotografías utilizadas en la
aplicación: todas son [copyleft](http://en.wikipedia.org/wiki/Copyleft).
Esto quiere decir que cerca de 90 personas han tomado la decisión de
compartir su **trabajo y esfuerzo de forma altruista**.

He utilizado Flickr para la gestión de las imágenes. Me creé una cuenta
en dicho servicio y fuí añadiendo a
[favoritos](http://www.flickr.com/photos/tuttifrescuni/favorites/)
aquellas imágenes que mejor pinta tenían. Después con la [API
pública](http://www.flickr.com/services/api/) y con el método
[flickr.favorites.getList](http://www.flickr.com/services/api/flickr.favorites.getList.html)
obtuve un fichero JSON con toda la información necesaria.

Punto importante: actualmente Flickr dispone de 9 tamaños distintos para
todas las imágenes. Esto es muy bueno para que tu app sea responsive
desde un primer momento.

### Mejoras a futuro

Muchas.

En primer lugar estoy pensando en cambiar completamente el layout.
Actualmente estoy utilizando [Twitter
Bootstrap](http://twitter.github.io/bootstrap/)  y aunque puede ser 100%
responsive, realmente tiene muchas carencias a nivel mobile.

Incluso he creado una app Android con [Phonegap](http://phonegap.com/)
para testear el comportamiento y la verdad deja mucho que desear.
Obviamente la interacción no se puede comparar con los
[patterns](http://www.mobile-patterns.com/lists)que actualmente se están
utilizando en el desarrollo móvil. Sobre todo porque la idea principal
de Tutti Frescuni es poder utilizarla en dispositivos móviles.

Estoy evaluando [jQuery Mobile](http://jquerymobile.com/) o
[Titanium](http://www.appcelerator.com/platform/titanium-platform/) como
opciones. El caso de Titanium es realmente interesante. Acaban de
liberar la versión 3 y la verdad tengo muchas ganas de hincarle el
diente. 

Como entorno de desarrollo han ido mejorando paso a paso. Primero se
liberaron del WebView, después crearon su propio IDE basado en Eclipse
([Titanium
Studio](http://www.appcelerator.com/platform/titanium-studio/)) que
funciona de lujo. Y ahora tienen su propio framework MVC llamado
[Alloy](http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Framework)
el cual está basado en Backbone.

La API se Titanium se encarga de crear los componentes nativos en tiempo
de compilación. Esto te permite tener apps nativas para Android/iOS
programando en Javascript. 

Y si quieres más, tiene la plataforma (de pago)
[Appcelerator](http://www.appcelerator.com/platform/appcelerator-platform/)
con multiples servicios adicionales. 

Otro punto a mejorar es que Tutti Frescuni ofrece aún poca información.
No deja de ser un simple listado de productos filtrado por fecha y
temporada. La idea es ir añadiendo más información relacionada poco a
poco (¿recetas?, ¿valor nutricional?). Pero siempre conservando la
simplicidad del proyecto inicial.
