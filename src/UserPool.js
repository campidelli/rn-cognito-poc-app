import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'ap-southeast-2_OAlz862TR',
    ClientId: '793dlrkf07kdkvvodfrm8uc9eh'
};

export default new CognitoUserPool(poolData);
