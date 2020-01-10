import { Component, ViewChild } from '@angular/core';
import { AddPlayerComponent } from '../../components/add-player/add-player.component';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent {

  constructor() { }

  @ViewChild (AddPlayerComponent, {static:true})
  addPlayer: AddPlayerComponent;

}
