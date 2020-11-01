## Usage

Go to IAM, create a programatic user with push permission to lambda (e.g. lambda full access)

Configure aws cli with this user

    aws configure

Build and upload code

    yarn && yarn build && ./aws-push.sh