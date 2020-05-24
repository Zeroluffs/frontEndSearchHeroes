import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainDetailsComponent } from './villain-details.component';

describe('VillainDetailsComponent', () => {
  let component: VillainDetailsComponent;
  let fixture: ComponentFixture<VillainDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
