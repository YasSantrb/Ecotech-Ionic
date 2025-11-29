import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PontosColetaPage } from './pontos-coleta.page';

describe('PontosColetaPage', () => {
  let component: PontosColetaPage;
  let fixture: ComponentFixture<PontosColetaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PontosColetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
