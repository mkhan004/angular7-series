import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng7CommonComponent } from './ng7-common.component';

describe('Ng7CommonComponent', () => {
  let component: Ng7CommonComponent;
  let fixture: ComponentFixture<Ng7CommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng7CommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng7CommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
