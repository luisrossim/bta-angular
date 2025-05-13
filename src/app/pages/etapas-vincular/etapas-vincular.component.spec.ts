import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapasVincularComponent } from './etapas-vincular.component';

describe('EtapasVincularComponent', () => {
  let component: EtapasVincularComponent;
  let fixture: ComponentFixture<EtapasVincularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtapasVincularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapasVincularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
