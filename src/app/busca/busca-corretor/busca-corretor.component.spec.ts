import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaCorretorComponent } from './busca-corretor.component';

describe('BuscaCorretorComponent', () => {
  let component: BuscaCorretorComponent;
  let fixture: ComponentFixture<BuscaCorretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaCorretorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaCorretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
