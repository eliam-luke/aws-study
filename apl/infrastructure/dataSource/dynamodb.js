'use strict';

const AWS = require('aws-sdk');

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    accessKeyId: 'accessKeyId', // ダミーaccessKeyId
    secretAccessKey: 'secretAccessKey', // ダミーsecretAccessKey
    endpoint: 'http://localhost:8000'
  };
}

const client = new AWS.DynamoDB.DocumentClient(options);

module.exports = client;
