import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonsComponent } from './form-persons.component';

describe('FormPersonsComponent', () => {
  let component: FormPersonsComponent;
  let fixture: ComponentFixture<FormPersonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPersonsComponent]
    });
    fixture = TestBed.createComponent(FormPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
