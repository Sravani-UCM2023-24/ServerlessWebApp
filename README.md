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

Step 1: Configure AWS Cloud9
1. Create an AWS Cloud9 environment:
   - Go to the AWS Management Console and search for "Cloud9". - Click "Create environment", give a name and choose the settings that suit your needs. - Click on "Next step" and then on "Create environment". 2. Open the Cloud9 environment:
   - Once the environment is created, open it in the AWS Cloud9 IDE. Step 2: Create the DynamoDB table
2. Open AWS DynamoDB:
   - Go to the AWS Management Console, search for "DynamoDB" and open it. 2. Create a table:
   - Click on "Create table". - Set table name to "property". - Set the primary key, for example "pid" as the partition key. - Configure other settings if necessary and click "Create".
Step 3: Create the Lambda Function
1. Create a Lambda function:
   - Go to the AWS Management Console and search for "Lambda". - Click on "Create a job". - Select "Author from scratch". - Give your job a name and choose a time to use it. - Click on "Create a job".
2. Add your Lambda function code:
   - In the Lambda editor, paste the code you want to run.
   - Configure identity management and required permissions. - Save work.
Step 4: Create a REST API and API Gateway
1. Create API:
   - Go to AWS Management Console, search for “API Gateway” and open it. - Click on "Create API". - Select API type (REST). - Select "New API" and give it a name. 2. Create a bank and process:
   - Describe things in terms for your API. - Configure integration with your Lambda function to manage different processes.
3. Submit API:
   - Put the API in one place to bring it to life. - Get the final URL.
