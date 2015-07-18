module.exports = function(grunt, options) {
    'use strict';

    return {
        sources: {
            files: ['src/**/*.js'],
            tasks: ['jshint', 'ngAnnotate', 'uglify']
        },
        templateSources: {
            files: ['src/**/*.html'],
            tasks: ['ngtemplates', 'uglify']
        }
    };     
};