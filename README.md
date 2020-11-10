## Usage

Go to IAM, create a programatic user with push permission to lambda (e.g. lambda full access)

Configure aws cli with this user

    aws configure

Create a lambda function and update the aws-push.sh with the function name and region

    cp aws-push.sh aws-push.local.sh
    vi aws-push.local.sh

Build and upload code

    yarn upload