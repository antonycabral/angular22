import { Component, computed, effect, inject, signal } from '@angular/core';
import { FiltroBuscaComponent } from '../../components/filtro-busca/filtro-busca';
import { ProdutosService } from '../../data/produtos.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [FiltroBuscaComponent],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class CatalogoComponent {
  private readonly produtosService = inject(ProdutosService);

  readonly termoDigitado = signal('');
  readonly filtroAplicado = signal('');
  readonly formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  readonly produtosFiltrados = computed(() => {
    const termo = this.filtroAplicado().trim().toLocaleLowerCase('pt-BR');
    return this.produtosService.produtos().filter((produto) =>
      `${produto.nome} ${produto.categoria}`.toLocaleLowerCase('pt-BR').includes(termo),
    );
  });

  constructor() {
    console.log(
      '[Bloco 3 - inject()] ProdutosService injetado. Produtos disponíveis:',
      this.produtosService.produtos().length,
    );

    effect(() => {
      console.log('[Bloco 3 - model()] Termo sincronizado no catálogo:', this.termoDigitado());
    });
  }

  executarBusca(termo: string): void {
    console.log('[Bloco 3 - output()] Evento recebido pelo catálogo:', termo);
    this.filtroAplicado.set(termo);
    console.log(
      '[Bloco 3 - computed()] Produtos visíveis:',
      this.produtosFiltrados().map((produto) => produto.nome),
    );
  }
}
