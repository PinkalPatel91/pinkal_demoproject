import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkalcmdComponent } from './pinkalcmd.component';

describe('PinkalcmdComponent', () => {
  let component: PinkalcmdComponent;
  let fixture: ComponentFixture<PinkalcmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkalcmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkalcmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
