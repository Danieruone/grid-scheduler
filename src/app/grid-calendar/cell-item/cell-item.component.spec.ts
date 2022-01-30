import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellItemComponent } from './cell-item.component';

describe('CellItemComponent', () => {
  let component: CellItemComponent;
  let fixture: ComponentFixture<CellItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
