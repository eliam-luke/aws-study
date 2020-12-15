'use strict';
const Interface = require('es6-interface');
const ITokenInfoRepository = require('./ITokenInfoRepository');
const TokenInfo = require('./TokenInfo');

class TokenInfoRepository extends Interface(ITokenInfoRepository) {
    // コンストラクター
    constructor() {
        super();
    }

    find(param) {
        return TokenInfo;
    }
    
    findeOne(param) {
        return TokenInfo;
    }

    cretate(param) {
        return TokenInfo;
    }

    update(param) {
        return;
    }

    delete(param) {
        return;
    }
}

module.exports = TokenInfoRepository;
