import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNonFoundComponent } from './page-non-found.component';

describe('PageNonFoundComponent', () => {
  let component: PageNonFoundComponent;
  let fixture: ComponentFixture<PageNonFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNonFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNonFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
