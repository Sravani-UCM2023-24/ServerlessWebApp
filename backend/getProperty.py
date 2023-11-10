import json
import boto3

def lambda_handler(event, context):
    # Get the service resource and instantiate a table resource object
    dydbTable = boto3.resource('dynamodb').Table('PropertyBasic')

    # Use the scan method to retrieve all items from the table
    response = dydbTable.scan()
    result = response['Items']

    # Paginate through remaining items if LastEvaluatedKey is present
    while 'LastEvaluatedKey' in response:
        response = dydbTable.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
        result.extend(response['Items'])

    # Return the retrieved properties in the response
    body = {'properties': result}

    return {
        'statusCode': 200,
        'body': json.dumps(body)
    }