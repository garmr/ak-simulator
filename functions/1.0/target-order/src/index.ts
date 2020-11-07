import 'source-map-support/register';
import { HTTPGetHandler } from './http-get-handler';

export const handler: AWSLambda.Handler = async (event: AWSLambda.APIGatewayEvent): Promise<any> => {
  const httpGetHandler = new HTTPGetHandler();
  const formation =
    event.queryStringParameters && event.queryStringParameters.formation
      ? event.queryStringParameters.formation
      : undefined;
  const attackShips =
    event.queryStringParameters && event.queryStringParameters.dds ? event.queryStringParameters.dds.split(',') : [];
  const tankShips =
    event.queryStringParameters && event.queryStringParameters.tanks
      ? event.queryStringParameters.tanks.split(',')
      : [];
  const result = await httpGetHandler.handle(formation, attackShips, tankShips);
  const response = {
    version: process.env.VERSION,
    id: process.env.APIG_DEPLOYMENT_ID,
    target_order: result ? result.targeting_order : {},
    formation: result ? result.formation : 'no matching formation found',
    suggestions: result ? result.suggestions.slice(0, 3) : [],
  };

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(response),
  };
};
