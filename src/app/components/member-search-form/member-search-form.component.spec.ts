import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSearchFormComponent } from './member-search-form.component';

describe('MemberSearchFormComponent', () => {
  let component: MemberSearchFormComponent;
  let fixture: ComponentFixture<MemberSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberSearchFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
