
export interface BiografiaResponse {
  biografia: BiografiaContainer[];
}

export interface BiografiaContainer {
  Id: number;
  Bio: BioDetails;
}

export interface BioDetails {
  Description: string;
  Foto: string;
}


