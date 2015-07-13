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
        },

        connect: {
            server: {
                options: {
                    port: 8282,
                    hostname: '*',
                    base: 'src',
                    keepalive: true
                }
            }
        }
     });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['jshint', 'uglify']);
};