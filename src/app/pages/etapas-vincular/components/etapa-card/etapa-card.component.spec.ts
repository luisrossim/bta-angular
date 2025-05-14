import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaCardComponent } from './etapa-card.component';

describe('EtapaCardComponent', () => {
  let component: EtapaCardComponent;
  let fixture: ComponentFixture<EtapaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtapaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
