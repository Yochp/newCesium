// export class Radar {
//   // id: number;
//   name?: string;
//   // location: string;
//   long?: number;
//   let?: number;
//
//   constructor() {
//
//   }
// }

export interface Radar {
  id: string;
  name: string;
  position: Position;
}


export interface Position {
  lat: number;
  lon: number;
  alt: number;
}
