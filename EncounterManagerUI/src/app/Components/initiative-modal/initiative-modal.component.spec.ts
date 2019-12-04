import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativeModalComponent } from './initiative-modal.component';

describe('InitiativeModalComponent', () => {
  let component: InitiativeModalComponent;
  let fixture: ComponentFixture<InitiativeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiativeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
