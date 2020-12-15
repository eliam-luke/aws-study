const { use } = require("chai");
const { Interface } = require("readline");

'use strict';

const uuid = require('uuid'); // UUIDライブラリ
const TokenInfo = require('../../domain/models/token/TokenInfo');
const ICreateTokenService = require('./ICreateTokenService');
const DynamoDbTokenInfoRepository = require('../../infrastructure/dataSource/DynamoDbTokenInfoRepository');
const documentClient = require('../../infrastructure/dataSource/dynamodb'); // dynamoDb接続モジュール

class CreateTokenService extends Interface(ICreateTokenService) {
    // コンストラクター
    constructor(request) {
        super();
        this.request = request;
    }

    process = async function() {
        try {
            var tokenInfo = new TokenInfo();
            tokenInfo.token = uuid.v4();
            tokenInfo.createdAt = new Date().getTime();
            tokenInfo.scope = this.request.scope;
    
            const tokenInfoRepository = new DynamoDbTokenInfoRepository(documentClient);
            const result = tokenInfoRepository.cretate(tokenInfo, tokenInfoRepository);
    
            return {
                tokenInfo: result
            };

        } catch (error) {
            throw new Error(error);
        } finally {
            console.log('process end.');
        }
    }
}

module.exports = CreateTokenService;
