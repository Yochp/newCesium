import {Observable} from 'rxjs';

export interface RadarPositoin {
  lon: number;
  lat: number;
  id: string;
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



