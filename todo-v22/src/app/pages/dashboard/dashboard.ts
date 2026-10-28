import { Component, computed, effect, signal } from '@angular/core';

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
      localStorage.setItem('transacoes_financeiras', JSON.stringify(dados));
    });
  }

  // Métodos de Ação
  adicionarTransacao(descricao: string, valor: string, tipo: 'entrada' | 'saida') {
    if (!descricao || !valor) return;

    const novaTransacao: Transacao = {
      id: Date.now(),
      descricao,
      valor: parseFloat(valor),
      tipo
    };

    this.transacoes.update(lista => [novaTransacao, ...lista]);
  }

  removerTransacao(id: number) {
    this.transacoes.update(lista => lista.filter(t => t.id !== id));
  }
}
