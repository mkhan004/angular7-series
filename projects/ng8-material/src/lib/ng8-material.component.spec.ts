import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng8MaterialComponent } from './ng8-material.component';

describe('Ng8MaterialComponent', () => {
  let component: Ng8MaterialComponent;
  let fixture: ComponentFixture<Ng8MaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng8MaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng8MaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
