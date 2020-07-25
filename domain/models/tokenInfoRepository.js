'use strict';

class TokenInfoRepository{
    // DB接続インスタンス
    connection;
    // コンストラクター
    constructor(connection) {    
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
