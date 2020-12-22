"use strict";

const Interface = require("es6-interface");
const uuid = require("uuid"); // UUIDライブラリ
const moment = require('moment-timezone');

const AplError = require("../../utils/error/AplError"); // エラー処理ライブラリ
const Logger = require('../../utils/logger/Logger'); // ログ処理ユーティリティ
const TokenInfo = require("../../domain/models/token/tokenInfo");
const ICreateTokenService = require("./ICreateTokenService");
const DynamoDbTokenInfoRepository = require("../../infrastructure/dataSource/dynamoDbTokenInfoRepository");
const documentClient = require("../../infrastructure/dataSource/dynamodb"); // dynamoDb接続モジュール
/**
 * アクセストークン生成サービス
 *
 * @class CreateTokenService
 * @extends {Interface(ICreateTokenService)}
 * @author yl-liu
 */
class CreateTokenService extends Interface(ICreateTokenService) {
  /**
   * Creates an instance of CreateTokenService.
   * @param {*} event
   * @memberof CreateTokenService
   */
  constructor(event) {
    super();
    this.headers = event.headers;
    this.queryString = event.queryStringParameters;
    this.context = event.requestContext;
  }
  /**
   * メイン関数
   *
   * @return {*} tokenInfo
   * @memberof CreateTokenService
   */
  async main() {
    const className = 'CreateTokenService';
    const methodName = 'main';
    const requestId = this.headers['fapi-interaction-id'] ? this.headers['fapi-interaction-id'] : this.context.requestId;
    Logger.debug(`requestId=${requestId}, ${className}.${methodName} in.`);
    try {
      const timestamp = new Date().getTime();
      const tokenInfo = new TokenInfo();
      tokenInfo.token = uuid.v4();
      tokenInfo.createdAt = timestamp;
      tokenInfo.scope = this.queryString.scope;
      tokenInfo.expirationAt = timestamp + parseInt(process.env.TOKEN_TIMEOUT, 10) * 1000;
      tokenInfo.updatedAt = timestamp;
      tokenInfo.createdBy = `${className}.${methodName}`;
      tokenInfo.updatedBy = `${className}.${methodName}`;
      tokenInfo.timestampJST = moment().tz('Asia/Tokyo').format('YYYY-MM-DDTHH:mm:ss.SSS Z');

      const tokenInfoRepository = new DynamoDbTokenInfoRepository(
        documentClient
      );
      const result = await tokenInfoRepository.create(tokenInfo);
      Logger.debug(`requestId=${requestId}, ${className}.${methodName} ok.`);
      return result;
    } catch (error) {
      Logger.error(`requestId=${requestId}, ${className}.${methodName} ng!`, error);
      throw new AplError('CreateTokenService error!', error);
    } finally {
      Logger.debug(`requestId=${requestId}, ${className}.${methodName} out.`);
    }
  }
}

module.exports = CreateTokenService;
