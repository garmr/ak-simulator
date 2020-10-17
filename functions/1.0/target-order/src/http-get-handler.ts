import 'source-map-support/register';
import { Frigate, Destroyer, Cruiser, Battleship } from './ships';
import {
  StraightLine,
  HighSpeed,
  WipeOut,
  Guard,
  AttackFocus,
  RailGunFocus,
  BeamFocus,
  MissileFocus,
  CannonFocus,
  RailGunBarrage,
  MissileChannel,
  BeamChannel,
  CannonBarrage,
  RailGunDrill,
  BeamBarrage,
  MissileAiming,
  CannonChannel,
  RailGunChannel,
  BeamDrill,
  MissileBarrage,
  CannonAiming,
  DoubleFort,
  RailGunFort,
  BeamFort,
  MissileFort,
  CannonFort,
  RailGunEvasion,
  BeamEvasion,
  MissileEvasion,
  CannonEvasion,
} from './formations';

export class HTTPGetHandler {
  ships = [new Frigate(), new Destroyer(), new Cruiser(), new Battleship()];
  formations = [
    new StraightLine(),
    new HighSpeed(),
    new WipeOut(),

    new Guard(),

    new AttackFocus(),

    new RailGunFocus(),

    new BeamFocus(),

    new MissileFocus(),

    new CannonFocus(),

    new RailGunBarrage(),

    new MissileChannel(),

    new BeamChannel(),

    new CannonBarrage(),

    new RailGunDrill(),

    new BeamBarrage(),

    new MissileAiming(),

    new CannonChannel(),

    new RailGunChannel(),

    new BeamDrill(),

    new MissileBarrage(),

    new CannonAiming(),

    new DoubleFort(),

    new RailGunFort(),

    new BeamFort(),

    new MissileFort(),

    new CannonFort(),

    new RailGunEvasion(),

    new BeamEvasion(),

    new MissileEvasion(),

    new CannonEvasion(),
  ];
  public async handle(formationName: string): Promise<any> {
    const formation = this.formations.find((formation) => formation.shortcut === formationName);
    const targetingOrder = {};
    if (!formation) {
      return targetingOrder;
    }
    this.ships.forEach(
      (ship) =>
        (targetingOrder[ship.label] = ship
          .getTargetingOrder(formation)
          .map((opponent) => opponent.label + (opponent.weakness === ship.weapon ? '*' : ''))),
    );

    return {
      formation: formation,
      targeting_order: targetingOrder,
    };
  }
}
