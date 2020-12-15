'use strict';

const UserIdClass = require('../application/userIdGenerator/userIdClass');
const CreateTokenService = require('../application/service/CreateTokenService');

module.exports.hello = async (event, context) => {
  try {
    const userId = new UserIdClass(new Date().getTime(), null);
    const uuid = userId.uuidV1();
    console.log(`uuidV1=${uuid}`);
  
    const createTokenService = new CreateTokenService(event.body);
    const tokenInfo = createTokenService.process();
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        userId: uuid,
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
        tokenInfo: tokenInfo
      }),
    };
    
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error
      })
    };
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
