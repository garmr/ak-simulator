import 'source-map-support/register';
import { HTTPGetHandler } from './http-get-handler';

export const handler: AWSLambda.Handler = async (event: AWSLambda.APIGatewayEvent): Promise<any> => {
  const httpGetHandler = new HTTPGetHandler();
  const formation =
    event.queryStringParameters && event.queryStringParameters.formation
      ? event.queryStringParameters.formation
      : undefined;
  const response = {
    version: process.env.VERSION,
    id: process.env.APIG_DEPLOYMENT_ID,
    target_order: formation ? await httpGetHandler.handle(formation) : 'no matching formation found',
  };

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
