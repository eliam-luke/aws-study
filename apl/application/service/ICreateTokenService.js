'use strict';

const TokenInfo = require('../../domain/models/token/tokenInfo');

const ICreateTokenService = {

    process: function() {
        return TokenInfo;
    }
}

module.exports = ICreateTokenService;
