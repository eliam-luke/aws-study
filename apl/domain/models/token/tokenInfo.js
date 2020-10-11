'use strict';

class TokenInfo {
    constructor(token, scope, expirationAt, revokeFlag,
        createdAt, createdBy, updatedAt, updatedBy, timestampJST){
        this.token = token;
        this.scope = scope;
        this.expirationAt = expirationAt;
        this.revokeFlag = revokeFlag;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.updatedAt = updatedAt;
        this.updatedBy = updatedBy;
        this.timestampJST = timestampJST;
    }
}

module.exports = TokenInfo;
