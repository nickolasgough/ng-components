import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSideNavComponent } from './ng-side-nav.component';


describe('NgSideNavComponent', () => {
  let component: NgSideNavComponent;
  let fixture: ComponentFixture<NgSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
