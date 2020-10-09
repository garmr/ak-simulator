import 'source-map-support/register';

export class HTTPGetHandler {
  public async handle(): Promise<any> {
    return {
      id: process.env.APIG_DEPLOYMENT_ID,
      version: process.env.VERSION,
      status: {
        dependency1: '🟢',
        dependency2: '🔴',
      },
    };
  }
}
