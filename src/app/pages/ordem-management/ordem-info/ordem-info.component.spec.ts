import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemInfoComponent } from './ordem-info.component';

describe('OrdemInfoComponent', () => {
  let component: OrdemInfoComponent;
  let fixture: ComponentFixture<OrdemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdemInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
