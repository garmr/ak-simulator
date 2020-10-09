import 'source-map-support/register';
import { HTTPGetHandler } from './http-get-handler';

export const handler: AWSLambda.Handler = async (): Promise<any> => {
  const httpGetHandler = new HTTPGetHandler();
  const response = await httpGetHandler.handle();
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
