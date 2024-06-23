import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerDataService {
  constructor() {}
  private playerData: {
    name?: string;
    email?: string;
    score?: number;
    id?: number;
  } = {};

  setPlayerData(data: {
    name: string;
    email: string;
    score?: number;
    id?: number;
  }): void {
    this.playerData.name = data.name;
    this.playerData.email = data.email;
    this.playerData.score = data.score;
    this.playerData.id = data.id;
  }

  getPlayerData(): { name?: string; email?: string; score?: number } {
    return this.playerData;
  }
  getPlayerDataById(id: number): {
    name?: string;
    email?: string;
    score?: number;
  } {
    return this.playerData;
  }
}
