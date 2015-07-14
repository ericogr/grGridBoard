module.exports = function(grunt) {
    return {
        server: {
            options: {
                port: 8282,
                hostname: '*',
                base: 'src',
                keepalive: true
            }
        }
    };
};