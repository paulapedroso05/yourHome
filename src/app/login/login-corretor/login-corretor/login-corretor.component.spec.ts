import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCorretorComponent } from './login-corretor.component';

describe('LoginCorretorComponent', () => {
  let component: LoginCorretorComponent;
  let fixture: ComponentFixture<LoginCorretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCorretorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCorretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
