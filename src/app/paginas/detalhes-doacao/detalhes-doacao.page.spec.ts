import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesDoacaoPage } from './detalhes-doacao.page';

describe('DetalhesDoacaoPage', () => {
  let component: DetalhesDoacaoPage;
  let fixture: ComponentFixture<DetalhesDoacaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesDoacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
