import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormBuilderFormControllerComponent } from './reactive-form-builder-form-controller.component';

describe('ReactiveFormBuilderFormControllerComponent', () => {
  let component: ReactiveFormBuilderFormControllerComponent;
  let fixture: ComponentFixture<ReactiveFormBuilderFormControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormBuilderFormControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormBuilderFormControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
