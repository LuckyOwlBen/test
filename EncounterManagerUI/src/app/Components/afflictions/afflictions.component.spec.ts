import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfflictionsComponent } from './afflictions.component';

describe('AfflictionsComponent', () => {
  let component: AfflictionsComponent;
  let fixture: ComponentFixture<AfflictionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfflictionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfflictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
