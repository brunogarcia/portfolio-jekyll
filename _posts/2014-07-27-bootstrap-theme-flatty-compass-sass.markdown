---
layout: post
title: ! 'Flatty, un theme Bootstrap desarrollado con Compass & Sass'
date: '2014-10-16T22:00:00+01:00'
grid: normal
color: color-3
---

## Flatty es un theme para Bootstrap desarrollado con Compass & Sass. Añade decenas de nuevos modulos
HTML/CSS y pre selecciona un buen número de plugins jQuery para abordar cualquier proyecto front-end.

![Flatty](https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB0P6NR1N.png?v=2.2)

Estoy trabajando en un proyecto a medida, donde gran parte del desarrollo consiste en crear varios back office para los diferentes roles que tiene la aplicación. Y aunque Bootstrap viene de serie con un bueno número de módulos para crear diferentes layouts, en este caso se nos quedaba corto a nivel de funcionalidades predefinidas.

Investigando las posibilidades que existian en el mercado, dimos con [Wrap Bootstrap](https://wrapbootstrap.com) un servicio similar a [Theme Forest](http://themeforest.net/) si lo tuyo con los themes para Wordpress o Prestashop.

Wrap Bootstrap es un market con cientos de themes y templates, organizado por varias categorías, una de ellas
[Admin & Dashboards](https://wrapbootstrap.com/themes/admin). ¡Bingo!.

Y aqui me permito hace un pequeño inciso querido lector. Te estarás preguntando por qué carallo nos hemos gastado dinero en comprar un theme si lo podemos hacer nosotros mismos, ¿para eso nos pagan, no?.

Lo primero, Flatty cuesta sólo 18$, que al cambio son unos 13€. Vamos, un precio ridículo para un proyecto web a medida de varios miles de euros.
Segundo, nos ahorra mucho tiempo de desarrollo. Y en este caso tiempo es igual a dinero. Mucho dinero si calculamos el coste por hora que facturamos.

**Al cliente, no le interesa con qué herramientas hagamos nuestro trabajo** (escribe aquí tu framework, librería o IDE favorito). Lo único que le interesa es el time-to-market y que las características desarrolladas funcionen correctamente y cumplan su objetivo. Si uso Sass, Bootstrap o CakePHP es por que me permite trabajar más rápido y ser el doble de eficiente. Punto. El resto son pajas mentales que nos montamos nosotros mismos.

## ¿Qué más me puedes contar sobre Flatty?

Flatty como herramienta tiene cosas buenas y malas.

**Primero las malas**. No es de código abierto, por lo tanto la comunidad no puede evolucionar y mejorar la herramienta. Esto influye en el número de actualizaciones y resolución de bugs (la última actualización es de agosto del 2013). También crea una capa de diseño por encima de Bootstrap que puede no encajar con la imagen de marca de tu proyecto.

**Ahora las buenas**. Implementa la última versión de Bootstrap, en concreto la [v3 con Sass](https://github.com/twbs/bootstrap-sass). Utiliza toda la potencia de [Compass](http://compass-style.org/) para gestionar el theme. Y añade varias decenas nuevos modulos HTML/CSS.

Por ejemplo [email templates](http://www.bublinastudio.com/flattybs3/email_templates.html), [calendario](http://www.bublinastudio.com/flattybs3/calendar.html), [pack de iconos vía Font Awesome](http://www.bublinastudio.com/flattybs3/buttons_and_icons.html), [plugin de wysiwyg](http://www.bublinastudio.com/flattybs3/wysiwyg.html), [chat](http://www.bublinastudio.com/flattybs3/chats.html), etc. La [lista completa de features](https://wrapbootstrap.com/theme/flatty-flat-administration-template-WB0P6NR1N) la puedes consultar en Wrap Bootstrap.

Otra punto fuerte de es que puedes personalizar el framework a tu gusto ya que tienes acceso a todos los ficheros [scss](http://sass-lang.com/) del proyecto. Por lo tanto si no necesitas un módulo en concreto, simplemente lo eliminas del fichero principal (en nuestro caso 'admin.scss'). La estructura de este fichero es la siguiente:

{% highlight sass %}
@import "compass";
@import "theme/variables";
@import "theme/utilities";
@import "theme/main"
@import "theme/font-awesome";
@import "theme/type";
@import "theme/header";
@import "theme/navigation";
@import "theme/content";
@import "theme/boxes";
@import "theme/boxes-quick-links";
@import "theme/boxes-statistics";
@import "theme/tables";
@import "theme/todo-list";
@import "theme/recent-activity";
@import "theme/calendar";
@import "theme/chat";
@import "theme/tasks";
@import "theme/nestable-list";
@import "theme/accordions";
@import "theme/tabs";
@import "theme/wizard";
@import "theme/forms";
@import "theme/pages/gallery";
@import "theme/pages/timeline";
@import "theme/pages/invoice";
@import "theme/pages/pricing_tables";
@import "theme/pages/orders";
@import "theme/pages/faq";
@import "theme/pages/errors";
@import "theme/pages/login";
@import "theme/overrides-bootstrap";
@import "theme/overrides-plugins";
@import "theme/common";
@import "theme/pull";
{% endhighlight %}

## Configurar Compass

Algo muy útil es saber como [configurar correctamente un proyecto Compass](https://gist.github.com/nathansmith/1179395).
En este ejemplo podemos ver como establecer una serie de configuraciones para el proyecto modificando el fichero _config.rb_

{% highlight ruby %}
preferred_syntax = :sass

http_path = '/'
relative_assets = true
sass_dir = 'flatty'

images_dir = 'assets/img'
fonts_dir = 'assets/fonts'
css_dir = 'assets/stylesheets'
javascripts_dir = 'assets/js'

# Dev
line_comments = true

# Production
# output_style = :compressed
{% endhighlight %}
