module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        /*
            Uglify
            Minify files with UglifyJS
            https://github.com/gruntjs/grunt-contrib-uglify
        */
        'uglify': {
            my_target: {
                files: {
                    'js/main.min.js':
                    [
                        'js/jquery.js',
                        'js/main.js'
                    ]
                }
            }
        },

        /*
          Image Min
          Minify PNG and JPEG images
          https://github.com/gruntjs/grunt-contrib-imagemin
        */
        imagemin: {
          png: {
            options: {
              optimizationLevel: 7
            },
            files: [
              {
                // Set to true to enable the following options…
                expand: true,
                // cwd is 'current working directory'
                cwd: 'images',
                src: ['**/*.png'],
                // Could also match cwd line above. i.e. project-directory/img/
                dest: 'images/dist',
                ext: '.png'
              }
            ]
          },
          jpg: {
            options: {
              progressive: true
            },
            files: [
              {
                // Set to true to enable the following options…
                expand: true,
                // cwd is 'current working directory'
                cwd: 'images',
                src: ['**/*.jpg'],
                // Could also match cwd. i.e. project-directory/img/
                dest: 'images/dist',
                ext: '.jpg'
              }
            ]
          }
        },

        /*
          Download Google Fonts in Grunt jobs
          https://github.com/Mika-/grunt-google-fonts
        */

        'googlefonts': {
            build: {
              options: {
                fontPath: 'fonts/',
                cssFile: '_sass/_fonts.scss',
                formats: {
                  eot: true,
                  ttf: true,
                  woff: true,
                  woff2: true,
                  svg: true
                },
                fonts: [
                  {
                    family: 'Questrial',
                    styles: [
                      400
                    ]
                  },
                  {
                    family: 'Sanchez',
                    styles: [
                      400,
                      '400italic'
                    ]
                  },                ]
              }
            }
          },

        /*
            Bower copy
            Scrupulously manage file locations for bower dependencies.
            https://www.npmjs.com/package/grunt-bowercopy
        */
        'bowercopy': {
            // Javascript assets
            libs: {
                options: {
                    destPrefix: 'js'
                },
                files: {
                    'zepto.js': 'zepto/zepto.js',
                }
            },
            // Sass assets
            sass: {
                options: {
                    destPrefix: '_sass'
                },
                files: {
                    'bourbon': 'bourbon/app/assets/stylesheets',
                    'neat': 'neat/app/assets/stylesheets',
                }
            },
        },

        /*
            JSHint
            Validate files with JSHint
            https://github.com/gruntjs/grunt-contrib-jshint
        */
        'jshint': {
            options: {
                jshintrc: true
            },
            all: ['Gruntfile.js', 'js/main.js']
        }

    });

    // Distribution
    grunt.registerTask('default', ['bowercopy', 'googlefonts', 'jshint', 'uglify']);


};
