import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarContratosComponent } from './mostrar-contratos.component';

describe('MostrarContratosComponent', () => {
  let component: MostrarContratosComponent;
  let fixture: ComponentFixture<MostrarContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarContratosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
