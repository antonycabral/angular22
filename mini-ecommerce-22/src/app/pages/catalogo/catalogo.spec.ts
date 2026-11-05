import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogoComponent } from './catalogo';

describe('CatalogoComponent', () => {
  let component: CatalogoComponent;
  let fixture: ComponentFixture<CatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('loads products from the injected service', () => {
    expect(component.produtosFiltrados()).toHaveLength(4);
  });

  it('applies the search only after submission', () => {
    component.termoDigitado.set('teclado');
    expect(component.produtosFiltrados()).toHaveLength(4);

    component.executarBusca(component.termoDigitado());

    expect(component.produtosFiltrados().map((produto) => produto.nome)).toEqual([
      'Teclado Compacto',
    ]);
  });
});
