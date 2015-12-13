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
                    'jquery.js': 'jquery/dist/jquery.js',
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
