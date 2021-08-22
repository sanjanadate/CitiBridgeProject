import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstockComponent } from './userstock.component';

describe('UserstockComponent', () => {
  let component: UserstockComponent;
  let fixture: ComponentFixture<UserstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
