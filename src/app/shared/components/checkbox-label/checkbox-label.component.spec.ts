import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxLabelComponent } from './checkbox-label.component';

describe('CheckboxLabelComponent', () => {
  let component: CheckboxLabelComponent;
  let fixture: ComponentFixture<CheckboxLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
