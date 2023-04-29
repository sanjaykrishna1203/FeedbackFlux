import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpenQuestionComponent } from './add-open-question.component';

describe('AddOpenQuestionComponent', () => {
  let component: AddOpenQuestionComponent;
  let fixture: ComponentFixture<AddOpenQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOpenQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOpenQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
