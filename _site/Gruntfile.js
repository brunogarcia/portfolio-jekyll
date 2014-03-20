module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
          options: {
            includePaths: ['bower_components/foundation/scss']
          },
          dist: {
            options: {
              outputStyle: 'compressed'
            },
            files: {
              'css/app.css': 'scss/app.scss'
            }        
          }
        },

        concat: {   
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/foundation/js/foundation.js',
                    'js/app.js'                    
                ],
                dest: 'js/build/production.js',
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                }
            },
             
            sass: {
              files: 'scss/**/*.scss',
              tasks: ['sass']
            }            
        }                

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('build', ['sass', 'concat', 'uglify', 'watch']);
    grunt.registerTask('default', ['build']);

};