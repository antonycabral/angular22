import { Injectable, signal } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  readonly produtos = signal<Produto[]>([
    {
      id: 1,
      nome: 'Fone Studio',
      categoria: 'Áudio',
      preco: 649.9,
      imagem: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
    },
    {
      id: 2,
      nome: 'Teclado Compacto',
      categoria: 'Acessórios',
      preco: 429.9,
      imagem: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=85',
    },
    {
      id: 3,
      nome: 'Relógio Minimal',
      categoria: 'Wearables',
      preco: 799.9,
      imagem: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85',
    },
    {
      id: 4,
      nome: 'Caixa Bluetooth',
      categoria: 'Áudio',
      preco: 359.9,
      imagem: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85',
    },
  ]);
}
