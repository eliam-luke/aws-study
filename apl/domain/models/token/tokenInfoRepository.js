'use strict';

class TokenInfoRepository{
    // コンストラクター
    constructor(connection) {    
        // DB接続インスタンス
        this.connection = connection;
    }

    findAll(){
    }
    
    findeOne(token){
    }

    cretate(tokenInfo){
        return true;
    }

    update(tokenInfo){
        return true;
    }

    delete(tokenInfo){
        return true;
    }
}

module.exports = TokenInfoRepository;
