module.exports = function(grunt) {
    return {
        bsFiles: {
            src : ['src/**/*', 'app/*']
        },
        options: {
            startPath: "test-grid-board.html",
            server: {
                baseDir: ["src", "app"],
                directory: true
            }
        }
    };
};