
module.exports = function(grunt) {
    grunt.initConfig({
        typescript: {
        base: {
            src: ['**/../src/*.ts'],
            dest: '**/../ts-built/main.js',
            options: {
            module: 'amd', //or commonjs
            target: 'es5', //or es3
            sourceMap: true,
            declaration: true,
            // watch:true
            }
        }
        },
        sass: {
            dist: {
              files: [{
                expand: true,    
                cwd: "scss", // The startup directory           
                src: '**/*.scss',
                dest: 'css',
                ext: '.css'
              }]
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-typescript');
  //grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['typescript','sass']);
};