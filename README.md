![IMG8](https://github.com/Sravani-UCM2023-24/ServerlessWebApp/assets/150384935/562f0e58-a433-4f8a-93b6-a68a82935ad0)
![IMG7](https://github.com/Sravani-UCM2023-24/ServerlessWebApp/assets/150384935/74fdf0e8-8c9f-4ea9-8204-ef297777c42d)
![IMG6](https://github.com/Sravani-UCM2023-24/ServerlessWebApp/assets/150384935/1836e911-12f5-47cb-a8fd-1379a0923b75)
![Img5](https://github.com/Sravani-UCM2023-24/ServerlessWebApp/assets/150384935/e6b388ba-5c3f-47b3-88da-e539fc6f18bd)
![IMG4](https://github.com/Sravani-UCM2023-24/ServerlessWebApp/assets/150384935/7c70d10e-dd50-4dd4-a867-da83f549383d)
![IMG3](https://github.com/Sravani-UCM2023-24/ServerlessWebApp/assets/150384935/ad4b7e2d-e47f-420d-8cc2-f9e6daf2f55e)
![IMG2](https://github.com/Sravani-UCM2023-24/ServerlessWebApp/assets/150384935/45b38b38-908d-4a69-ac2d-fb7f215b8c0a)
![IMG1](https://github.com/Sravani-UCM2023-24/ServerlessWebApp/assets/150384935/23d6eed2-3c61-4911-9e72-90400a00e51f)
# ServerlessWebApp
I have created a new cloud9 instance and EC2 instance in AWS.
In the cloud9 terminal uploaded all the backend and frontend code then checked for all the code.
Created Lambda functions for both delete and get property details.
Created API for adding the property, delete and get the property values.
Finally add those api urls on to the code on the frontend with the html pages.

here is the step by step process for that

Step 1: Set Up AWS Cloud9
1. Create an AWS Cloud9 Environment:
   - Go to the AWS Management Console and search for "Cloud9".
   - Click "Create Environment", provide a name, and choose the settings that suit your needs.
   - Click "Next Step" and then "Create Environment".

2. Open the Cloud9 Environment:
   - Once the environment is created, open it in the AWS Cloud9 IDE.

Step 2: Create a DynamoDB Table
1. Open AWS DynamoDB:
   - Go to the AWS Management Console, search for "DynamoDB", and open it.

2. Create a Table:
   - Click "Create table".
   - Set the table name as "property details".
   - Define the primary key, for example, "pid" as the partition key.
   - Configure other settings as needed and click "Create".

Step 3: Create a Lambda Function
1. Create a Lambda Function:
   - Go to the AWS Management Console and search for "Lambda".
   - Click "Create function".
   - Choose "Author from scratch".
   - Give your function a name and select the runtime .
   - Click "Create function".

2. Code Your Lambda Function:
   - In the Lambda function editor, paste the code you want to run. 
   - Configure the function handler and required permissions.
   - Save the function.

Step 4: Create a REST API with API Gateway
1. Create an API:
   - Go to the AWS Management Console, search for "API Gateway", and open it.
   - Click "Create API".
   - Choose the type of API (REST ).
   - Select "New API" and give it a name.

2. Create a Resource and Method:
   - Define a resource and method for your API.
   - Configure the integration with your Lambda function to handle the respective method.

3. Deploy the API:
   - Deploy the API to a stage to make it live.
   - Obtain the endpoint URL.
