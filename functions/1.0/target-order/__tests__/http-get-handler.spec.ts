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
    const result = await objectUnderTest.handle('high-speed');
    // Assert
    expect(result.targeting_order).toHaveProperty('frigate');
    expect(result.targeting_order.frigate[0]).toBe('battleship*');
  });

  test('In high speed formation, battleships target battleships first', async () => {
    // Arrange

    // Act
    const result = await objectUnderTest.handle('high-speed');
    // Assert
    expect(result.targeting_order).toHaveProperty('battleship');
    expect(result.targeting_order.battleship[0]).toBe('battleship');
  });

  test('Total number of formations is 30', async () => {
    // Arrange

    // Act
    const result = objectUnderTest.formations.length;
    // Assert
    expect(result).toBe(30);
  });

  test('All formations have distinct shortcuts', async () => {
    // Arrange

    // Act
    const result = objectUnderTest.formations.map((formation) => formation.shortcut);

    const uniq = result.filter((value, index, self) => self.indexOf(value) === index);
    // Assert
    expect(uniq.length).toBe(result.length);
  });

  test('HTTP GET handler returns nothing when no formation found', async () => {
    // Arrange

    // Act
    const result = await objectUnderTest.handle('unknown_formation');
    // Assert
    // expect(result).toBe({});
  });
});
