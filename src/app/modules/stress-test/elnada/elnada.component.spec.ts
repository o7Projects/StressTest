import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElnadaComponent } from './elnada.component';

describe('ElnadaComponent', () => {
  let component: ElnadaComponent;
  let fixture: ComponentFixture<ElnadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElnadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElnadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
