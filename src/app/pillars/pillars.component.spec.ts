import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillarsComponent } from './pillars.component';

describe('PillarsComponent', () => {
  let component: PillarsComponent;
  let fixture: ComponentFixture<PillarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
