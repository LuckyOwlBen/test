import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Entity } from '../../Models/Entity';

@Injectable({
  providedIn: 'root'
})
export class CombatDataService {

  constructor() { }
  private entity = new Observable<Entity[]>();
  private currentEntity: Entity;
  private target: Entity;

  setEntity(currentEntity: Entity) {
    this.currentEntity = currentEntity;
  }
  setTarget(target: Entity) {
    this.target = target;
  }
  setEntities(entity: Entity[] ) {
    this.entity = of(entity);
  }
  getCurrentEntity(): Entity {
    return this.currentEntity;
  }
  getTarget(): Entity {
    return this.target;
  }
  getEntities(): Observable<Entity[]> {
    return this.entity;
  }
}
