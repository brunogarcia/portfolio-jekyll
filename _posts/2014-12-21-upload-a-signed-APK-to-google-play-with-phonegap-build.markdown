---
layout: post
title: Upload a signed APK to Google Play with Phonegap Build
date: '2014-12-21T18:56:30+02:00'
grid: normal
color: color-7
---

## These are the required steps for upload a signed APK to Google Play with the help of Phonegap Build

1.- Generate a private key using the management utility [keytool](http://docs.oracle.com/javase/7/docs/technotes/tools/solaris/keytool.html)

{% highlight sh %}
$ keytool -genkey -v -keystore NAME_YOUR_FILE.keystore -alias YOUR_ALIAS -keyalg RSA -keysize 2048 -validity 10000
{% endhighlight %}

[More info in Android Developer Guide](http://developer.android.com/tools/publishing/app-signing.html#signing-manually)

2.- Create a new "Signing Key" in [Phonegap Build](http://build.phonegap.com). Go to "Account/Signing Keys/Android" and upload the keystore file.

[More info Phonegap Build Guide](http://docs.build.phonegap.com/en_US/3.3.0/signing_signing-android.md.html)

3.- Compile the Android app with the new key. You'll need to put the password that you've given in step 1.

4.- Download the signed APK to your local machine.

5.- Go to [Google Play Publish](https://play.google.com/apps/publish/) and upload the signed APK. Remember update the special property _versionCode_ in your config.xml.

[More info Phonegap Build Guide](http://docs.build.phonegap.com/en_US/3.3.0/configuring_basics.md.html#The%20Basics)
