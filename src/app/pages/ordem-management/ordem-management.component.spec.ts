import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemManagementComponent } from './ordem-management.component';

describe('OrdemManagementComponent', () => {
  let component: OrdemManagementComponent;
  let fixture: ComponentFixture<OrdemManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdemManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
