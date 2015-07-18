module.exports = function(grunt, options) {
    return {
        sources: {
            files: 'src/**/*.js',
            tasks: ['jshint', 'ngAnnotate', 'concat', 'uglify']
        }
        ,
        templateSources: {
            files: ['src/**/*.html'],
            tasks: ['ngtemplates', 'concat', 'uglify']
        }
    };     
};