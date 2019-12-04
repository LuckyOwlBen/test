import { Injectable } from '@angular/core';
import { Entity } from '../Models/Entity';
@Injectable({providedIn: 'root'})
export class RollInitiativeService {

  constructor() { }
  private entity: Entity[] = undefined;

  setData(entity: Entity[] ) {
    this.entity = entity;
  }

  getData(): Entity[] {
    return this.entity;
  }

}
