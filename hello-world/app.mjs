const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const DB_TABLE = 'RssRFD';

export const lambdaHandler = async (event) => {
    console.log('hello')
    try {
        const result = await dynamodb.get({
            TableName: 'YourDynamoDBTableName', // Change this to your table name
            Key: { VariableName: variableName },
        }).promise();

        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};
