import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOrdemInfoComponent } from './header-ordem-info.component';

describe('HeaderOrdemInfoComponent', () => {
  let component: HeaderOrdemInfoComponent;
  let fixture: ComponentFixture<HeaderOrdemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderOrdemInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderOrdemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
