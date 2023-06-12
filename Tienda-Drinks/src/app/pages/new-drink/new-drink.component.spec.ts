import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDrinkComponent } from './new-drink.component';

describe('NewDrinkComponent', () => {
  let component: NewDrinkComponent;
  let fixture: ComponentFixture<NewDrinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDrinkComponent]
    });
    fixture = TestBed.createComponent(NewDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
