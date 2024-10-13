import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListdataPage } from './listdata.page';

describe('ListdataPage', () => {
  let component: ListdataPage;
  let fixture: ComponentFixture<ListdataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
