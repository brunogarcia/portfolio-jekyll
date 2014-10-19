--- 
layout: post 
title: ! 'Phonegap Workshop'
date: '2014-10-18T21:00:00+01:00' 
---

<big>Desde hace unos meses es costumbre en [Poun Studio](http://www.pounstudio.com) dar talleres internos con la idea de transmitir conocimiento al resto del equipo. Este es mi segundo taller, y he hablado sobre [Phonegap](http://www.phonegap.com).</big>

![The dilemna of mobile apps development](https://pbs.twimg.com/media/BvWeD2yCAAArJXb.jpg:large)

<small>Vía [@spietrek](https://twitter.com/spietrek/status/501531865879412738)</small>

## Un poco de historia

Cuando comence a investigar y realizar mis primeras pruebas con [Phonegap](http://www.phonegap.com), no tenia muy clara la relación con [Apache Cordova](http://cordova.apache.org). La verdad la historia es muy poco enrevesada, sobre todo por que en la propia documentación oficial se utiliza los dos nombres sin ningún tipo de distinción. Esto es algo que ellos mismos han admitido y esperan ir solucionando en el futuro. 

La empresa canadience Nitobi Software fue la creadora original de Phonegap. En el 2009 ganó el [People's Choice Award](http://readwrite.com/2009/04/02/phone_gap_todays_peoples_choice_winner_at_launch_p) en la conferencia [Web 2.0 Expo](http://www.web2expo.com/webexsf2009). Desde entonces se hizo muy popular en la comunidad web y se comenzó a utilizar rapidamente. 

Recuerdo que [Mikel](https://twitter.com/ojoven) me lo comentó con mucho estusiasmo (él siempre se excita con cositas como esta) allá por el 2010, pensando que sería una buena opción para la aplicación móvil de [Gzaas](http://gzaas.com). Eramos el target perfecto, aunque teníamos mucha experiencia en el desarrollo web, pero ninguno de los dos conocía nada de Android o iOS. Phonegap era un regalo del cielo. Podriamos crear una app con tecnología web que ya conociamos: HTML, CSS y Javascript. Además ¿quién carallo quiere aprender [Objective-C](http://en.wikipedia.org/wiki/Objective-C)?.

Y parece que no eramos los unicos que vieron el gran potencial de esta herramienta. [Adobe compró Nitobi](http://www.adobe.com/aboutadobe/pressroom/pressreleases/201110/AdobeAcquiresNitobi.html)  en enero del 2011. Fue una buena jugada, ya que por entonces Adobe estaba en horas bajas despues de que [Apple _baneara_ Flash](http://en.wikipedia.org/wiki/Apple_and_Adobe_Flash_controversy) del iPhone/iPad. Me imagino a la plana mayor de Adobe corriendo como pollos sin cabeza, gritando _"¡Nos vamos a quedar fuera del negocio de internet como Microsoft!. ¡Flash ha muerto!. ¡Además ya nadie usa la mierda esa de Dreamweaver!"_.

Pero un momento, el dinero no lo puede comprar todo. Phonegap se creó como una herramienta de código abierto. Además de Nitobi, la comunidad web y otras empresas del sector (IBM, Oracle, etc.) habian colaborado en el desarrollo. Para no tener problemas legales Adobe cedio el código a [Apache Software Foundation](http://www.apache.org/). Y de allí el nombre Apache Cordova.

Resumen: [Apache Cordova](http://cordova.apache.org) es un proyecto de software libre que sirve de core a Phonegap. Esto convierte a Phonegap es una distribución con servicios adicionales dentro del ecosistema Adobe, algo que obviamente Cordova por defecto no tiene ni tendrá.

Puedes encontrar más información al respecto en [PhoneGap, Cordova, and what’s in a name?](http://phonegap.com/2012/03/19/phonegap-cordova-and-what%E2%80%99s-in-a-name/). Y también ver el código fuente en [Github](https://github.com/phonegap).

## ¿Cómo funciona?

Phonegap permite conectar un dispositivo móvil con nuestra aplicación web mediante dos componentes principales: Webview y Plugins. Además Phonegap dispone de una serie de [eventos](http://docs.phonegap.com/en/3.5.0/cordova_events_events.md.html#Events) para facilitar la comunicación entre ambas partes.

### Webview

Un webview es básicamente una instancia del navegador nativo del dispositivo móvil. 

Con la particularidad de no tener interfaz de usuario. O sea, sin acceso a los favoritos, barra de navegación y demás características de cualquier navegador. Sólo nos quedamos con el motor de renderizado y el motor Javascript. Al ser un componente nativo, tendremos acceso directo al dispositivo, y por lo tanto a la cámara, GPS, bateria, etc.

Si revisamos la documentación de Android, veremos que existe una clase llamada [Webview](http://developer.android.com/reference/android/webkit/WebView.html), cuya descripción es _"A View that displays web pages. This class is the basis upon which you can roll your own web browser or simply display some online content within your Activity. It uses the WebKit rendering engine to display web pages and includes methods to navigate forward and backward through a history, zoom in and out, perform text searches and more."_

Y lo mismo con iOS, en este caso la clase se llama [UIWebView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/index.html): _"You use the UIWebView class to embed web content in your application. To do so, you simply create a UIWebView object, attach it to a window, and send it a request to load web content. You can also use this class to move back and forward in the history of webpages, and you can even set some web content properties programmatically."_

### Plugins

Un plugin de Phonegap es el puente entre nuestra aplicación web (cuyo contexto de ejecución es un WebView) y la plataforma nativa. Se compone de dos partes: la implementación nativa (ya sea en Android, iOS, etc.) y la implementación Javascript.

Phonegap tiene alrededor de [20 plugins oficiales](http://docs.phonegap.com/en/3.5.0/cordova_plugins_pluginapis.md.html#Plugin%20APIs). Entre los que se encuentran los más básicos: bateria, cámara, lista de contactos, acceso al sistema de archivos, geolocalización, vibración.

Además la comunidad web ha desarrollado alrededor de 1400 plugins para cualquier necesidad. [PlugReg](http://plugreg.com/) tiene una buena lista de plugins organizado por plataformas. Aqui podemos encontrar plugins como [barcode scanner](http://plugreg.com/plugin/wildabeast/BarcodeScanner), [push notifications](http://plugreg.com/plugin/phonegap-build/PushPlugin) o [social sharing](http://plugreg.com/plugin/EddyVerbruggen/SocialSharing-PhoneGap-Plugin).

Si le echamos un oj ojal código fuente de un plugin, por ejemplo [Splash Screen](https://github.com/apache/cordova-plugin-splashscreen), veremos que la estructura es la siguiente:

* **doc**: Documentación i18n.

* **src**: Implementación nativa. Encontraremos tantas carpetas como soporte tenga el plugin para un sistema en concreto. En el caso de Splash Screen tiene soporte para Android, Blackberry 10, iOS, Tizen, Ubuntu Touch y Window Phone. Si abrimos la clase [SplashScreen.java](https://github.com/apache/cordova-plugin-splashscreen/blob/master/src/android/SplashScreen.java), veremos un único método llamado _execute_ que se encargara de realizar la tarea asignada, en este caso mostrar u ocultar el splash screen.

* **tests**: Tests unitarios para confirmar que todo funciona como debe funcionar.

* **www**: Implementación Javascript. Estas funciones son las que usará nuestra aplicación web para comunicarse con el dispositivo móvil. Si abrimos [splashscreen.js](https://github.com/apache/cordova-plugin-splashscreen/blob/master/www/splashscreen.js) veremos las funciones show() y hide().

Podéis encontrar más información al respecto en [Plugin Development Guide](http://docs.phonegap.com/en/3.5.0/guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide).

## Instalar Phonegap y crear una demo

Para poder instalar Phonegap, es necesario tener instalado [Node](http://nodejs.org/download/) en tu equipo. Una vez echo esto, basta con lanzar la siguiente línea en tu terminal.

	$ sudo npm install -g phonegap

NPM (Node Package Manager), tal como su nombre indica es el gestor de paquetes de Node. La opción _"-g"_ instalará Phonegap de forma global.

Finalizado este segundo paso, ya podremos crear nuestra primera app móvil con Phonegap.

	$ phonegap create my_app_folder com.my_domain.app MyAppName

Si accedemos a "_my app folder_" veremos una carpeta llamada "_www_". Es allí donde tendremos que copiar nuestra aplicación web. Recordando de cargar las librerias _cordova.js_ e _index.js_. 

En esta última se encuentran los _bind event listeners_. Por defecto viene "bindiado" [deviceready](http://docs.phonegap.com/en/3.5.0/cordova_events_events.md.html#deviceready), cuya función es informarnos de la correcta carga de la API de Cordova en el dispositivo móvil.

    document.addEventListener('deviceready', this.onDeviceReady, false);

Esto es así por que necesitamos que Cordova este debidamente cargado para que nuestra aplicación web pueda realizar las llamadas necesarias. 

## Herramientas

### Build

### App

### Weinre

## Instalar Android SDK