import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarDoacaoPage } from './editar-doacao.page';

describe('EditarDoacaoPage', () => {
  let component: EditarDoacaoPage;
  let fixture: ComponentFixture<EditarDoacaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDoacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
