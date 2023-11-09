import AWS from 'aws-sdk';
const dynamodb = new AWS.DynamoDB.DocumentClient();

export const lambdaHandler = async (event) => {
    console.log('Running Rss Rfd')
    try {
        const result = await dynamodb.get({
            TableName: 'RssRfd',
            Key: { id: 'config' },
        }).promise();

        console.log(result);

        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        console.log('error happened!')
        console.log(err);
        return err;
    }
};
