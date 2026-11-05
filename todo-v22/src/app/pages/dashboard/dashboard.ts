import { isPlatformBrowser } from '@angular/common';
import { Component, computed, effect, inject, PLATFORM_ID, signal } from '@angular/core';

interface Transacao {
  id: number;
  descricao: string;
  valor: number;
  tipo: 'entrada' | 'saida';
}

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private readonly platformId = inject(PLATFORM_ID);

  // 1. O Produtor de Estado (Signal base)
  transacoes = signal<Transacao[]>([
    { id: 1, descricao: 'Salário', valor: 5000, tipo: 'entrada' },
    { id: 2, descricao: 'Supermercado', valor: 650, tipo: 'saida' },
    { id: 3, descricao: 'Internet', valor: 120, tipo: 'saida' }
  ]);

  metaEconomia = signal<number>(2000);

  // 2. Estados Derivados (Computed - com cache automático e sem mutações)
  totalEntradas = computed(() =>
    this.transacoes()
      .filter(t => t.tipo === 'entrada')
      .reduce((acc, t) => acc + t.valor, 0)
  );

  totalSaidas = computed(() =>
    this.transacoes()
      .filter(t => t.tipo === 'saida')
      .reduce((acc, t) => acc + t.valor, 0)
  );

  saldoTotal = computed(() => this.totalEntradas() - this.totalSaidas());

  progressoMeta = computed(() => {
    const saldo = this.saldoTotal();
    const meta = this.metaEconomia();
    if (meta <= 0) return 0;
    return Math.min(Math.round((saldo / meta) * 100), 100);
  });

  constructor() {
    // 3. Efeitos Colaterais Controlados (Effect)
    // Sincroniza o estado com o localStorage de forma reativa e segura
    effect(() => {
      const dados = this.transacoes();
      if (!isPlatformBrowser(this.platformId)) return;

      localStorage.setItem('transacoes_financeiras', JSON.stringify(dados));
      console.log('Bloco 2 - [Dashboard] Transações persistidas no localStorage:', dados);
    });
  }

  // Métodos de Ação
  adicionarTransacao(descricao: string, valor: string, tipo: string): void {
    console.log('Bloco 2 -[Dashboard] Tentativa de adicionar transação:', { descricao, valor, tipo });

    const valorNumerico = Number(valor);
    if (!descricao.trim() || !Number.isFinite(valorNumerico) || valorNumerico <= 0 || !['entrada', 'saida'].includes(tipo)) {
      console.log('[Dashboard] Transação rejeitada: dados inválidos.');
      return;
    }

    const novaTransacao: Transacao = {
      id: Date.now(),
      descricao: descricao.trim(),
      valor: valorNumerico,
      tipo: tipo as 'entrada' | 'saida'
    };

    this.transacoes.update(lista => [novaTransacao, ...lista]);
    console.log('Bloco 2 -[Dashboard] Transação adicionada:', novaTransacao);
    this.registrarResumo();
  }

  removerTransacao(id: number): void {
    const transacaoRemovida = this.transacoes().find(transacao => transacao.id === id);
    if (!transacaoRemovida) {
      console.log('Bloco 2 -[Dashboard] Nenhuma transação encontrada para remoção:', { id });
      return;
    }

    this.transacoes.update(lista => lista.filter(t => t.id !== id));
    console.log('Bloco 2 -[Dashboard] Transação removida:', transacaoRemovida);
    this.registrarResumo();
  }

  private registrarResumo(): void {
    console.log('Bloco 2 -[Dashboard] Resumo atualizado:', {
      totalEntradas: this.totalEntradas(),
      totalSaidas: this.totalSaidas(),
      saldoTotal: this.saldoTotal(),
      progressoMeta: this.progressoMeta()
    });
  }
}
