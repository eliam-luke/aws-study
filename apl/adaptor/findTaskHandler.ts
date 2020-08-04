import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoTaskRepository } from '../../infrastructure/dataSource/DynamoTaskRepository'
import { FindTask } from '../../application/service/FindTask'

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  
    const taskRepository = new DynamoTaskRepository();

    const id = parseInt(event.pathParameters["id"], 10);

    const findTask = new FindTask(taskRepository);

    let result = await findTask.execute(id)

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
}
