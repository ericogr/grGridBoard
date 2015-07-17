module.exports = function(grunt) {
    return {
        bsFiles: {
            src : ['dist/**/*', 'app/*']
        },
        options: {
            startPath: "test-grid-board.html",
            watchTask: true,
            server: {
                baseDir: ["dist", "app"],
                directory: true
            }
        }
    };
};