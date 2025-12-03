import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarDoacaoPage } from './criar-doacao.page';

describe('CriardoacaoPage', () => {
  let component: CriarDoacaoPage;
  let fixture: ComponentFixture<CriarDoacaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarDoacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
