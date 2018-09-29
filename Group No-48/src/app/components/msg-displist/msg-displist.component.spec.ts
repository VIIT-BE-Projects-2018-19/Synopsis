import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgDisplistComponent } from './msg-displist.component';

describe('MsgDisplistComponent', () => {
  let component: MsgDisplistComponent;
  let fixture: ComponentFixture<MsgDisplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgDisplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgDisplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
