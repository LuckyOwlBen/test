import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-roll-initiative',
  templateUrl: './roll-initiative.component.html',
  styleUrls: ['./roll-initiative.component.css']
})
export class RollInitiativeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  rollInitiative() {
    this.router.navigate(['/combat']);
  }

}
