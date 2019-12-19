import { Injectable } from '@angular/core';
import { Entity } from '../../Models/Entity';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class InitiativeDataService {

  constructor() { }
  private entity = new Observable<Entity[]>();

  setData(entity: Observable<Entity[]> ) {
    this.entity = entity;
  }

  getData(): Observable<Entity[]> {
    return this.entity;
  }
}
