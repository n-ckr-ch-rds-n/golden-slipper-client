export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "eu-west-2",
        BUCKET: "golden-slipper"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://ggm4e8cvbl.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_xRDyDgmXr",
        APP_CLIENT_ID: "5ts43uo9ggu61nt2tu4psrcoib",
        IDENTITY_POOL_ID: "us-east-1:8e2b2af5-dd81-463d-80b8-2699a5d92ae7"
    }
};
