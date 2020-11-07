import { Frigate, Destroyer, Cruiser, Battleship, FlagShip } from './ships';

export interface FleetFormations {
  label: string;
  shortcut: string;
  bonus: string;
  bonusMatrix?: Array<{
    level: number;
    value: number;
  }>;
  positions: any;
}

const bonusMatrixPercentageSet3 = [{ level: 1, value: 3 }];

const bonusMatrixPercentageSet10 = [{ level: 1, value: 10 }];

const bonusMatrixPercentageSet15 = [{ level: 1, value: 15 }];

const bonusMatrixPercentageSet30 = [{ level: 1, value: 30 }];

const bonusMatrixPercentageSet40 = [{ level: 1, value: 40 }];

const bonusMatrixAbsoluteSet300 = [{ level: 1, value: 300 }];

export class StraightLine implements FleetFormations {
  label = 'straight line formation';
  shortcut = 'straight-line';
  bonus = 'Fleet attack power +%s%';
  bonusMatrix = bonusMatrixPercentageSet3;
  positions = [
    [null, null, null, null, null],
    [new Destroyer(), new Battleship(), new FlagShip(), new Cruiser(), new Frigate()],
    [null, null, null, null, null],
  ];
}

export class HighSpeed implements FleetFormations {
  label = 'high speed formation';
  shortcut = 'high-speed';
  bonus = 'marching speed +%s%';
  bonusMatrix = bonusMatrixPercentageSet15;
  positions = [
    [null, null, new FlagShip(), null, null],
    [null, new Destroyer(), null, new Frigate(), null],
    [new Battleship(), null, null, null, new Cruiser()],
  ];
}

export class WipeOut implements FleetFormations {
  label = 'wipe out formation';
  shortcut = 'wipe-out';
  bonus = 'enemy fleet destruction rate +%s';
  bonusMatrix = bonusMatrixAbsoluteSet300;
  positions = [
    [new Destroyer(), null, null, null, new Frigate()],
    [null, null, null, null, null],
    [null, new Battleship(), new FlagShip(), new Cruiser(), null],
  ];
}

export class Guard implements FleetFormations {
  label = 'guard formation';
  shortcut = 'guard';
  bonus = 'fleet damage prevention +%s';
  bonusMatrix = bonusMatrixAbsoluteSet300;
  positions = [
    [null, null, new FlagShip(), null, null],
    [null, new Destroyer(), null, null, new Frigate()],
    [new Battleship(), null, null, new Cruiser(), null],
  ];
}

export class AttackFocus implements FleetFormations {
  label = 'attack focus formation';
  shortcut = 'attack-focus';
  bonus = 'fleet attack power +%s%';
  bonusMatrix = bonusMatrixPercentageSet10;
  positions = [
    [null, new Destroyer(), null, new Frigate(), null],
    [new Battleship(), null, null, null, new Cruiser()],
    [null, null, new FlagShip(), null, null],
  ];
}

export class RailGunFocus implements FleetFormations {
  label = 'rail gun focus formation';
  shortcut = 'rail-gun-focus';
  bonus = 'rail gun attack power +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, null, new FlagShip(), null, null],
    [new Destroyer(), null, null, null, new Frigate()],
    [null, new Battleship(), null, new Cruiser(), null],
  ];
}

export class BeamFocus implements FleetFormations {
  label = 'beam focus formation';
  shortcut = 'beam-focus';
  bonus = 'beam attack power +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [new Cruiser(), null, new Destroyer(), null, new Frigate()],
    [null, null, null, null, null],
    [null, new FlagShip(), null, new Battleship(), null],
  ];
}

export class MissileFocus implements FleetFormations {
  label = 'missile focus formation';
  shortcut = 'missile-focus';
  bonus = 'missile attack power +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [new Destroyer(), null, null, null, new Frigate()],
    [null, new Battleship(), null, new Cruiser(), null],
    [null, null, new FlagShip(), null, null],
  ];
}

export class CannonFocus implements FleetFormations {
  label = 'cannon focus formation';
  shortcut = 'cannon-focus';
  bonus = 'cannon attack power +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, null, new Frigate(), null, null],
    [new Battleship(), null, null, null, new Destroyer()],
    [null, new Cruiser(), null, new FlagShip(), null],
  ];
}

export class RailGunBarrage implements FleetFormations {
  label = 'rail gun barrage formation';
  shortcut = 'rail-gun-barrage';
  bonus = 'rail gun attack speed +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, null, null, null, null],
    [null, new Destroyer(), new FlagShip(), new Frigate(), null],
    [new Battleship(), null, null, null, new Cruiser()],
  ];
}

export class MissileChannel implements FleetFormations {
  label = 'missile channel formation';
  shortcut = 'missile-channel';
  bonus = 'missile critical damage +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [new Destroyer(), null, null, null, new Frigate()],
    [null, new Battleship(), new FlagShip(), new Cruiser(), null],
    [null, null, null, null, null],
  ];
}

export class BeamChannel implements FleetFormations {
  label = 'beam channel formation';
  shortcut = 'beam-channel';
  bonus = 'beam critical damage +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, null, new Destroyer(), null, null],
    [null, null, null, null, null],
    [new Battleship(), new Cruiser(), null, new FlagShip(), new Frigate()],
  ];
}

export class CannonBarrage implements FleetFormations {
  label = 'cannon barrage formation';
  shortcut = 'cannon-barrage';
  bonus = 'cannon attack speed +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, null, new Frigate(), null, null],
    [null, null, new Destroyer(), null, null],
    [new Battleship(), null, new FlagShip(), null, new Cruiser()],
  ];
}

export class RailGunDrill implements FleetFormations {
  label = 'rail gun drill formation';
  shortcut = 'rail-gun-drill';
  bonus = 'rail gun penetration +%s%';
  bonusMatrix = bonusMatrixPercentageSet30;
  positions = [
    [null, null, new FlagShip(), null, null],
    [null, new Destroyer(), null, new Frigate(), null],
    [null, new Battleship(), null, new Cruiser(), null],
  ];
}

export class BeamBarrage implements FleetFormations {
  label = 'beam barrage formation';
  shortcut = 'beam-barrage';
  bonus = 'beam attack speed +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, null, new FlagShip(), null, null],
    [new Destroyer(), null, null, null, new Frigate()],
    [new Battleship(), null, null, null, new Cruiser()],
  ];
}

export class MissileAiming implements FleetFormations {
  label = 'missile aiming formation';
  shortcut = 'missile-aiming';
  bonus = 'missile accuracy +%s%';
  bonusMatrix = bonusMatrixPercentageSet30;
  positions = [
    [null, null, new FlagShip(), null, null],
    [new Frigate(), null, new Cruiser(), null, new Destroyer()],
    [null, null, new Battleship(), null, null],
  ];
}

export class CannonChannel implements FleetFormations {
  label = 'cannon channel formation';
  shortcut = 'cannon-channel';
  bonus = 'critical chance for cannon +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, null, new FlagShip(), null, null],
    [null, new Frigate(), new Battleship(), new Destroyer(), null],
    [null, null, new Cruiser(), null, null],
  ];
}

export class RailGunChannel implements FleetFormations {
  label = 'rail gun channel formation';
  shortcut = 'rail-gun-channel';
  bonus = 'critical chance for rail gun +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, null, new FlagShip(), null, null],
    [null, null, new Frigate(), null, null],
    [null, new Battleship(), new Destroyer(), new Cruiser(), null],
  ];
}

export class BeamDrill implements FleetFormations {
  label = 'beam drill formation';
  shortcut = 'beam-drill';
  bonus = 'beam penetration +%s%';
  bonusMatrix = bonusMatrixPercentageSet30;
  positions = [
    [null, null, null, new Frigate(), null],
    [null, null, new Destroyer(), null, null],
    [null, new Cruiser(), new FlagShip(), new Battleship(), null],
  ];
}

export class MissileBarrage implements FleetFormations {
  label = 'missile barrage formation';
  shortcut = 'missile-barrage';
  bonus = 'missile attack speed +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, null, null, null, null],
    [null, null, new FlagShip(), null, null],
    [new Battleship(), new Cruiser(), null, new Destroyer(), new Frigate()],
  ];
}

export class CannonAiming implements FleetFormations {
  label = 'cannon aiming formation';
  shortcut = 'cannon-aiming';
  bonus = 'cannon accuracy +%s%';
  bonusMatrix = bonusMatrixPercentageSet30;
  positions = [
    [null, new Destroyer(), null, new Frigate(), null],
    [null, null, new Cruiser(), null, null],
    [null, new Battleship(), null, new FlagShip(), null],
  ];
}

export class DoubleFort implements FleetFormations {
  label = 'double fort formation';
  shortcut = 'double-fort';
  bonus = 'all weapon resistance +%s%';
  bonusMatrix = bonusMatrixPercentageSet10;
  positions = [
    [null, new Destroyer(), null, new Frigate(), null],
    [null, null, new FlagShip(), null, null],
    [new Battleship(), null, null, null, new Cruiser()],
  ];
}

export class RailGunFort implements FleetFormations {
  label = 'rail gun fort formation';
  shortcut = 'rail-gun-fort';
  bonus = 'rail gun resistance +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, null, null, null, null],
    [null, new Destroyer(), null, new Frigate(), null],
    [new Battleship(), null, new FlagShip(), null, new Cruiser()],
  ];
}

export class BeamFort implements FleetFormations {
  label = 'beam fort formation';
  shortcut = 'beam-fort';
  bonus = 'beam resistance +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [new Battleship(), new Destroyer(), null, new Frigate(), new Cruiser()],
    [null, null, null, null, null],
    [null, null, new FlagShip(), null, null],
  ];
}

export class MissileFort implements FleetFormations {
  label = 'missile fort formation';
  shortcut = 'missile-fort';
  bonus = 'missile resistance +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, new Destroyer(), null, new Frigate(), null],
    [null, null, null, null, null],
    [null, new Battleship(), new FlagShip(), new Cruiser(), null],
  ];
}

export class CannonFort implements FleetFormations {
  label = 'cannon fort formation';
  shortcut = 'cannon-fort';
  bonus = 'cannon resistance +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, new Destroyer(), null, new Frigate(), null],
    [null, new Battleship(), new FlagShip(), new Cruiser(), null],
    [null, null, null, null, null],
  ];
}

export class RailGunEvasion implements FleetFormations {
  label = 'rail gun evasion formation';
  shortcut = 'rail-gun-evasion';
  bonus = 'rail gun evasion +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, new Destroyer(), null, new Frigate(), null],
    [null, null, null, null, null],
    [new Battleship(), null, new FlagShip(), null, new Cruiser()],
  ];
}

export class BeamEvasion implements FleetFormations {
  label = 'beam evasion formation';
  shortcut = 'beam-evasion';
  bonus = 'beam evasion +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, null, null, null, null],
    [new Battleship(), new Destroyer(), null, new Frigate(), new Cruiser()],
    [null, null, new FlagShip(), null, null],
  ];
}

export class MissileEvasion implements FleetFormations {
  label = 'missile evasion formation';
  shortcut = 'missile-evasion';
  bonus = 'missile evasion +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [null, null, null, null, null],
    [new Destroyer(), null, null, null, new Frigate()],
    [null, new Battleship(), new FlagShip(), new Cruiser(), null],
  ];
}

export class CannonEvasion implements FleetFormations {
  label = 'cannon evasion formation';
  shortcut = 'cannon-evasion';
  bonus = 'cannon evasion +%s%';
  bonusMatrix = bonusMatrixPercentageSet40;
  positions = [
    [new Destroyer(), null, null, null, new Frigate()],
    [null, null, null, null, null],
    [new Battleship(), null, new FlagShip(), null, new Cruiser()],
  ];
}
