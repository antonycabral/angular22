import { Component, effect, input, model, output } from '@angular/core';

@Component({
  selector: 'app-filtro-busca',
  standalone: true,
  templateUrl: './filtro-busca.html',
  styleUrl: './filtro-busca.scss',
})
export class FiltroBuscaComponent {
  placeholderTexto = input<string>('Pesquisar produtos...');
  termoBusca = model<string>('');
  aoPesquisar = output<string>();

  constructor() {
    effect(() => {
      console.log('[Bloco 3 - input()] Placeholder recebido:', this.placeholderTexto());
    });
  }

  atualizarTermo(termo: string): void {
    this.termoBusca.set(termo);
    console.log('[Bloco 3 - model()] Termo sincronizado:', this.termoBusca());
  }

  pesquisar(event: SubmitEvent): void {
    event.preventDefault();
    const termo = this.termoBusca();
    console.log('[Bloco 3 - output()] Emitindo aoPesquisar:', termo);
    this.aoPesquisar.emit(termo);
  }
}
