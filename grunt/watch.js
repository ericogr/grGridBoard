module.exports = function(grunt, options) {
    'use strict';

    return {
        grGridBoard: {
            files: ['src/**/*.js', 'src/**/*.html'],
            tasks: ['jshint', 'ngtemplates', 'ngAnnotate', 'uglify']
        }
    };     
};