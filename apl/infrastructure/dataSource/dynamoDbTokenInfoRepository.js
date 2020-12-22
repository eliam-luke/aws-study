"use strict";

const moment = require("moment-timezone"); // 時間タイムゾーンライブラリ
const crypto = require("crypto"); // 暗号化ライブラリ
const VError = require("verror"); // エラー処理ライブラリ
const AWS = require("aws-sdk"); // AWS-SDKライブラリ
const Interface = require("es6-interface");

const TokenInfo = require("../../domain/models/token/tokenInfo");
const ITokenInfoRepository = require("../../domain/models/token/ITokenInfoRepository");

class DynamoDbTokenInfoRepository extends Interface(
  ITokenInfoRepository
) {
  // コンストラクター
  constructor(documentClient) {
    super();
    // DB接続インスタンス
    this.documentClient = documentClient;
  }

  find(param) {
    throw new VError("no implement.");
  }

  findeOne(param) {
    throw new VError("no implement.");
  }
/**
 * アクセストークンの作成
 *
 * @param {*} param
 * @return {*} 
 * @memberof DynamoDbTokenInfoRepository
 */
async create(param) {
    const params = {
      TableName: process.env.TOKEN_TABLE_NAME,
      Item: param,
    };
    try {
      // データベースに書込み
      const result = await this.documentClient.put(params).promise();
      return param;
    } catch (error) {
      // エラー起こす
      throw new VError(`dynamoDb.put error: ${JSON.stringify(params)}`, error);
    }
  }

  update(param) {
    throw new VError("no implement.");
  }

  delete(param) {
    throw new VError("no implement.");
  }
}

module.exports = DynamoDbTokenInfoRepository;
