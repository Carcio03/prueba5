import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPersonsComponent } from './control-persons.component';

describe('ControlPersonsComponent', () => {
  let component: ControlPersonsComponent;
  let fixture: ComponentFixture<ControlPersonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPersonsComponent]
    });
    fixture = TestBed.createComponent(ControlPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
