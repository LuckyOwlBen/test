import { Component, OnInit } from '@angular/core';
import { Monster } from '../../../Models/MonsterModel/Monster';
import { MonsterSearch } from '../../../Services/MonsterSearch/monster-search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-search-monster-component',
  templateUrl: './search-monster-component.component.html',
  styleUrls: ['./search-monster-component.component.css']
})
export class SearchMonsterComponentComponent implements OnInit {

  constructor(
    private monsterSearch: MonsterSearch
  ) { }
  monster: Monster;
  name: string;


  ngOnInit() {
  }

  getMonster(name: string) {
    this.monsterSearch.searchMonster(name).subscribe((data: Monster) => this.monster = { ...data });
  }

}
