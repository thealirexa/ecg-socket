export interface EcgDataModel {
  id: number;
  data: Data;
}

export interface Data {
  ecg: number[];
  location: number[];
  battery: number;
}
