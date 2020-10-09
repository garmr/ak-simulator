import 'source-map-support/register';

export class HTTPGetHandler {
  public async handle(): Promise<any> {
    return {
      version: process.env.VERSION,
      id: process.env.APIG_DEPLOYMENT_ID,
    };
  }
}
