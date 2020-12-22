'use strict';

const BaseError = require("./BaseError"); // BaseErrorクラス

class AplError extends BaseError {
  constructor(message, cause) {
    super(message);
    this.name = 'ApplicationError';
    this.cause = cause;
  }
}

module.exports = AplError;
