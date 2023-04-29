import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRatingQuestionComponent } from './add-rating-question.component';

describe('AddRatingQuestionComponent', () => {
  let component: AddRatingQuestionComponent;
  let fixture: ComponentFixture<AddRatingQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRatingQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRatingQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
