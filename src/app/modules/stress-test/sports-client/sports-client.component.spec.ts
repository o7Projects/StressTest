import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsClientComponent } from './sports-client.component';

describe('SportsClientComponent', () => {
  let component: SportsClientComponent;
  let fixture: ComponentFixture<SportsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
