import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoTaskRepository } from '../infrastructure/dataSource/DynamoTaskRepository'
import { CreateTask } from '../application/service/CreateTask'

export const handler: APIGatewayProxyHandler = async (event, _context) => {
    try {
        const taskRepository = new DynamoTaskRepository();
        const { title, description } = JSON.parse(event.body);
        const id = parseInt(genTaskId(), 10);

        const createTask = new CreateTask(taskRepository);

        await createTask.execute(id, title, description)

        return {
            statusCode: 200,
            body: JSON.stringify({
                status: 200,
                detail: 'ok'
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                status: 500,
                detail: error.message
            })
        };
    }  
}

function genTaskId () {
    var len = 8;
    var str = "123456789";
    var strLen = str.length;
    var result = "";
    
    for (var i = 0; i < len; i++) {
        result += str[Math.floor(Math.random() * strLen)];
    }
    return result;
}