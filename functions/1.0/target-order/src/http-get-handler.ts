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
  FleetFormations,
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
  public async handle(formationName: string, attackShips: Array<string>, tankShips: Array<string>): Promise<any> {
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

    let suggestions: Array<{ shortcut: string; score: number }> = [];

    this.formations.forEach((candidateFormation: FleetFormations) => {
      let candidate = {
        shortcut: candidateFormation.shortcut,
        score: 0,
      };

      // on récupère la position de chaque vaisseau
      let candidatePositions = {};
      candidateFormation.positions.forEach((candidateRow: Array<any>, candidateRowIndex) => {
        candidateRow.forEach((candidateField, candidateColIndex) => {
          if (candidateField === null) return;
          candidatePositions[candidateField.label] = { col: candidateColIndex, row: candidateRowIndex };
        });
      });

      // on récupère le premier vaisseau et on regarde la position de ceux qui le ciblent
      const frontLine = formation.positions[0];
      const midLine = formation.positions[1];
      const backLine = formation.positions[2];

      const positions = [...formation.positions];
      const reversedPositions = [...formation.positions].reverse();

      let found = false;
      positions.forEach((row, rowIndex) => {
        if (found) return;
        row.forEach((field, colIndex) => {
          if (field === null || found) return;
          found = true;
          candidate.score += attackShips.indexOf('destroyer') > -1 && field.weakness === 'beam' ? 6 : 0;
          candidate.score += attackShips.indexOf('cruiser') > -1 && field.weakness === 'missile' ? 6 : 0;
          candidate.score += 5 - Math.abs(candidatePositions['cruiser'].col - colIndex);
          candidate.score += 5 - Math.abs(candidatePositions['destroyer'].col - colIndex);
          candidate.score -= tankShips.indexOf(field.label) > -1 ? 20 : 0;
        });
      });

      found = false;
      reversedPositions.forEach((row, rowIndex) => {
        if (found) return;
        row.forEach((field, colIndex) => {
          if (field === null || found) return;
          found = true;
          candidate.score += attackShips.indexOf('battleship') > -1 && field.weakness === 'cannon' ? 6 : 0;
          candidate.score += attackShips.indexOf('frigate') > -1 && field.weakness === 'railgun' ? 6 : 0;
          candidate.score += 5 - Math.abs(candidatePositions['frigate'].col - colIndex);
          candidate.score += 5 - Math.abs(candidatePositions['battleship'].col - colIndex);
          candidate.score -= tankShips.indexOf(field.label) > -1 ? 20 : 0;
        });
      });

      // check if destroyers and cruisers are aligned
      // destroyers: Attacks the front squad first. If the distances are the same, it attacks the small ships first
      // cruisers: Attacks the front squad first. If the distances are the same, it attacks the faster ships first
      if (frontLine.filter((field) => field !== null).length) {
        let found = false;
        frontLine.forEach((field, colIndex) => {
          if (field === null || found) return;
          found = true;
          // candidate.score += field.weakness === 'missile' || field.weakness === 'beam' ? 6 : 0;
          // candidate.score += 5 - Math.abs(candidatePositions['cruiser'].col - colIndex);
          // candidate.score += 5 - Math.abs(candidatePositions['destroyer'].col - colIndex);
          // candidate.score += attackShips.indexOf('destroyer') > -1 && attackShips.indexOf('cruiser') > -1 ? 5 : 0;
          // candidate.score -= tankShips.indexOf(field.label) > -1 ? 20 : 0;
          // candidate.score -= (3 - candidatePositions['cruiser'].row) * 2;
          // candidate.score -= (4 - candidatePositions['destroyer'].row) * 2;
        });
      } else if (midLine.filter((field) => field !== null).length) {
        let found = false;
        midLine.forEach((field, colIndex) => {
          if (field === null || found) return;
          found = true;
          // candidate.score += field.weakness === 'missile' || field.weakness === 'beam' ? 6 : 0;
          // candidate.score += 5 - Math.abs(candidatePositions['cruiser'].col - colIndex);
          // candidate.score += 5 - Math.abs(candidatePositions['destroyer'].col - colIndex);
          // candidate.score += attackShips.indexOf('destroyer') > -1 && attackShips.indexOf('cruiser') > -1 ? 5 : 0;
          // candidate.score -= tankShips.indexOf(field.label) > -1 ? 20 : 0;
          // candidate.score -= (2 - candidatePositions['cruiser'].row) * 2;
          // candidate.score -= (3 - candidatePositions['destroyer'].row) * 2;
        });
      } else {
        let found = false;
        backLine.forEach((field, colIndex) => {
          if (field === null || found) return;
          found = true;
          // candidate.score += field.weakness === 'missile' || field.weakness === 'beam' ? 6 : 0;
          // candidate.score += 5 - Math.abs(candidatePositions['cruiser'].col - colIndex);
          // candidate.score += 5 - Math.abs(candidatePositions['destroyer'].col - colIndex);
          // candidate.score += attackShips.indexOf('destroyer') > -1 && attackShips.indexOf('cruiser') > -1 ? 5 : 0;
          // candidate.score -= tankShips.indexOf(field.label) > -1 ? 20 : 0;
          // candidate.score -= (1 - candidatePositions['cruiser'].row) * 2;
          // candidate.score -= (2 - candidatePositions['destroyer'].row) * 2;
        });
      }

      // check if battleships and frigates are aligned
      // battleships: Attack the rear squad first. If the distances are the same, it attacks the large ships first
      // frigates: Attacks the rear squad first. If the distances are the same, it attacks the slower ships first
      if (backLine.filter((field) => field !== null).length) {
        let found = false;
        backLine.forEach((field, colIndex) => {
          if (field === null || found) return;
          found = true;
          // candidate.score += field.weakness === 'cannon' || field.weakness === 'railgun' ? 6 : 0;
          // candidate.score += 5 - Math.abs(candidatePositions['battleship'].col - colIndex);
          // candidate.score += 5 - Math.abs(candidatePositions['frigate'].col - colIndex);
          // candidate.score += attackShips.indexOf('battleship') > -1 && attackShips.indexOf('frigate') > -1 ? 5 : 0;
          // candidate.score -= tankShips.indexOf(field.label) > -1 ? 20 : 0;
          // candidate.score -= (3 - candidatePositions['battleship'].row) * 2;
          // candidate.score -= (4 - candidatePositions['frigate'].row) * 2;
        });
      } else if (midLine.filter((field) => field !== null).length) {
        let found = false;
        midLine.forEach((field, colIndex) => {
          if (field === null || found) return;
          found = true;
          // candidate.score += field.weakness === 'cannon' || field.weakness === 'railgun' ? 6 : 0;
          // candidate.score += 5 - Math.abs(candidatePositions['battleship'].col - colIndex);
          // candidate.score += 5 - Math.abs(candidatePositions['frigate'].col - colIndex);
          // candidate.score += attackShips.indexOf('battleship') > -1 && attackShips.indexOf('frigate') > -1 ? 5 : 0;
          // candidate.score -= tankShips.indexOf(field.label) > -1 ? 20 : 0;
          // candidate.score -= (2 - candidatePositions['battleship'].row) * 2;
          // candidate.score -= (3 - candidatePositions['frigate'].row) * 2;
        });
      } else {
        let found = false;
        frontLine.forEach((field, colIndex) => {
          if (field === null || found) return;
          found = true;
          // candidate.score += field.weakness === 'cannon' || field.weakness === 'railgun' ? 6 : 0;
          // candidate.score += 5 - Math.abs(candidatePositions['battleship'].col - colIndex);
          // candidate.score += 5 - Math.abs(candidatePositions['frigate'].col - colIndex);
          // candidate.score += attackShips.indexOf('battleship') > -1 && attackShips.indexOf('frigate') > -1 ? 5 : 0;
          // candidate.score -= tankShips.indexOf(field.label) > -1 ? 20 : 0;
          // candidate.score -= (1 - candidatePositions['battleship'].row) * 2;
          // candidate.score -= (2 - candidatePositions['frigate'].row) * 2;
        });
      }

      suggestions.push(candidate);
    });

    suggestions.sort((a, b) => b.score - a.score);

    return {
      formation: formation,
      targeting_order: targetingOrder,
      suggestions: suggestions,
    };
  }
}
