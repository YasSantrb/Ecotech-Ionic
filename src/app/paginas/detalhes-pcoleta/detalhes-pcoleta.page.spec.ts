import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesPcoletaPage } from './detalhes-pcoleta.page';

describe('DetalhesPcoletaPage', () => {
  let component: DetalhesPcoletaPage;
  let fixture: ComponentFixture<DetalhesPcoletaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPcoletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
