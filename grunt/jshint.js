module.exports = function(grunt) {
    return {
        dev: {
            src: ['src/**/*.js']
        },
        options: {
            jshintrc: true,
            ignores: ['src/components/**/*.js']
        }
    };
};