import { Task } from '../../domain/model/task/Task'
import { AbstractTaskRepository } from "../../domain/model/task/AbstractTaskRepository";
import * as AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';

let options = {};

// connect to local DB if running offline
//if (process.env.IS_OFFLINE) {
options = {
  region: "localhost",
  accessKeyId: "AKIAJWF6HLJEBILIAOCQ",
  secretAccessKey: "AKIAJWF6HLJEBILIAOCQ",
  endpoint: "http://localhost:8000"
};
//}

const TABLE_NAME = process.env.TASK_TABLE_NAME;

export class DynamoTaskRepository extends AbstractTaskRepository {
  private client: DocumentClient;

  constructor() {
    super();
    this.client = new AWS.DynamoDB.DocumentClient(options);
  }

  create = async (task: Task): Promise<void> => {
    const param: DocumentClient.PutItemInput = {
        TableName: TABLE_NAME,
        Item: task
      };
      console.log(param);
      try {
        await this.client.put(param).promise();
      } catch (e) {
        console.log(e);
    }
  }

  find = async (id: number): Promise<Task> => {
    const param: DocumentClient.GetItemInput = {
        TableName: TABLE_NAME,
        Key: {id}
      };
      console.log(param);
      try {
        const result: DocumentClient.GetItemOutput = await this.client.get(param).promise();
        return result.Item as Task;
      } catch (e) {
        console.log(e);
    }
  }
}
