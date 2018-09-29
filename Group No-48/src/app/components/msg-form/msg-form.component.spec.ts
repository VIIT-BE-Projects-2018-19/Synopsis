import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgFormComponent } from './msg-form.component';

describe('MsgFormComponent', () => {
  let component: MsgFormComponent;
  let fixture: ComponentFixture<MsgFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
