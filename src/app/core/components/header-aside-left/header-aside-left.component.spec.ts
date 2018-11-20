import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAsideLeftComponent } from './header-aside-left.component';

describe('HeaderAsideLeftComponent', () => {
  let component: HeaderAsideLeftComponent;
  let fixture: ComponentFixture<HeaderAsideLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAsideLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAsideLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
