'use strict';

const Interface = require('es6-interface');
const uuid = require('uuid'); // UUIDライブラリ
const TokenInfo = require('../../domain/models/token/tokenInfo');
const ICreateTokenService = require('./ICreateTokenService');
const DynamoDbTokenInfoRepository = require('../../infrastructure/dataSource/dynamoDbTokenInfoRepository');
const documentClient = require('../../infrastructure/dataSource/dynamodb'); // dynamoDb接続モジュール

class CreateTokenService extends Interface(ICreateTokenService) {
    // コンストラクター
    constructor(request, params) {
        super();
        this.request = request;
        this.params = params;
    }

     async process() {
        try {
            var tokenInfo = new TokenInfo();
            tokenInfo.token = uuid.v4();
            tokenInfo.createdAt = new Date().getTime();
            tokenInfo.scope = this.params.scope;
    
            const tokenInfoRepository = new DynamoDbTokenInfoRepository(documentClient);
            const result = await tokenInfoRepository.cretate(tokenInfo);
    
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
