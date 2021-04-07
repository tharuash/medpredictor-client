import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeewhyComponent } from './seewhy.component';

describe('SeewhyComponent', () => {
  let component: SeewhyComponent;
  let fixture: ComponentFixture<SeewhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeewhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeewhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
