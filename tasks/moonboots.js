/*
 * grunt-moonboots
 * https://github.com/matiasdecarli/grunt-moonboots
 *
 * Copyright (c) 2014 matiasdecarli
 * Licensed under the MIT license.
 */

'use strict';
var MoonbootsStatic = require('moonboots-static');


module.exports = function(grunt) {
    grunt.registerMultiTask('moonboots', 'A grunt task that use moontoobs-static to generate _build folder, using the same configuration file than the actual project', function() {
        var done = this.async();

        var moonboots = new MoonbootsStatic(
            this.data.config);
        console.log('outputting data to ', this.data.config.directory)
        moonboots.on('log', function(type, detail) {
            if (type && type[1] === 'error') {
                grunt.fail.fatal(detail)
            }
        });
        moonboots.on('ready', done);
    });
};
