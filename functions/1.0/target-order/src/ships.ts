import { FleetFormations } from './formations';

interface Ships {
  label: string;
  size: number;
  mobility: number;
  weapon: string;
  weakness: string;
  behavior: ShipBehaviors;
  getTargetingOrder(formation: FleetFormations): Array<any>;
}

interface FlagShips {
  label: string;
  size: number;
}

interface ShipBehaviors {
  label: string;
  description: string;
}

export class Frigate implements Ships {
  label = 'frigate';
  size = 1;
  mobility = 80;
  weapon = 'railgun';
  weakness = 'beam';
  behavior = {
    label: 'Rear → Front, Slower Ship → Faster Ship',
    description: 'Attacks the rear squad first. If the distances are the same, it attacks the slower ships first',
  };
  getTargetingOrder(formation: FleetFormations) {
    const targetOrder = [];
    var positions = [...formation.positions];
    // Attacks the rear squad first
    positions.reverse();

    positions.forEach((row: Array<any>) => {
      var targets = row.filter((field) => field !== null);
      if (targets.length === 0) return; // nothing to target

      // target slower first
      // bs:72 - fr:80 = -8
      targets.sort((a, b) => a.mobility - b.mobility);

      targets.map((target) => targetOrder.push(target));
    });
    return targetOrder;
  }
}

export class Destroyer implements Ships {
  label = 'destroyer';
  size = 2;
  mobility = 76;
  weapon = 'beam';
  weakness = 'missile';
  behavior = {
    label: 'Front → Rear, Small Ship → Large Ship',
    description: 'Attacks the front squad first. If the distances are the same, it attacks the small ships first',
  };
  getTargetingOrder(formation: FleetFormations) {
    const targetOrder = [];
    var positions = [...formation.positions];

    positions.forEach((row: Array<any>) => {
      var targets = row.filter((field) => field !== null);
      if (targets.length === 0) return; // nothing to target

      // target smaller first
      // bs:5 - fr:1 = 4
      targets.sort((a, b) => a.size - b.size);

      targets.map((target) => targetOrder.push(target));
    });
    return targetOrder;
  }
}

export class Cruiser implements Ships {
  label = 'cruiser';
  size = 3;
  mobility = 72;
  weapon = 'missile';
  weakness = 'cannon';
  behavior = {
    label: 'Front → Rear, Faster Ship → Slower Ship',
    description: 'Attacks the front squad first. If the distances are the same, it attacks the faster ships first',
  };
  getTargetingOrder(formation: FleetFormations) {
    const targetOrder = [];
    var positions = [...formation.positions];

    positions.forEach((row: Array<any>) => {
      var targets = row.filter((field) => field !== null);
      if (targets.length === 0) return; // nothing to target

      // target faster first
      // fr:80 - bs:72 = 8
      targets.sort((a, b) => b.mobility - a.mobility);

      targets.map((target) => targetOrder.push(target));
    });
    return targetOrder;
  }
}

export class Battleship implements Ships {
  label = 'battleship';
  size = 5;
  mobility = 68;
  weapon = 'cannon';
  weakness = 'railgun';
  behavior = {
    label: 'Rear → Front, Large Ship → Small Ship',
    description: 'Attack the rear squad first. If the distances are the same, it attacks the large ships first',
  };
  getTargetingOrder(formation: FleetFormations) {
    const targetOrder = [];
    var positions = [...formation.positions];
    positions.reverse();

    positions.forEach((row: Array<any>) => {
      var targets = row.filter((field) => field !== null);
      if (targets.length === 0) return; // nothing to target

      // target larger first
      // fr:1 - bs:5 = -4
      targets.sort((a, b) => b.size - a.size);

      targets.map((target) => targetOrder.push(target));
    });
    return targetOrder;
  }
}

export class FlagShip implements FlagShips {
  label = 'flagship';
  size = 10;
}
