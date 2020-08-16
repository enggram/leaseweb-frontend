import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisktypeComponent } from './disktype.component';

describe('DisktypeComponent', () => {
  let component: DisktypeComponent;
  let fixture: ComponentFixture<DisktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
