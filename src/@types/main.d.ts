import * as d2s from '@dschu012/d2s';

export type SaveFileStats = {
  [filename: string]: number | null,
}

export type ItemInSave = {
  item: d2s.types.IItem | null,
  saveName: string[],
}

export type ItemsInSaves = {
  [itemName: string]: ItemInSave,
}

export type SavesHistory = {
  [saveName: string]: {
    items: ItemsInSaves,
  },
}

export type FileReaderResponse = {
  items: ItemsInSaves,
  stats: SaveFileStats,
}

export type SilospenItem = {
  name: string,
  area: string,
  chance: string,
}

export type AllSilospenItems = {
  [itemName: string]: SilospenItem[],
}

/* eslint-disable no-unused-vars */
export enum GameMode {
  Both = 'both',
  Softcore = 'softcore',
  Hardcore = 'hardcore',
  Manual = 'manual',
}
/* eslint-enable no-unused-vars */

export type Settings = {
  saveDir: string,
  lang: string,
  gameMode: GameMode,
  magicFind: Number,
  playersNumber: Number,
}
