'use strict';

var reactify = require('grunt-react').browserify;

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        watch: {
            browserify: {
                files: ['src/*.js'],
                tasks: ['browserify']
            }
        },

        browserify: {
            options: {
                transform:  [ reactify ],
                browserifyOptions: {
                    debug: true
                }
            },
            app: {
                src:        'src/main.js',
                dest:       'build/main.js'
            }
        }
    });

    grunt.registerTask('default', ['browserify', 'watch']);
};