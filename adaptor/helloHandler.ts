import { APIGatewayProxyHandler } from 'aws-lambda';
import * as moment from 'moment-timezone';
import { prune } from 'underscore.string';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Typescript v1.0! Your function executed successfully!',
      timestamp: prune(moment().format(), 12),
      input: event,
    }, null, 2),
  };
}
