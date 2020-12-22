'use strict';

const VError = require("verror");

class BaseError extends VError {
  constructor(message) {
    super(message);
    VError.fullStack(this);
  }
}

module.exports = BaseError;
