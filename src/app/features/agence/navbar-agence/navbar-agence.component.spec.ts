import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAgenceComponent } from './navbar-agence.component';

describe('NavbarAgenceComponent', () => {
  let component: NavbarAgenceComponent;
  let fixture: ComponentFixture<NavbarAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarAgenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
