export class RadarPositoin {
  long?: number;
  let?: number;
}

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



