import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLibraryComponent } from './change-library.component';

describe('ChangeLibraryComponent', () => {
  let component: ChangeLibraryComponent;
  let fixture: ComponentFixture<ChangeLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
