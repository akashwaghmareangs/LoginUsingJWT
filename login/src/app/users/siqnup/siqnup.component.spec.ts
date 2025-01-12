import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiqnupComponent } from './siqnup.component';

describe('SiqnupComponent', () => {
  let component: SiqnupComponent;
  let fixture: ComponentFixture<SiqnupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiqnupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiqnupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
