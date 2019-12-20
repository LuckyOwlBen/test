import { Component, OnInit,ViewChild } from '@angular/core';
import { AddPlayerComponent } from '../add-player/add-player.component';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  constructor() { }
  @ViewChild (AddPlayerComponent, {static:true})
  addPlayer: AddPlayerComponent;

  ngOnInit() {
  }

}
