# DEPRECATED

This is the old repository of my blog.

I moved to GatsbyJS. Check out this new one https://github.com/brunogarcia/portfolio

## Tools

* [Jekyll](http://jekyllrb.com): A simple, blog-aware, static site generator perfect for personal, project, or organization sites.

* [Refills](http://refills.bourbon.io/): Components and patterns built with Bourbon and Neat.

* [Sass](sass-lang.com): CSS with superpowers.

* [Bower](http://bower.io/): A package manager for the web.

* [Bower Copy](https://github.com/timmywil/grunt-bowercopy): Scrupulously manage file locations for bower dependencies.

* [Grunt](http://gruntjs.com/): The JavaScript task runner.

* [Grunt Goggle Fonts](https://github.com/Mika-/grunt-google-fonts): Download Google Fonts in Grunt jobs.

* [Uglify](https://github.com/gruntjs/grunt-contrib-uglify): Minify JavaScript files.

* [Minify SVG](https://github.com/sindresorhus/grunt-svgmin): Minify SVG using SVGO.

* [Minify CSS](https://github.com/gruntjs/grunt-contrib-cssmin): Compress CSS files.

* [Image Min](https://github.com/gruntjs/grunt-contrib-imagemin): Minify PNG and JPEG images.

* [JSHint](https://github.com/gruntjs/grunt-contrib-jshint): Validate JavaScript files.

***

## Project dependencies

### Node with NVM

`$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash`

`$ nvm install node`

`$ nvm ls`

`$ nvm alias default [NODE_VERSION]`

### Ruby with RVM

Before install RVM your terminal must [run command as a login shell](https://rvm.io/integration/gnome-terminal)

`$ command curl -sSL https://rvm.io/mpapis.asc | gpg --import -`

`$ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3`

`$ curl -L https://get.rvm.io | bash -s stable --autolibs=enabled --ruby`

`$ rvm list`

`$ rvm use --default [RUBY_VERSION]`

### Jekyll, sitemap and update Sass

`$ gem install jekyll`

`$ gem update sass`

`$ gem install jekyll-sitemap`

### Bower and Grunt CLI

`$ npm install -g bower`

`$ npm install -g grunt-cli`

### Install packages

`$ bower install`

`$ npm install`

### Init tasks ('bowercopy', 'googlefonts', 'jshint', 'uglify')

`$ grunt default`

***

## Launch project

Run Jekyll server in watch mode

`$ jekyll s -w`

Run Jekyll server in watch mode and show drafts

`$ jekyll s -w --drafts`
