/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner:
            '/*! <%= pkg.title || pkg.name %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        shell: {
            target: {
                command: './compile'
            }
        },
        watch: {
            compile: {
                files: ['src/**/*.php', 'src/**/*.phtml', 'src/**/*.xml'],
                tasks: 'shell'
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');

    // Default task.
    grunt.registerTask('default', ['shell']);
    grunt.registerTask('compile', ['shell']);
    grunt.registerTask('compile:module', ['shell']);

};
