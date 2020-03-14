import { Injectable } from '@angular/core';
import { Monster } from '../../Models/MonsterModel/Monster';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MonsterSearch {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://www.dnd5eapi.co/api/monsters/';

  searchMonster(monster: string) {
    const url = this.baseUrl + monster;
    return this.http.get<Monster>(url);
  }
}
