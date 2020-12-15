'use strict';
//const Interface = require('es6-interface');
const TokenInfo = require('./TokenInfo');

const ITokenInfoRepository = {

    find: function(param) {
        return TokenInfo;
    },
    
    findeOne: function(param) {
        return TokenInfo;
    },

    cretate: function(param) {
        return TokenInfo;
    },

    update: function(param) {
        return;
    },

    delete: function(param) {
        return;
    }
}

module.exports = ITokenInfoRepository;
