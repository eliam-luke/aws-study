'use strict';

const uuid = require('uuid'); // UUIDライブラリ

class UserToken {
    constructor(dbClient, params){
        this.dbClient = dbClient;
        this.params = params;
    }

    findAll(){

    }
    
    findeOne(){

    }
    cretate(){
        return uuid.v1();
    }

    delete(){
        return uuid.v4();
    }
}

module.exports = UserId;