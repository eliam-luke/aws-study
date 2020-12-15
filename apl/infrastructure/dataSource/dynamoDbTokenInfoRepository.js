'use strict';

const moment = require('moment-timezone'); // 時間タイムゾーンライブラリ
const crypto = require('crypto'); // 暗号化ライブラリ
const VError = require('verror'); // エラー処理ライブラリ
const AWS = require('aws-sdk'); // AWS-SDKライブラリ
const documentClient = require('./dynamodb'); // dynamoDb接続モジュール

const TokenInfoRepository = require('../../domain/models/token/tokenInfoRepository');

class DynamoDbTokenInfoRepository extends TokenInfoRepository {
    // コンストラクター
    constructor(documentClient) {
        super();
        // DB接続インスタンス
        this.documentClient = documentClient;
    }

    findAll(){
    }
    
    findeOne(){
    }

    async cretate(tokenInfo){
        try {
            // データベースに書込み
            const result =  await documentClient.put(tokenInfo).promise();
            return result;
        } catch (error) {
            // エラー起こす
            throw new VError(error, `dynamoDb.put error: ${tokenInfo.TableName}`);
        }
    }

    update(){
        return true;
    }

    delete(){
        return true;
    }
}

module.exports = DynamoDbTokenInfoRepository;
