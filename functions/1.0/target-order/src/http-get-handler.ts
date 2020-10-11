import 'source-map-support/register';
import { Frigate, Destroyer, Cruiser, Battleship, FlagShip } from './ships';
import { StraightLine, HighSpeed } from './formations';

export class HTTPGetHandler {
  ships = [new Frigate(), new Destroyer(), new Cruiser(), new Battleship()];
  formations = [new StraightLine(), new HighSpeed()];
  public async handle(formationName: string): Promise<any> {
    const formation = this.formations.find((formation) => formation.shortcut === formationName);
    var targetingOrder = {};
    if (!formation) {
      return targetingOrder;
    }
    this.ships.forEach(
      (ship) =>
        (targetingOrder[ship.label] = ship
          .getTargetingOrder(formation)
          .map((opponent) => opponent.label + (opponent.weakness === ship.weapon ? '*' : ''))),
    );

    return targetingOrder;
  }
}
