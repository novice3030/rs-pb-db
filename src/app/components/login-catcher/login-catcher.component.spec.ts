import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCatcherComponent } from './login-catcher.component';

describe('LoginCatcherComponent', () => {
  let component: LoginCatcherComponent;
  let fixture: ComponentFixture<LoginCatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
