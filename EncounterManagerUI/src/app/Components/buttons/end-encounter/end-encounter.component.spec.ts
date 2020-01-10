import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndEncounterComponent } from './end-encounter.component';

describe('EndEncounterComponent', () => {
  let component: EndEncounterComponent;
  let fixture: ComponentFixture<EndEncounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndEncounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
