import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgContentComponent } from './msg-content.component';

describe('MsgContentComponent', () => {
  let component: MsgContentComponent;
  let fixture: ComponentFixture<MsgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});