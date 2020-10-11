import { HTTPGetHandler } from '../src/http-get-handler';

var objectUnderTest: HTTPGetHandler;

beforeEach(() => {
  objectUnderTest = new HTTPGetHandler();
});

describe('Targeting order', () => {
  // UnitOfWork_StateUnderTest_ExpectedBehavior
  test('In high speed formation, frigates target battleships first', async () => {
    // Arrange

    // Act
    const result = await objectUnderTest.handle('hs');
    // Assert
    expect(result).toHaveProperty('frigate');
    expect(result.frigate[0]).toBe('battleship*');
  });

  test('In high speed formation, battleships target battleships first', async () => {
    // Arrange

    // Act
    const result = await objectUnderTest.handle('hs');
    // Assert
    expect(result).toHaveProperty('battleship');
    expect(result.battleship[0]).toBe('battleship');
  });

  test('HTTP GET handler returns nothing when no formation found', async () => {
    // Arrange

    // Act
    const result = await objectUnderTest.handle('unknown_formation');
    // Assert
    // expect(result).toBe({});
  });
});
