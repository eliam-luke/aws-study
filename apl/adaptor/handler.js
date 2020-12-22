'use strict';

const Logger = require('../utils/logger/Logger'); // ログ処理ユーティリティ
const UserIdClass = require('../application/userIdGenerator/userIdClass');
const CreateTokenService = require('../application/service/CreateTokenService');
/**
 * あいさつ関数アダプター
 *
 * @param {*} event
 * @param {*} context
 * @return {*} 
 */
module.exports.hello = async (event, context) => {
  const functionName = 'hello';
  const requestId = event.requestContext.requestId;
  Logger.debug(`requestId=${requestId}, ${functionName} start.`);
  try {
    const userId = new UserIdClass(new Date().getTime(), null);
    const uuid = userId.uuidV1();
    Logger.debug(`uuidV1=${uuid}`);
    Logger.debug(`${functionName} normal.`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        userId: uuid,
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event
      }),
    };
    
  } catch (error) {
    Logger.error(`requestId=${requestId}, ${functionName} error!`, error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'internal server error.'
      })
    };
  } finally {
    Logger.debug(`requestId=${requestId}, ${functionName} end.`);
  }
};
/**
 * ヘルスチェック関数アダプター
 *
 * @param {*} event
 * @param {*} context
 * @return {*} 
 */
module.exports.health = async (event, context) => {
  const functionName = 'health';
  const requestId = event.requestContext.requestId;
  Logger.debug(`requestId=${requestId}, ${functionName} start.`);
  try {
    Logger.debug(`requestId=${requestId}, ${functionName} normal.`);
    return {
      statusCode: 200
    };    
  } catch (error) {
    Logger.error(`requestId=${requestId}, ${functionName} error!`, error);
    return {
      statusCode: 503,
      message: 'server is out of service.'
    };
  } finally {
    Logger.debug(`requestId=${requestId}, ${functionName} end.`);
  }
};
/**
 * アクセストークン関数アダプター
 *
 * @param {*} event
 * @param {*} context
 * @return {*} 
 */
module.exports.accessToken = async (event, context) => {
  const functionName = 'accessToken';
  const requestId = event.headers['fapi-interaction-id'] ? event.headers['fapi-interaction-id'] : event.requestContext.requestId;
  Logger.debug(`requestId=${requestId}, ${functionName} start.`);
  try {
    const createTokenService = new CreateTokenService(event);
    const tokenInfo = await createTokenService.main();
  
    Logger.debug(`requestId=${requestId}, ${functionName} normal.`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        tokenInfo: tokenInfo
      })
    };
  } catch (error) {
    Logger.error(`requestId=${requestId}, ${functionName} error!`, error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'internal server error.'
      })
    };
  } finally {
    Logger.debug(`requestId=${requestId}, ${functionName} end.`);
  }
};
