'use strict';

const UserIdClass = require('../application/userIdGenerator/userIdClass');

module.exports.hello = async (event, context) => {
  const userId = new UserIdClass(new Date().getTime(), null);
  const uuid = userId.uuidV1();
  console.log(`uuidV1=${uuid}`);
  return {
    statusCode: 200,
    body: JSON.stringify({
      userId: uuid,
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
