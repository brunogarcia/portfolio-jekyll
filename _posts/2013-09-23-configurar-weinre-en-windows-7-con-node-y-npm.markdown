--- 
layout: post 
title: Configurar Weinre en Windows 7 con Node y npm
date: '2013-09-23T17:08:00+02:00'
tumblr\_url: http://blog.garciaechegaray.com/post/62063898003/configurar-weinre-en-windows-7-con-node-y-npm
---
<big>[Weinre](http://people.apache.org/~pmuellr/weinre/) es una herramienta que nos permite debugear un servicio web desde
cualquier dispositivo móvil.</big>

Por cuestiones profesionales, en los últimos meses mi entorno de trabajo
ha sido Windows 7. Necesitamos debugear y testear constantemente en
entornos móviles y los drivers para estos dispositivos solo suelen tener
versiones para Windows.

Dicho esto, uno de los problemas de trabajar con Windows es que muchos
tutoriales para configurar cualquier herramienta open source están
enfocado para usuarios de Linux/Mac. 

No es la primer vez que me pasa (ni será la última), así que explico
brevemente cómo configurar
[Weinre](http://people.apache.org/~pmuellr/weinre/) en Windows 7 a
través de Node.js y npm. 


Venga, manos a la obra:

**1.-** Instalar [Node](http://nodejs.org/)

**2.-**
Instalar [Weinre](http://people.apache.org/~pmuellr/weinre/) utilizando [npm](https://npmjs.org/) (package
manager que se instala junto con Node). Abrir un cmd y escribir:

> *npm -g install weinre *

Nota: “-g” lo instalará globalmente en una carpeta
oculta: 

> *C**:\\Users\\Usuario\\AppData\\Roaming\\npm*

**3.-** Arrancar el
servicio [Weinre](http://people.apache.org/~pmuellr/weinre/) desde cmd:

> *cd C:\\Users\\Usuario\\AppData\\Roaming\\npm*
> *weinre.cmd —boundHost 192.168.0.1 —httpPort 8081*

Notas: 

-   Debemos usar nuestra IP para que el dispositivo móvil pueda acceder.
    Obviamente no funciona si lo configuras como localhost.
-   Si no conoces tu IP, abre un cmd y teclea *ipconfig.*
-   Para evitar conflictos (con un servicio WAMP por ejemplo) utiliza un
    puerto alternativo, en este caso 8081.

También os podéis crear un archivo batch para automatizar esta tarea:

> *@echo off*\
> *echo Starting Weinre Server*\
> *cd C:\\Users\\Usuario\\AppData\\Roaming\\npm*\
> *weinre.cmd —boundHost 192.168.0.1 —httpPort 8081*\
> *pause*

**4.-** Incluir el script de Weinre en nuestra app:

> *\<script
> src=”http://192.168.0.1:8081/target/target-script-min.js\#anonymous”\>\</script\>*

**5.-** Acceder al servicio desde un browser:

> [http://192.168.0.1:8081/client/\#anonymous](http://192.168.0.1:8081/client/#anonymous)\

Y con esto ya podéis testear el correcto funcionamiento de vuestra
aplicación en cualquier dispositivo móvil.
