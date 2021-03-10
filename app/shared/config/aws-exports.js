import {
  COGNITO_REGION,
  USER_POOL_ID,
  USER_POOL_WEB_CLIENT_ID,
  AWS_APPSYNC_GRAPHQL_ENDPOINT,
  AWS_APPSYNC_REGION,
  AWS_APPSYNC_AUTHENTICATION_TYPE,
} from '@env';

const awsconfig = {
  // Cognito config
  Auth: {
    region: COGNITO_REGION,
    userPoolId: USER_POOL_ID,
    userPoolWebClientId: USER_POOL_WEB_CLIENT_ID,
  },

  // AppSync config
  aws_appsync_graphqlEndpoint: AWS_APPSYNC_GRAPHQL_ENDPOINT,
  aws_appsync_region: AWS_APPSYNC_REGION,
  aws_appsync_authenticationType: AWS_APPSYNC_AUTHENTICATION_TYPE,
};

export default awsconfig;
