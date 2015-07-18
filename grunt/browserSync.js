module.exports = function(grunt) {
    return {
        application: {
            src : ['dist/**/*', 'app/*']
        },
        options: {
            startPath: "test-grid-board.html",
            watchTask: true,
            reloadDelay: 500,
            server: {
                baseDir: ["dist", "app"],
                directory: true
            }
        }
    };
};