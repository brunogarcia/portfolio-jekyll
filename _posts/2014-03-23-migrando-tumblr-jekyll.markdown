--- 
layout: post 
title: ! 'Migrando de Tumblr a Jekyll'
date: '2014-03-23T17:55:00+01:00' 
---

La semana pasada he migrado mi blog de Tumblr a [Jekyll](http://jekyllrb.com/). 
El cambio ha sido motivado por varias razones. El más importante la pésima interfaz de usuario de Tumblr al momento de editar y escribir un nuevo post. Básicamente es un modal mal implementado y ejecutado. Una lástima por parte de Tumblr que fallen en algo tan básico y evidente.
En todo caso, si a Tumblr no le exiges demasiado, tener un blog en su plataforma es una de las mejores opciones. Al menos yo le pongo por delante de Wordpress o Blogger.

El flujo de trabajo que propone [Jekyll](http://jekyllrb.com/) es completamente diferente. Simplemente escribes un post en formato [markdown](http://daringfireball.net/projects/markdown/) en tu editor de texto favorito (para mi [Sublime Text](http://www.sublimetext.com/) es la mejor opción) y cuando has finalizado, lanzas un *$ git push* y ya lo tienes online. Esto último gracias a [GitHub Pages](http://pages.github.com/) que viene de fábrica completamente integrado con Jekyll.

## Jekyll

Pero recapitulemos un poco. ¿Qué es exactamente Jekyll?. 
Jekyll es un generador de sites estáticos. Está desarrollado en Ruby, y para el sistema de plantillas utiliza [Liquid](http://docs.shopify.com/themes/liquid-basics). La característica más importante es que **no utiliza ningún sistema de base de datos**. Sólo convierte ficheros .md a .html. Así de simple y sencillo. 


## Instalación

En principio la instalación es la parte más sencilla. Aunque puede que tengas problemas con la versión de Ruby adecuada. Tuve que instalar la 1.9.1, con la 2.0 no funciona.

	sudo apt-get install ruby1.9.1-dev 

	sudo gem install jekyll


## Migración

Jekyll tiene una serie de [importers](http://import.jekyllrb.com/docs/home/) para prácticamente cualquier sistema de blog. En el caso de Tumblr la migración consiste en lanzar estas líneas de código. 

	$ ruby -rubygems -e 'require "jekyll-import";

	JekyllImport::Importers::Tumblr.run({
		"url"            => "http://myblog.tumblr.com",
		"format"         => "html",
		"grab_images"    => false, 
		"add_highlights" => false, 
		"rewrite_urls"   => false 
	})'

Y ya está. En una carpeta llamada "_posts" encontrarás todos tus posts listos para ejecutarse en Jekyll. En mi caso, la migración a ficheros .md no funcionaba correctamente, vamos me creaba los ficheros pero sin el texto formateado adecuadamente. No me quedo otra opción que exportalo a  "html" y con una herramienta llamada [Pandoc](http://johnmacfarlane.net/pandoc/) realizar la conversión a markdown.

Tuve algunos problemas con ciertas etiquetas html, por ejemplo no existe una etiqueta compatible con "iframe". Y con las rutas de las imágenes tampoco va muy fina la cosa. En todo caso, nada que algo de tiempo y dedicación no solucionen.

## GitHub Pages

Como he mencionado anteriormente, [GitHub Pages](http://pages.github.com/) ya viene integrado con Jekyll. Si tienes una cuenta en GitHub, necesitas crear un repositorio del tipo "username.github.io", donde "username" es tu nombre de usuario en GitHub. A continuación haces un clone de dicho repositorio y creas un nuevo proyecto con Jekyll. Esto traducido a código sería algo así:

	$ git clone https://github.com/username/username.github.io.git
	$ cd username.github.io
	$ jekyll new myblog
	$ git add -all
	$ git commit -m "My first version of Jekyll with GitHub Pages"
	$ git push

En 5 minutos ya puedes acceder a la ruta "http://username.github.io" y ver tu primera versión de Jekyll online. Fantabuloso :)

## Servidor en local

Para arrancar un servidor Jekyll en tu maquina, basta con lanzar la siguiente línea en tu terminal:

	$ jekyll server -w

La opción *-w* sirve para regenerar el site si realizas algún cambio.

Si todo es correcto, podrás acceder a [http://localhost:4000](http://localhost:4000) y ver Jekyll ejecutandose en local.

## Generadores

En Yeoman podrás encontrar varios generadores que implementan Jekyll, por ejemplo [generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb) es bastante completo. Te configura el proyecto con [Compass](http://compass-style.org/) y [HTML5 Boilerplate](http://html5boilerplate.com/).

Personalmente eche en falta un generador con la opción de Jekyll + [Foundation](http://foundation.zurb.com/), o en su defecto con [Bootstrap](http://getbootstrap.com). Pero no se puede tener todo en esta vida :)

## Look & feel

Finalmente opte por crear un proyecto desde cero con Foundation y [Bourbon](bourbon.io). 

El primero es el super framework front-end desarrollado por [Zurb](http://zurb.com/). 

Bourbon es una librería de mixins para [Sass](http://sass-lang.com/) muy completa y útil. Los mixins vienen a ser lo que entenderíamos por funciones en el mundo de la programación. Aceptan parámetros y devuelven un resultado ad-hoc. Por ejemplo estas líneas en Sass y Bourbon:

	.button {
		@include border-top-radius(5px);
		@include border-bottom-radius(5px);
		@include border-left-radius(5px);
		@include border-right-radius(5px);
		@include radial-gradient(#1e5799, #3dc3d1);
	}	

compiladas a CSS, serían:

	.button {
		border-top-left-radius:5px;
		border-top-right-radius:5px;
		border-bottom-left-radius:5px;
		border-bottom-right-radius:5px;
		border-top-left-radius:5px;
		border-bottom-left-radius:5px;
		border-top-right-radius:5px;
		border-bottom-right-radius:5px;
		background-color:#1e5799;
		background-image:
			-webkit-gradient(
				radial, center center, 0, center center, 460, 
				color-stop(0%, #1e5799), 
				color-stop(100%, #3dc3d1)
			);
		background-image:
			-webkit-radial-gradient(#1e5799, #3dc3d1);
			background-image: radial-gradient(#1e5799, #3dc3d1);
		}

Combinando con un poco criterio estético las opciones que proporciona Foundation a nivel de layout y Bourbon con sus mixins, podemos tener un look & feel más que aceptable en poco tiempo.

## Automatización

Últimamente utilizo Bower y Grunt para prácticamente cualquier proyecto. Por una parte me permiten automatizar procesos y además compartir esa misma configuración con el resto del equipo de desarrollo.

Existen varias formas de crear un proyecto con Foundation, en este caso opte por utilizar la opción "Foundation + Grunt + Libsass".

	$ foundation new myblog_with_foundation --libsass
	$ cd myblog_with_foundation
	$ grunt build

[Libsass](http://libsass.org/) es un compilador de Sass escrito en C/C++. Según los test es bastante más rápido y eficiente que el compilador original escrito en Ruby. Y es la opción
que utiliza [Zurb](http://zurb.com/).

La última línea (*$ grunt build*) se encarga de compilar los ficheros .sass a .css

Ahora sólo queda combinar ambos proyectos. Tuve que añadir Bourbon como [nueva dependecia a bower.json](https://github.com/brunogarcia/brunogarcia.github.io/blob/master/bower.json):

	"dependencies": {
		"foundation": "zurb/bower-foundation",
		"bourbon": "https://github.com/thoughtbot/bourbon.git"
	}

Y actualizar la [configuración de Grunt](https://github.com/brunogarcia/brunogarcia.github.io/blob/master/Gruntfile.js) a mi gusto, añadiendo unicamente los módulos de Foundation que me interesan, en este caso fastclick.js y foundation.topbar.js:

	concat: {   
		dist: {
			src: [
				'bower_components/jquery/dist/jquery.js',
				'bower_components/foundation/js/vendor/fastclick.js',
				'bower_components/foundation/js/foundation/foundation.js',
				'bower_components/foundation/js/foundation/foundation.topbar.js',
				'js/app.js'
			],
		dest: 'js/build/production.js',
		}
	}

Por otro lado en el fichero [app.scass](https://github.com/brunogarcia/brunogarcia.github.io/blob/master/scss/app.scss) sólo compilo los estilos que necesito:

	@import "foundation/components/grid";
	@import "foundation/components/tables";
	@import "foundation/components/top-bar";
	@import "foundation/components/visibility"; 
	@import "../bower_components/bourbon/app/assets/stylesheets/bourbon";
	@import "bruno"; 

Si te interesa conocer más sobre cómo integrar Jekyll con Foundation, date una vuelta por mi [repositorio en GitHub](https://github.com/brunogarcia/brunogarcia.github.io) y seguro que encontrarás ideas interesantes.