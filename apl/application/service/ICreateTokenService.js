'use strict';

const TokenInfo = require('../../domain/models/token/tokenInfo');

const ICreateTokenService = {

    main: function() {
        return TokenInfo;
    }
}

module.exports = ICreateTokenService;
