'use strict';

const uuid = require('uuid'); // UUIDライブラリ

class UserId {
    constructor(timestamp, name){
        this.timestamp = timestamp;
        this.name = name;
    }

    uuidV1(){
        return uuid.v1();
    }

    uuidV4(){
        return uuid.v4();
    }
}

module.exports = UserId;
