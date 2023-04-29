import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLandingComponent } from './form-landing.component';

describe('FormLandingComponent', () => {
  let component: FormLandingComponent;
  let fixture: ComponentFixture<FormLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
