'use strict';

const moment = require('moment-timezone'); // 時間タイムゾーンライブラリ
const crypto = require('crypto'); // 暗号化ライブラリ
const VError = require('verror'); // エラー処理ライブラリ
const AWS = require('aws-sdk'); // AWS-SDKライブラリ

const Interface = require('es6-interface');
const TokenInfo = require('../../domain/models/token/tokenInfo');
const ITokenInfoRepository = require('../../domain/models/token/ITokenInfoRepository');
const TokenInfoRepository = require('../../domain/models/token/tokenInfoRepository');

class DynamoDbTokenInfoRepository extends Interface(ITokenInfoRepository, TokenInfoRepository) {
    // コンストラクター
    constructor(documentClient) {
        super();
        // DB接続インスタンス
        this.documentClient = documentClient;
    }

    find(param) {
        return new TokenInfo();
    }
    
    findeOne(param) {
        return new TokenInfo();
    }

    async cretate(param){
        try {
            const params = {
                TableName: process.env.TOKEN_TABLE_NAME,
                Item: param
            };
            // データベースに書込み
            const result =  await this.documentClient.put(params).promise();
            return new TokenInfo(result);
        } catch (error) {
            // エラー起こす
            throw new VError(error, `dynamoDb.put error: ${param.TableName}`);
        }
    }

    update(param) {
        return;
    }

    delete(param) {
        return;
    }
}

module.exports = DynamoDbTokenInfoRepository;
