'use strict';

var childProcess = require('child_process');
var assert = require('chai').assert;

describe('cli', function() {
  it('should handle error event fot child-process and throw error own', function(done) {
    childProcess.exec('../../bin/globify.js lib/*.js', function(err) {
      assert.isOk(err);
      done();
    });
  });
});