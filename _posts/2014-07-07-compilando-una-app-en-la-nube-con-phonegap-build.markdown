--- 
layout: post 
title: ! 'Compilando una App en la nube con Phonegap Build'
date: '2014-07-07T18:55:00+01:00' 
---

***

<big>[Phonegap Build](https://build.phonegap.com/) es un servicio freemium que te permite compilar una APK/IPA directamente en la nube. 
Estos días lo he estado probando para un cliente y me ha gustado bastante lo sencillo que es compilar una app mobile sin necesidad de bajar y configurar los entornos de desarrollo necesarios para cada tecnología. </big>

***

Por lo visto Phonegap está poniendo mucho empeño en facilitarnos la vida a los desarrolladores. Esta misma semana ha sacado una herramienta que nos permite [levantar un servidor en local y visualizar los cambios automáticamente](http://app.phonegap.com/) en cualquier dispositivo.

Montar todo el entorno de Android para que funcione correctamente con Phonegap no es trivial. Al menos en Ubuntu es un proceso que toma un buen rato. Ya no solo consiste en instalar la [SDK de Android](http://developer.android.com/sdk/index.html) si no también la última [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html?ssSourceSiteId=otnjp) junto con [ANT](http://ant.apache.org/) y configurar los [PATH](http://stackoverflow.com/questions/20323787/cordova-platform-add-android-not-working-while-listing-android-targets/21142421#21142421) correspondientes. En el caso de Apple es todavía más complejo, si no tienes una maquina corriendo _Mac OS X_ es imposible.

Por suerte Phonegap ofrece este servicio (gratis para una sola app) junto con una [amplia documentación](http://docs.build.phonegap.com/en_US/). Personalmente me preocupaba bastante el tema de personalizar los iconos, splash screen y plugins. Pero creando un archivo _config.xml_ dentro de tu proyecto todo funciona como la seda.

Por ejemplo para decirle con que iconos debe trabajar la app:

	<--Android icons-->
    <icon gap:density="ldpi" gap:platform="android" src="res/screen/android/icon-ldpi.png" />
    <icon gap:density="mdpi" gap:platform="android" src="res/screen/android/icon-mdpi.png" />
    <icon gap:density="hdpi" gap:platform="android" src="res/screen/android/icon-hdpi.png" />
    <icon gap:density="xhdpi" gap:platform="android" src="res/screen/android/icon-xhdpi.png" />
 
 	<--iOS icons-->
    <icon gap:platform="ios" height="60" src="res/screen/ios/icon-60.png" width="60" />
    <icon gap:platform="ios" height="120" src="res/screen/ios/icon-60@2x.png" width="120" />
    <icon gap:platform="ios" height="76" src="res/screen/ios/icon-76.png" width="76" />
    <icon gap:platform="ios" height="152" src="res/screen/ios/icon-76@2x.png" width="152" />

Y lo mismo para las splash screen:

	<--Android splash-->
    <gap:splash gap:density="ldpi" gap:platform="android" src="res/screen/android/screen-ldpi-portrait.png" />
    <gap:splash gap:density="mdpi" gap:platform="android" src="res/screen/android/screen-mdpi-portrait.png" />
    <gap:splash gap:density="hdpi" gap:platform="android" src="res/screen/android/screen-hdpi-portrait.png" />
    <gap:splash gap:density="xhdpi" gap:platform="android" src="res/screen/android/screen-xhdpi-portrait.png" />
 
 	<--iOS splash-->
    <gap:splash gap:platform="ios" height="480" src="res/screen/ios/screen-iphone-portrait.png" width="320" />
    <gap:splash gap:platform="ios" height="960" src="res/screen/ios/screen-iphone-portrait-2x.png" width="640" />
    <gap:splash gap:platform="ios" height="1024" src="res/screen/ios/screen-ipad-portrait.png" width="768" />
    <gap:splash gap:platform="ios" height="768" src="res/screen/ios/screen-ipad-landscape.png" width="1024" />    

Puedes incluso decidir en que tecnologías deseas realizar la compilación:

	<gap:platform name="ios" />
    <gap:platform name="android" />

[Phonegap Build](https://build.phonegap.com/) tambien permite añadir plugins en la configuración. Por ejemplo si necesitamos el [plugin de geolocalización](https://github.com/apache/cordova-plugin-geolocation) tenemos que añadir la siguiente línea:

	<gap:plugin name="org.apache.cordova.geolocation" version="0.3.7" />    

Os dejo un _gist_ con toda la configuración necesaria:

<script src="https://gist.github.com/brunogarcia/e2d7844dd2af6ff1e459.js"></script>