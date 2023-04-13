import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerPagePage } from './beer-page.page';

describe('BeerPagePage', () => {
  let component: BeerPagePage;
  let fixture: ComponentFixture<BeerPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BeerPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
