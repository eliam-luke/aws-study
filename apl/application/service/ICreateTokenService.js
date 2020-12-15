'use strict';

const TokenInfo = require('../../domain/models/token/TokenInfo');

const ICreateTokenService = {

    process: function() {
        return TokenInfo;
    }
}

module.exports = ICreateTokenService;
