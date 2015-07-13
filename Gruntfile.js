module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
	    	files: {
	    		cwd: 'src',
	    		src: ['gr-grid-board.js'],
	        	dest: 'dist',
	        	expand: true
	     	}
		 },

        jshint: {
            dev: {        
                src: ['src/**/*.js']
            },
            options: {
                jshintrc: true,
                ignores: ['src/components/**/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify']);
};