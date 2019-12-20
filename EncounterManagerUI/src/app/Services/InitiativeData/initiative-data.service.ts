import { Injectable } from '@angular/core';
import { Entity } from '../../Models/Entity';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class InitiativeDataService {

  constructor() { }
  private entity = new Observable<Entity[]>();

  setData(entity: Entity[] ) {
    this.entity = of(entity);
  }

  getData(): Observable<Entity[]> {
    return this.entity;
  }
}
