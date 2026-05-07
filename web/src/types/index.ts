export interface RiftboundContentDTO {
  game: string;
  version: string;
  lastUpdated: string;
  sets: SetDTO[];
}

export interface SetDTO {
  id: string;
  version: string;
  lastUpdated: string;
  sets: CardDTO[];
}

export interface CardDTO {
  id: string;
  collectorNumber: number;
  set: string;
  name: string;
  description: string;
  type: string;
  rarity: string;
  faction: string;
  stats: CardStatsDTO;
  keywords: string[];
  art: CardArtDTO;
  flavorText: string;
  tags: string[];
}

export interface CardStatsDTO {
  energy: number;
  might: number;
  cost: number;
  power: number;
}

export interface CardArtDTO {
  thumbnailURL: string;
  fullURL: string;
  artist: string;
}
