import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NikitacmdComponent } from './nikitacmd.component';

describe('NikitacmdComponent', () => {
  let component: NikitacmdComponent;
  let fixture: ComponentFixture<NikitacmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NikitacmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NikitacmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
