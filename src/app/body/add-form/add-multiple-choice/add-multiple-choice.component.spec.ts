import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMultipleChoiceComponent } from './add-multiple-choice.component';

describe('AddMultipleChoiceComponent', () => {
  let component: AddMultipleChoiceComponent;
  let fixture: ComponentFixture<AddMultipleChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMultipleChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMultipleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
