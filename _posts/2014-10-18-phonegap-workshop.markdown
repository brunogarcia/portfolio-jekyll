--- 
layout: post 
title: ! 'Introducción a Phonegap: webview, plugins y herramientas'
date: '2014-10-18T21:00:00+01:00' 
---

<big>Desde hace unos meses es costumbre en [Poun Studio](http://www.pounstudio.com) realizar talleres internos con la idea de transmitir conocimiento al resto del equipo. Este es mi segundo taller, y he hablado sobre [Phonegap](http://www.phonegap.com).</big>

Se ha hablado mucho de la calidad de rendimiento de una app mobile desarrollada con Phonegap. Hasta hace poco se podían escuchar frases del tipo "no se siente como una app nativa", "jamás igualará en velocidad a una app nativa", etc. Creo que en las primeras versiones esto era cierto, pero recordemos que ya estamos en la versión 3.6.3. Además los dispositivos móviles van mejorando día a día en rendimiento (sí, incluso los móviles chinos).

En todo caso, me gustaría comenzar este artículo con la siguiente viñeta, que la verdad dice mucho del estado actual del desarrollo móvil: no es un camino de rosas. Elegir entre una u otra tecnología puede depender de otros factores, como por ejemplo el económico. Si el presupuesto no te permite un equipo de desarrollo dual (uno para Android y otro para iOS) entonces Phonegap es la mejor opción. En un primer momento puedes prototipar un mínimo producto viable en poco tiempo y continuar el desarrollo hacia una app nativa en el futuro. Pienso que la tecnología debe servir a un propósito y no al revés.

Otro punto importante a recordar es que Phonegap no tiene una UI para móviles, para esto te tienes que apoyar en librerías como jQuery Mobile, Bootstrap o Foundation. Ni tampoco es un framework MVC, para eso ya existe Backbone, Angular o incluso Ionic. Phonegap sólo te proporciona un _puente_ entre el dispositivo móvil y tu aplicación web.

![The dilemna of mobile apps development](https://pbs.twimg.com/media/BvWeD2yCAAArJXb.jpg:large)

<small>Viñeta original en [Commit Strip](http://www.commitstrip.com/en/2014/08/18/the-dilemna-of-mobile-apps-development/)</small>

## Un poco de historia

Cuando comencé a investigar y realizar mis primeras pruebas con [Phonegap](http://www.phonegap.com), no tenía muy clara la relación con [Apache Cordova](http://cordova.apache.org). La verdad la historia es muy poco enrevesada, sobre todo porque en la propia documentación oficial se utilizan los dos nombres sin ningún tipo de distinción. Esto es algo que ellos mismos han admitido y esperan ir solucionando en el futuro. 

La empresa canadiense Nitobi Software fue la creadora original de Phonegap. En el 2009 ganó el [People's Choice Award](http://readwrite.com/2009/04/02/phone_gap_todays_peoples_choice_winner_at_launch_p) en la conferencia [Web 2.0 Expo](http://www.web2expo.com/webexsf2009). Desde entonces se hizo muy popular en la comunidad web y se comenzó a utilizar rápidamente. 

Recuerdo que [Mikel](https://twitter.com/ojoven) me lo comentó con mucho entusiasmo (él siempre se excita con cositas como esta) allá por el 2010, pensando que sería una buena opción para la app mobile de [Gzaas](http://gzaas.com). Eramos el target perfecto, aunque teníamos mucha experiencia en el desarrollo web, ninguno de los dos conocía nada de Android o iOS. Phonegap era un regalo del cielo. Podriamos crear una app mobile con tecnología que ya conocíamos: HTML, CSS y Javascript. Además ¿quién carallo quiere aprender [Objective-C](http://en.wikipedia.org/wiki/Objective-C)? (eso lo pensaba entonces y me reafirmo. Hola [Swift](https://developer.apple.com/swift/)).

Y parece que no éramos los únicos que vieron el gran potencial de esta herramienta. [Adobe compró Nitobi](http://www.adobe.com/aboutadobe/pressroom/pressreleases/201110/AdobeAcquiresNitobi.html)  en enero del 2011. Fue una buena jugada, por entonces Adobe estaba en horas bajas después de que [Apple _baneara_ Flash](http://en.wikipedia.org/wiki/Apple_and_Adobe_Flash_controversy) del iPhone/iPad. Me imagino a la plana mayor de Adobe corriendo como pollos sin cabeza, gritando _"¡Nos vamos a quedar fuera del negocio de internet como Microsoft!. ¡Flash ha muerto!. ¡Además ya nadie usa la mierda esa de Dreamweaver!"_.

Pero cuidado, el dinero no lo compra todo. En sus inicios Phonegap se creó como una herramienta de código abierto. Además de Nitobi, la comunidad web y otras empresas del sector (IBM, Oracle, etc.) habían colaborado en el desarrollo. Para no tener problemas legales Adobe cedió el código a la [Fundación Apache](http://www.apache.org/). Y de allí el nombre Apache Cordova.

Resumen: [Apache Cordova](http://cordova.apache.org) es un proyecto de software libre que sirve de core a Phonegap. Esto convierte a Phonegap es una distribución con servicios adicionales dentro del ecosistema Adobe, algo que obviamente Cordova por defecto no tiene ni tendrá.

Puedes encontrar más información al respecto en [PhoneGap, Cordova, and what’s in a name?](http://phonegap.com/2012/03/19/phonegap-cordova-and-what%E2%80%99s-in-a-name/). Y si sientes curiosidad, puedes ver el código fuente en [Github](https://github.com/phonegap).

## ¿Cómo funciona?

Phonegap permite conectar un dispositivo móvil con nuestra aplicación web mediante dos componentes principales: **Webview** y **Plugins**. Además Phonegap dispone de una serie de [eventos](http://docs.phonegap.com/en/3.5.0/cordova_events_events.md.html#Events) para facilitar la comunicación entre ambas partes.

### Webview

Un webview es básicamente una instancia del navegador del dispositivo móvil. 

Con la particularidad de no tener interfaz de usuario. O sea, sin acceso a los favoritos, barra de navegación y demás características de cualquier navegador. Sólo nos quedamos con los motores de renderizado y Javascript. Al ser un componente 100% nativo, tendremos acceso directo al dispositivo, y por lo tanto a la cámara, GPS, batería, etc.

Si revisamos la documentación de Android, veremos que existe una clase llamada [Webview](http://developer.android.com/reference/android/webkit/WebView.html), cuya descripción es _"A View that displays web pages. This class is the basis upon which you can roll your own web browser or simply display some online content within your Activity. It uses the WebKit rendering engine to display web pages and includes methods to navigate forward and backward through a history, zoom in and out, perform text searches and more."_

Y lo mismo con iOS, en este caso la clase se llama [UIWebView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/index.html): _"You use the UIWebView class to embed web content in your application. To do so, you simply create a UIWebView object, attach it to a window, and send it a request to load web content. You can also use this class to move back and forward in the history of webpages, and you can even set some web content properties programmatically."_

### Plugins

Un plugin de Phonegap es el puente entre nuestra aplicación web (cuyo contexto de ejecución es un WebView) y el dispositivo móvil. Se compone de dos partes: la **implementación nativa** (ya sea en Android, iOS, etc.) y la **implementación Javascript**.

Phonegap tiene alrededor de [20 plugins oficiales](http://docs.phonegap.com/en/3.5.0/cordova_plugins_pluginapis.md.html#Plugin%20APIs). Entre los que se encuentran los más básicos: bateria, cámara, lista de contactos, acceso al sistema de archivos, geolocalización, vibración.

Además la comunidad web ha ido desarrollando hasta el momento alrededor de 1400 plugins para prácticamente cualquier necesidad. [PlugReg](http://plugreg.com/) tiene una buena lista de plugins organizado por plataformas. Aqui podemos encontrar plugins como [barcode scanner](http://plugreg.com/plugin/wildabeast/BarcodeScanner), [push notifications](http://plugreg.com/plugin/phonegap-build/PushPlugin) o [social sharing](http://plugreg.com/plugin/EddyVerbruggen/SocialSharing-PhoneGap-Plugin).

Si le echamos un ojo al código fuente de un plugin, por ejemplo [Splash Screen](https://github.com/apache/cordova-plugin-splashscreen), veremos la siguiente estructura:

* **doc**: Documentación i18n.

* **src**: Implementación nativa. Encontraremos tantas carpetas como soporte tenga el plugin para un sistema operativo en concreto. En el caso de Splash Screen tiene soporte para Android, Blackberry 10, iOS, Tizen, Ubuntu Touch y Window Phone. Si abrimos la clase [SplashScreen.java](https://github.com/apache/cordova-plugin-splashscreen/blob/master/src/android/SplashScreen.java), veremos un único método llamado _execute_ que se encargará de realizar la tarea asignada, en este caso mostrar u ocultar el splash screen.

* **tests**: Tests unitarios para confirmar que todo funciona como debe funcionar.

* **www**: Implementación Javascript. Estas funciones son las que usará nuestra aplicación web para comunicarse con el dispositivo móvil. Si abrimos [splashscreen.js](https://github.com/apache/cordova-plugin-splashscreen/blob/master/www/splashscreen.js) veremos las funciones show() y hide().

Podéis encontrar más información al respecto en [Plugin Development Guide](http://docs.phonegap.com/en/3.5.0/guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide).

## Instalar Phonegap y crear una demo

Antes de ponernos a trabajar con Phonegap, es necesario tener instalado [Node](http://nodejs.org/download/). Seguidamente basta con lanzar la siguiente línea en tu terminal:

	$ sudo npm install -g phonegap

Node Package Manager o _npm_, tal como su nombre indica es el gestor de paquetes de Node. La opción _"-g"_ instalará Phonegap de forma global.

Finalizado este segundo paso, ya podremos crear nuestra primera app mobile con Phonegap.

	$ phonegap create my_app_folder com.my_domain.app MyAppName

Si accedemos a "_my app folder_" veremos una carpeta llamada "_www_". Es allí donde residirá nuestra aplicación web. Recuerda realizar las llamadas correspondientes a _cordova.js_ e _index.js_. En esta última se encuentran los _bind event listeners_. Por defecto viene "_bindiado_" [deviceready](http://docs.phonegap.com/en/3.5.0/cordova_events_events.md.html#deviceready).

    document.addEventListener('deviceready', this.onDeviceReady, false);

El objetivo de este evento es informarnos de la correcta carga de la API de Cordova en el dispositivo móvil. Esto es así porque necesitamos que Cordova este debidamente cargado para que nuestra aplicación web pueda realizar las llamadas necesarias. 

Si has llegado hasta aquí, supongo que te estarás preguntando "bueno, ¿y cómo hago para visualizar esta demo en mi movil?". La respuesta es (aún) no puedes. Pero tienes dos caminos: utilizar una herramienta de compilación en la nube o instalar y configurar el entorno de [Android](http://developer.android.com/sdk/installing/index.html?pkg=adt). Vamos por la primera.

## Herramientas

Tal como comentaba unas líneas más arriba, Phonegap dispone de una serie de herramientas para facilitarnos el trabajo a los desarrolladores. He seleccionado tres de ellas, dos oficiales (Build & Developer App) y otra de código abierto (Weinre).

### Build

[Phonegap Build](https://build.phonegap.com/) es un servicio freemium que te permite **compilar una APK/IPA directamente en la nube**. La opción más básica te permite compilar un máximo de una app mobile, y por 10$ al mes podrás compilar hasta 25 aplicaciones.

En [Poun Studio](http://www.pounstudio.com) tenemos una cuenta de pago y estamos bastante contentos con el servicio. Es verdad que aún le falta pulir algunos aspectos de la interfaz de usuario, pero hace lo que tiene que hacer eficiente y rápidamente. Por ejemplo compilar una app mobile Android e iOS tarda una media de 30 segundos. Y sobre todo te ahorras el problema de instalar y configurar cada SDK.

Puedes encontrar más información en [Compilando una App en la nube con Phonegap Build](http://blog.garciaechegaray.com/2014/07/07/compilando-una-app-en-la-nube-con-phonegap-build.html).

### Developer App

[Phonegap Developer App](http://app.phonegap.com/) es otra herramienta oficial de Phonegap que te permite **arrancar un servidor local con tu aplicación web** y acceder a dicho servicio desde cualquier dispositivo móvil. 

La opción más útil es que cualquier cambio en local se podrá visualizar **instantáneamente** en tu móvil. Esto mejora el flujo de trabajo ya que permite realizar pruebas sin la necesidad de compilar la aplicación.

Para arrancar el servidor local, es necesario lanzar este comando desde la ubicación actual de tu aplicación Phonegap:

	$ phonegap serve

Seguidamente deberás instalar la app mobile creada expresamente para conectarse a este servicio. En el caso de un dispositivo Android, sería [Google Play - Phonegap Developer](https://play.google.com/store/apps/details?id=com.adobe.phonegap.app). Ya solo queda escribir la IP de tu maquina, seguido del puerto asignado y darle al botón de conectar.

Uno de los defectos de esta herramienta es no poder acceder a la consola de desarrollo. Esto es un problema porque muchas veces no sabrás por donde vienen los tiros y el tiempo de debugear se alarga. Felizmente existe otra herramienta que soluciona este problema.

### Weinre

[Weinre](http://people.apache.org/~pmuellr/weinre-docs/latest/) son la siglas de Web Inspector Remote. Básicamente es un **debugger remoto**, especialmente diseñado para trabajar con dispositivos móviles. 
Si aún no lo tenéis claro, aquí puedes ver un [video de 5 minutos](https://www.youtube.com/watch?v=4nL6xey13fE) explicando el funcionamiento paso a paso.

Para instalar Weinre es necesario lanzar el siguiente comando:

	$ sudo npm -g install weinre

Para arrancar el servicio:

	$ weinre --boundHost your_IP --httpPort 8082

Dos cosas importantes: debemos usar nuestra IP para que el dispositivo móvil pueda acceder. Obviamente el dispositivo móvil no podrá acceder si lo configuras como _localhost_. Para evitar conflictos (con un servicio WAMP por ejemplo) utiliza un puerto alternativo, por ejemplo 8082.

Y el último paso consiste en añadir un enlace al script de Weiner en tu aplicación web:

	<script src=”http://your_IP:8082/target/target-script-min.js#anonymous”></script>

Si todo ha salido bien, podrás acceder a la consola de desarrollo para visualizar los posibles errores o incluso echarle un ojo al código fuente de tu aplicación web.