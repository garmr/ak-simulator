import { Frigate, Destroyer, Cruiser, Battleship, FlagShip } from './ships';

export interface FleetFormations {
  label: string;
  shortcut: string;
  positions: any;
}

export class StraightLine implements FleetFormations {
  label = 'straight line formation';
  shortcut = 'sl';
  positions = [
    [null, null, null, null, null],
    [new Destroyer(), new Battleship(), new FlagShip(), new Cruiser(), new Frigate()],
    [null, null, null, null, null],
  ];
}

export class HighSpeed implements FleetFormations {
  label = 'high speed formation';
  shortcut = 'hs';
  positions = [
    [null, null, new FlagShip(), null, null],
    [null, new Destroyer(), null, new Frigate(), null],
    [new Battleship(), null, null, null, new Cruiser()],
  ];
}

// 10*9 formations, h3*5l positions
//
//
//
// var wipeOut = {
//   label: "wipe out formation",
//   positions : [
//     [null,null,flagship,null,null],
//     [null,destroyer,null,frigate,null],
//     [battleship,null,null,null,cruiser]
//   ]
// };
//
// var guard = {
//   label: "guard formation",
//   positions : [
//     [null,null,flagship,null,null],
//     [null,destroyer,null,frigate,null],
//     [battleship,null,null,null,cruiser]
//   ]
// };
