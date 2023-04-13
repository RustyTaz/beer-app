import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteBeerPage } from './favorite-beer.page';

describe('FavoriteBeerPage', () => {
  let component: FavoriteBeerPage;
  let fixture: ComponentFixture<FavoriteBeerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FavoriteBeerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
