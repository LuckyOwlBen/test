import { Component, OnInit } from '@angular/core';
import { Entity } from '../../Models/Entity';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  entity: Entity;
  constructor() { }

  ngOnInit() {
  }

}
