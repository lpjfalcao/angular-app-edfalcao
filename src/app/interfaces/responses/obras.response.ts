export interface ObrasResponse {
  obras: ObraContainer[];
}

export interface ObraContainer {
  Id: number;
  Obra: ObraDetails;
}

export interface ObraDetails {
  ImageUrl: string;
  Title: string;
}