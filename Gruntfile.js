/*
 * grunt-moonboots
 * https://github.com/matiasdecarli/grunt-moonboots
 *
 * Copyright (c) 2014 matiasdecarli
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  
  var target = require(__dirname + '/config')({directory: __dirname + '/_build'});

  // Project configuration.
  grunt.initConfig({ 
      moonboots: {
          main: {
                config: target
            }   
          }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['moonboots']);
};
