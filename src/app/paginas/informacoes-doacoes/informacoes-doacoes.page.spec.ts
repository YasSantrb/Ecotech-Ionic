import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacoesDoacoesPage } from './informacoes-doacoes.page';

describe('InformacoesDoacoesPage', () => {
  let component: InformacoesDoacoesPage;
  let fixture: ComponentFixture<InformacoesDoacoesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesDoacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
