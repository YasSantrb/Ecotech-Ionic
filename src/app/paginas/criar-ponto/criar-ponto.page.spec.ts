import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarPontoPage } from './criar-ponto.page';

describe('CriarPontoPage', () => {
  let component: CriarPontoPage;
  let fixture: ComponentFixture<CriarPontoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPontoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
