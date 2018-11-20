import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSearchFormComponent } from './top-search-form.component';

describe('TopSearchFormComponent', () => {
  let component: TopSearchFormComponent;
  let fixture: ComponentFixture<TopSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
