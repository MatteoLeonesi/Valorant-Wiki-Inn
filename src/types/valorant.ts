export type Agents = {
  status: number;
  data: Agent[];
};

export type Agent = {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags?: string[] | null;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait?: string | null;
  fullPortrait?: string | null;
  fullPortraitV2?: string | null;
  killfeedPortrait: string;
  background?: string | null;
  backgroundGradientColors?: string[] | null;
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role?: Role | null;
  abilities?: Abilities[] | null;
  voiceLine: VoiceLine;
};

export type Weapons = {
  status: number;
  data: Weapon[];
};

export type Weapon = {
  uuid: string;
  displayName: string;
  description?: string;
  displayIcon?: string
  skins?: Skins[] | null
};


export type Role = {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
};

export type Abilities = {
  slot: string;
  displayName: string;
  description: string;
  displayIcon?: string | null;
};

export type Skins = {
  fullRender: string;
  chromas: string,
}
export type VoiceLine = {
  minDuration: number;
  maxDuration: number;
  mediaList?: MediaItem[] | null;
};
export type MediaItem = {
  id: number;
  wwise: string;
  wave: string;
};
