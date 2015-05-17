---
layout: post
title: ! 'Vagrant: arrancar, crear y publicar un box'
date: '2015-05-17T11:47:30+02:00'
---

***

<big>En [Poun Studio](http://www.pounstudio.com) vamos a comenzar varios proyectos con [Symfony](http://www.symfony.com). Hemos decidido empezar con buen pie
creando un entorno virtualizado con [Vagrant](https://www.vagrantup.com/) que nos pueda servir para varios proyectos y nos ahorre el trabajo de configurar cada entorno en distintas maquinas. Esto nos servirá para agilizar el flujo de trabajo entre el equipo de desarrollo y los diseñadores. Queremos que todos puedan trabajar y realizar pruebas en un mismo entorno sin preocuparse de engorros procesos de configuración</big>

En nuestro caso, hemos utilizado como base el box creado por [Scotch.io](https://box.scotch.io/), que ya viene con un entorno <abbr title="Linux, Apache, MySQL, Linux">LAMP</abbr> instalado.
A este box le hemos añadido [Symfony](http://www.symfony.com), seguidamente hemos clonado un proyecto desde nuestro repositorio privado en [Bitbucket](https://bitbucket.org/), hemos creado la BD y por último hemos configurado los permisos necesarios para que funcione todo correctamente.

Una vez finalizado este proceso hemos empaquetado un nuevo box personalizado a nuestras necesidades. A partir de este punto nos hemos topado con un pequeño problema: ¿y ahora que hacemos con este box de 600 mb? ¿lo subimos al repositorio? ¿utilizamos dropbox para compartirlo con el resto del equipo?.

Por suerte hemos descubierto [Atlas](https://atlas.hashicorp.com/), un servicio que te permite compartir y actualizar un box privado. Por si esto fuera poco, con Atlas puedes hacer un [deploy](https://atlas.hashicorp.com/features/deploy) en tu servidor virtual y [monitorizar](https://atlas.hashicorp.com/features/maintain) todo el proceso. Por ahora es completamente gratuito, pero funciona tan bien que seguramente dentro de poco tendrás que pagar por usarlo. Atlas es un servicio creado por [Hashicorp](https://www.hashicorp.com/), los mismo que idearon Vagrant.

***

## Instalar el entorno

Para arrancar un box en local con Vagrant es necesario tener instalado [Vagrant](https://www.vagrantup.com/downloads.html) y [Virtualbox](https://www.virtualbox.org/wiki/Downloads).

## Comando basicos de Vagrant

Arrancar vagrant

    $ vagrant up

Suspender vagrant

    $ vagrant halt

Acceder por ssh

    $ vagrant ssh

## Arrancar un box privado

_Si quieres utilizar un box privado alojado en Atlas_

Primero debes de darte de alta en [Atlas](https://atlas.hashicorp.com/). Seguidamente debes pedir permisos de View, Write o Admin al creador del box. Además el dueño del box debe publicarlo para que sea visible.

Crear una carpeta para el proyecto

    $ mkdir mi_proyecto && cd mi_proyecto

Hacer login en local con tu cuenta de [Atlas](https://atlas.hashicorp.com/)

    $ vagrant login

Instalar el box privado

    $ vagrant init usuario_admin_atlas/nombre_del_box

A partir de aqui ya puedes arrancar vagrant y acceder por ssh

Si el Admin del box realiza cambios puedes actualizarte directamente:

    $ vagrant box update

## Crear un nuevo box

_Solo si quieres crear un box para un nuevo proyecto_

Utilizar un box con una configuracion previa, por ejemplo [Scotch.io Box](https://box.scotch.io/) ya tiene instalado un entorno LAMP

Clonar el box

    $ git clone https://github.com/scotch-io/scotch-box.git box-base-para-nuevo-proyecto

Arrancar vagrant

    $ vagrant up

Acceder por ssh

    $ vagrant ssh

Realizar las configuraciones necesarias en el box base. Por ejemplo: instalar Symfony o clonar el repositorio del proyecto correspondiente, crear la BD, etc. Configurar el entorno de trabajo: permisos, enlaces simbolicos, etc.

Testear el nuevo entorno

    http://192.168.33.10

### Preparar el box

Estos pasos vienen documentados en el artículo [How to Create a Vagrant Base Box from an Existing One](https://scotch.io/tutorials/how-to-create-a-vagrant-base-box-from-an-existing-one)

    $ sudo apt-get clean

    $ sudo dd if=/dev/zero of=/EMPTY bs=1M

    $ sudo rm -f /EMPTY

    $ cat /dev/null > ~/.bash_history && history -c && exit

Antes de seguir con los siguientes pasos debes salir del entorno virtual y suspender Vagrant

    $ exit
    $ vagrant suspend

Ahora ya puedes empaquetar el nuevo box

    $ vagrant package --output nuevo_proyecto.box

Este nuevo box ya lo podemos compartir a través de [Atlas](https://atlas.hashicorp.com/)

## Compartir un box privado

_Solo si quieres compartir un box nuevo_

Darse de alta en [Atlas](https://atlas.hashicorp.com/)

Subir el nuevo box. Debes dar permisos de View, Write o Admin al resto del equipo involucrado. Además debes publicar el box.

Si realizas cambios sobre el box, puedes publicarlos directamente en Atlas

    $ vagrant box update

