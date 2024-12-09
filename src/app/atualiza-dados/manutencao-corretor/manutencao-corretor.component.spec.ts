import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoCorretorComponent } from './manutencao-corretor.component';

describe('ManutencaoCorretorComponent', () => {
  let component: ManutencaoCorretorComponent;
  let fixture: ComponentFixture<ManutencaoCorretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManutencaoCorretorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManutencaoCorretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
