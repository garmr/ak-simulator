import { HTTPGetHandler } from '../src/http-get-handler';

var objectUnderTest: HTTPGetHandler;

beforeEach(() => {
  objectUnderTest = new HTTPGetHandler();
});

describe('Version producer', () => {
  // UnitOfWork_StateUnderTest_ExpectedBehavior
  test('HTTP GET handler returns {version: 0.0.1}', async () => {
    // Arrange
    process.env.VERSION = '0.0.1';

    // Act
    const result = await objectUnderTest.handle();

    // Assert
    expect(result).toHaveProperty('version');
    expect(result.version).toBe(process.env.VERSION);
  });
});
