import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfflictionModalComponent } from './affliction-modal.component';

describe('AfflictionModalComponent', () => {
  let component: AfflictionModalComponent;
  let fixture: ComponentFixture<AfflictionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfflictionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfflictionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
