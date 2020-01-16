import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Entity } from '../../Models/Entity';

@Injectable({
  providedIn: 'root'
})
export class CombatDataService {

  constructor() { }
  private entity = new BehaviorSubject<Entity[]>([]);
  private currentEntity = new BehaviorSubject<Entity>(new Entity());
  private target = new BehaviorSubject<Entity>(new Entity());

  setEntity(currentEntity: Entity) {
    this.currentEntity.next(currentEntity);
  }
  setTarget(target: Entity) {
    this.target.next(target);
  }
  setEntities(entity: Entity[] ) {
    this.entity.next(entity);
  }
  getCurrentEntity(): BehaviorSubject<Entity> {
    return this.currentEntity;
  }
  getTarget(): BehaviorSubject<Entity> {
    return this.target;
  }
  getEntities(): BehaviorSubject<Entity[]> {
    return this.entity;
  }
}
