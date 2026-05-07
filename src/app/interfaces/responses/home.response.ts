export interface HomeResponse {
  homeBio: HomeBioContainer;
  homeDestaques: HomeDestaqueContainer[];
  homeEventos: HomeEventoContainer[];
  homeObrasPrincipais: HomeObraContainer[];
  homeObrasFlix: HomeObraContainer[];
}

// --- Seção Bio ---
export interface HomeBioContainer {
  Id: number;
  Bio: BioContent;
}

export interface BioContent {
  ImageUrl: string;
  Description: string;
}

// --- Seção Destaques ---
export interface HomeDestaqueContainer {
  Id: number;
  Destaque: DestaqueContent;
}

export interface DestaqueContent {
  ImageUrl: string;
  Title: string;
}

// --- Seção Eventos ---
export interface HomeEventoContainer {
  Id: number;
  Evento: EventoContent;
}

export interface EventoContent {
  Description: string;
  ImageUrl: string;
  Title: string;
}

// --- Seção Obras Principais ---
export interface HomeObraContainer {
  Id: number;
  Obra: ObraContent;
}

export interface ObraContent {
  ImageUrl: string;
  Categoria: string;
}