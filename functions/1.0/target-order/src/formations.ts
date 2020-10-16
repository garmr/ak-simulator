import { Frigate, Destroyer, Cruiser, Battleship, FlagShip } from './ships';

export interface FleetFormations {
  label: string;
  shortcut: string;
  positions: any;
}

export class StraightLine implements FleetFormations {
  label = 'straight line formation';
  shortcut = 'straight-line';
  positions = [
    [null, null, null, null, null],
    [new Destroyer(), new Battleship(), new FlagShip(), new Cruiser(), new Frigate()],
    [null, null, null, null, null],
  ];
}

export class HighSpeed implements FleetFormations {
  label = 'high speed formation';
  shortcut = 'high-speed';
  positions = [
    [null, null, new FlagShip(), null, null],
    [null, new Destroyer(), null, new Frigate(), null],
    [new Battleship(), null, null, null, new Cruiser()],
  ];
}

export class WipeOut implements FleetFormations {
  label = 'wipe out formation';
  shortcut = 'wipe-out';
  positions = [
    [new Destroyer(), null, null, null, new Frigate()],
    [null, null, null, null, null],
    [null, new Battleship(), new FlagShip(), new Cruiser(), null],
  ];
}

export class Guard implements FleetFormations {
  label = 'guard formation';
  shortcut = 'guard';
  positions = [
    [null, null, new FlagShip(), null, null],
    [null, new Destroyer(), null, null, new Frigate()],
    [new Battleship(), null, null, new Cruiser(), null],
  ];
}

export class AttackFocus implements FleetFormations {
  label = 'attack focus formation';
  shortcut = 'attack-focus';
  positions = [
    [null, new Destroyer(), null, new Frigate(), null],
    [new Battleship(), null, null, null, new Cruiser()],
    [null, null, new FlagShip(), null, null],
  ];
}

export class RailGunFocus implements FleetFormations {
  label = 'rail gun focus formation';
  shortcut = 'rail-gun-focus';
  positions = [
    [null, null, new FlagShip(), null, null],
    [new Destroyer(), null, null, null, new Frigate()],
    [null, new Battleship(), null, new Cruiser(), null],
  ];
}

export class BeamFocus implements FleetFormations {
  label = 'beam focus formation';
  shortcut = 'beam-focus';
  positions = [
    [new Cruiser(), null, new Destroyer(), null, new Frigate()],
    [null, null, null, null, null],
    [null, new FlagShip(), null, new Battleship(), null],
  ];
}

export class MissileFocus implements FleetFormations {
  label = 'missile focus formation';
  shortcut = 'missile-focus';
  positions = [
    [new Destroyer(), null, null, null, new Frigate()],
    [null, new Battleship(), null, new Cruiser(), null],
    [null, null, new FlagShip(), null, null],
  ];
}

export class CannonFocus implements FleetFormations {
  label = 'cannon focus formation';
  shortcut = 'cannon-focus';
  positions = [
    [null, null, new Frigate(), null, null],
    [new Battleship(), null, null, null, new Destroyer()],
    [null, new Cruiser(), null, new FlagShip(), null],
  ];
}

export class RailGunBarrage implements FleetFormations {
  label = 'rail gun barrage formation';
  shortcut = 'rail-gun-barrage';
  positions = [
    [null, null, null, null, null],
    [null, new Destroyer(), new FlagShip(), new Frigate(), null],
    [new Battleship(), null, null, null, new Cruiser()],
  ];
}

export class MissileChannel implements FleetFormations {
  label = 'missile channel formation';
  shortcut = 'missile-channel';
  positions = [
    [new Destroyer(), null, null, null, new Frigate()],
    [null, new Battleship(), new FlagShip(), new Cruiser(), null],
    [null, null, null, null, null],
  ];
}

export class BeamChannel implements FleetFormations {
  label = 'beam channel formation';
  shortcut = 'beam-channel';
  positions = [
    [null, null, new Destroyer(), null, null],
    [null, null, null, null, null],
    [new Battleship(), new Cruiser(), null, new FlagShip(), new Frigate()],
  ];
}

export class CannonBarrage implements FleetFormations {
  label = 'cannon barrage formation';
  shortcut = 'cannon-barrage';
  positions = [
    [null, null, new Frigate(), null, null],
    [null, null, new Destroyer(), null, null],
    [new Battleship(), null, new FlagShip(), null, new Cruiser()],
  ];
}

export class RailGunDrill implements FleetFormations {
  label = 'rail gun drill formation';
  shortcut = 'rail-gun-drill';
  positions = [
    [null, null, new FlagShip(), null, null],
    [null, new Destroyer(), null, new Frigate(), null],
    [null, new Battleship(), null, new Cruiser(), null],
  ];
}

export class BeamBarrage implements FleetFormations {
  label = 'beam barrage formation';
  shortcut = 'beam-barrage';
  positions = [
    [null, null, new FlagShip(), null, null],
    [new Destroyer(), null, null, null, new Frigate()],
    [new Battleship(), null, null, null, new Cruiser()],
  ];
}

export class MissileAiming implements FleetFormations {
  label = 'missile aiming formation';
  shortcut = 'missile-aiming';
  positions = [
    [null, null, new FlagShip(), null, null],
    [new Frigate(), null, new Cruiser(), null, new Destroyer()],
    [null, null, new Battleship(), null, null],
  ];
}

export class CannonChannel implements FleetFormations {
  label = 'cannon channel formation';
  shortcut = 'cannonc-channel';
  positions = [
    [null, null, new FlagShip(), null, null],
    [null, new Frigate(), new Battleship(), new Destroyer(), null],
    [null, null, new Cruiser(), null, null],
  ];
}

export class RailGunChannel implements FleetFormations {
  label = 'rail gun channel formation';
  shortcut = 'rail-gun-channel';
  positions = [
    [null, null, new FlagShip(), null, null],
    [null, null, new Frigate(), null, null],
    [null, new Battleship(), new Destroyer(), new Cruiser(), null],
  ];
}

export class BeamDrill implements FleetFormations {
  label = 'beam drill formation';
  shortcut = 'beam-drill';
  positions = [
    [null, null, null, new Frigate(), null],
    [null, null, new Destroyer(), null, null],
    [null, new Cruiser(), new FlagShip(), new Battleship(), null],
  ];
}

export class MissileBarrage implements FleetFormations {
  label = 'missile barrage formation';
  shortcut = 'missile-barrage';
  positions = [
    [null, null, null, null, null],
    [null, null, new FlagShip(), null, null],
    [new Battleship(), new Cruiser(), null, new Destroyer(), new Frigate()],
  ];
}

export class CannonAiming implements FleetFormations {
  label = 'cannon aiming formation';
  shortcut = 'cannon-aiming';
  positions = [
    [null, new Destroyer(), null, new Frigate(), null],
    [null, null, new Cruiser(), null, null],
    [null, new Battleship(), null, new FlagShip(), null],
  ];
}

export class DoubleFort implements FleetFormations {
  label = 'double fort formation';
  shortcut = 'double-fort';
  positions = [
    [null, new Destroyer(), null, new Frigate(), null],
    [null, null, new FlagShip(), null, null],
    [new Battleship(), null, null, null, new Cruiser()],
  ];
}

export class RailGunFort implements FleetFormations {
  label = 'rail gun fort formation';
  shortcut = 'rail-gun';
  positions = [
    [null, null, null, null, null],
    [null, new Destroyer(), null, new Frigate(), null],
    [new Battleship(), null, new FlagShip(), null, new Cruiser()],
  ];
}

export class BeamFort implements FleetFormations {
  label = 'beam fort formation';
  shortcut = 'beam-fort';
  positions = [
    [new Battleship(), new Destroyer(), null, new Frigate(), new Cruiser()],
    [null, null, null, null, null],
    [null, null, new FlagShip(), null, null],
  ];
}

export class MissileFort implements FleetFormations {
  label = 'missile fort formation';
  shortcut = 'missile-fort';
  positions = [
    [null, new Destroyer(), null, new Frigate(), null],
    [null, null, null, null, null],
    [null, new Battleship(), new FlagShip(), new Cruiser(), null],
  ];
}

export class CannonFort implements FleetFormations {
  label = 'cannon fort formation';
  shortcut = 'cannon-fort';
  positions = [
    [null, new Destroyer(), null, new Frigate(), null],
    [null, new Battleship(), new FlagShip(), new Cruiser(), null],
    [null, null, null, null, null],
  ];
}

export class RailGunEvasion implements FleetFormations {
  label = 'rail gun evasion formation';
  shortcut = 'rail-gun-evasion';
  positions = [
    [null, new Destroyer(), null, new Frigate(), null],
    [null, null, null, null, null],
    [new Battleship(), null, new FlagShip(), null, new Cruiser()],
  ];
}

export class BeamEvasion implements FleetFormations {
  label = 'beam evasion formation';
  shortcut = 'beam-evasion';
  positions = [
    [null, null, null, null, null],
    [new Battleship(), new Destroyer(), null, new Frigate(), new Cruiser()],
    [null, null, new FlagShip(), null, null],
  ];
}

export class MissileEvasion implements FleetFormations {
  label = 'missile evasion formation';
  shortcut = 'missile-evasion';
  positions = [
    [null, null, null, null, null],
    [new Destroyer(), null, null, null, new Frigate()],
    [null, new Battleship(), new FlagShip(), new Cruiser(), null],
  ];
}

export class CannonEvasion implements FleetFormations {
  label = 'cannon evasion formation';
  shortcut = 'cannon-evasion';
  positions = [
    [new Destroyer(), null, null, null, new Frigate()],
    [null, null, null, null, null],
    [new Battleship(), null, new FlagShip(), null, new Cruiser()],
  ];
}
