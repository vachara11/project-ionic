import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatadetailPage } from './datadetail.page';

describe('DatadetailPage', () => {
  let component: DatadetailPage;
  let fixture: ComponentFixture<DatadetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
