import { Handler, Context, APIGatewayEvent } from 'aws-lambda';

const handler: Handler = async (event: APIGatewayEvent, context: Context) => {
    const wait = (delay: number): Promise<void> => {
        return new Promise((yay, _) => {
            setTimeout(yay, delay);
        });
    };

    await wait(2000);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: `pong! (${new Date().toISOString()})` })
    };
};


export { handler };

