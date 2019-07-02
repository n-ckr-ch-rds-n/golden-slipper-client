export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "eu-west-2",
        BUCKET: "golden-slipper"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://qds38iwumg.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_xRDyDgmXr",
        APP_CLIENT_ID: "5ts43uo9ggu61nt2tu4psrcoib",
        IDENTITY_POOL_ID: "us-east-1:bc5d0a93-1242-4286-ab30-3218621dc0ca"
    }
};
