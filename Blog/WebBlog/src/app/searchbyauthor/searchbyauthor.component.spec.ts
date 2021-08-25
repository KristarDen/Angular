import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyauthorComponent } from './searchbyauthor.component';

describe('SearchbyauthorComponent', () => {
  let component: SearchbyauthorComponent;
  let fixture: ComponentFixture<SearchbyauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbyauthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbyauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
