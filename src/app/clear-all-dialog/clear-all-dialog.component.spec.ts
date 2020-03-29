import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearAllDialogComponent } from './clear-all-dialog.component';

describe('ClearAllDialogComponent', () => {
  let component: ClearAllDialogComponent;
  let fixture: ComponentFixture<ClearAllDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearAllDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearAllDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
