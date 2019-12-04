import { Component, OnInit, Inject } from '@angular/core';
import { InitiativeDataService } from '../../Services/InitiativeData/initiative-data.service';
import { Entity } from '../../Models/Entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initiative-modal',
  templateUrl: './initiative-modal.component.html',
  styleUrls: ['./initiative-modal.component.css']
})
export class InitiativeModalComponent implements OnInit {

  entities: Entity[];
  selectedEntity: Entity;

  constructor(
    private initiativeDataService: InitiativeDataService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.entities = this.initiativeDataService.getData();
    this.selectedEntity = this.entities[0];
  }
}
