'use strict';

const moment = require('moment-timezone'); // 時間タイムゾーンライブラリ
const crypto = require('crypto'); // 暗号化ライブラリ
const VError = require('verror'); // エラー処理ライブラリ
const AWS = require('aws-sdk'); // AWS-SDKライブラリ
const documentClient = new AWS.DynamoDB.DocumentClient(); // dynamoDb操作モジュール

const TokenInfoRepository = require('../../domain/models/token/tokenInfoRepository')

class DynamoDbTokenInfoRepository extends TokenInfoRepository {
    // DB接続インスタンス
    documentClient;
    // コンストラクター
    constructor(documentClient) {    
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
        } catch (error) {
            // エラー起こす
            throw new VError(error, `dynamoDb.put error: ${params.TableName}`);
        }
        return result;
    }

    update(){
        return true;
    }

    delete(){
        return true;
    }
}

module.exports = DynamoDbTokenInfoRepository;
