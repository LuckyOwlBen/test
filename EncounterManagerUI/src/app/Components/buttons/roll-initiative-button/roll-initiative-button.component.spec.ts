import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollInitiativeButtonComponent } from './roll-initiative-button.component';

describe('RollInitiativeButtonComponent', () => {
  let component: RollInitiativeButtonComponent;
  let fixture: ComponentFixture<RollInitiativeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollInitiativeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollInitiativeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
