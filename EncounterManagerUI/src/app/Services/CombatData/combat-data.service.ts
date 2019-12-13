import { Injectable } from '@angular/core';
import { Entity } from '../../Models/Entity';

@Injectable({
  providedIn: 'root'
})
export class CombatDataService {

  constructor() { }
  private currentEntity: Entity;
  private target: Entity;

  setEntity(currentEntity: Entity) {
    this.currentEntity = currentEntity;
  }
  setTarget(target: Entity) {
    this.target = target;
  }

  getCurrentEntity(): Entity {
    return this.currentEntity;
  }

  getTarget(): Entity {
    return this.target;
  }
}
