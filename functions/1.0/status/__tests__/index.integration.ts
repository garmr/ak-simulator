const handler = require('../src/index').handler;
const LambdaTester = require('lambda-tester');

describe('Status producer', () => {
  // UnitOfWork_StateUnderTest_ExpectedBehavior
  describe('HTTP Get handler', () => {
    test(' with any event returns {dependency1: {status : 🟢}}', async () => {
      // Arrange

      // Act
      await LambdaTester(handler)
        .event({})
        .expectResult((result) => {
          // Assert
          expect(result).toHaveProperty('body');
          var message = JSON.parse(result.body);
          expect(message).toHaveProperty('status');
          expect(message.status).toHaveProperty('dependency1');
          expect(message.status.dependency1).toBe('🟢');
        });
    });
  });
});
