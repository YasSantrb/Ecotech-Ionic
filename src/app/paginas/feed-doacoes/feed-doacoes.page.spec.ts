import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedDoacoesPage } from './feed-doacoes.page';

describe('FeedDoacoesPage', () => {
  let component: FeedDoacoesPage;
  let fixture: ComponentFixture<FeedDoacoesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedDoacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
