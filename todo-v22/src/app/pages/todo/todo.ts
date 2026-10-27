import { Component, signal } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Component({
  imports: [],
  selector: 'app-todo',
  styleUrl: './todo.scss',
  templateUrl: './todo.html',
})
export class Todo {
 // Estado reativo com signal

  tarefas = signal<Tarefa[]>([
    { id: 1, titulo: 'Aprender arquitetura Zoneless e Control Flow', concluida: true },
    { id: 2, titulo: 'Explorar a nova nomenclatura limpa de componentes', concluida: true },
    { id: 3, titulo: 'Criar aplicação prática com Signals', concluida: false }
  ]);

  // Alternar o status da tarefa
  alternarStatus(id: number) {
    console.log(`🔄 Alternando status da tarefa ID: ${id}`);
    this.tarefas.update(lista =>
      lista.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t)
    );
    console.log(`✅ Status da tarefa ${id} alterado`);
  }

  // Adicionar nova tarefa
  adicionarTarefa(titulo: string) {
    console.log(`➕ Tentando adicionar tarefa: "${titulo}"`);
    if (!titulo.trim()) return;

    const nova: Tarefa = {
      id: Date.now(),
      titulo: titulo.trim(),
      concluida: false
    };

    this.tarefas.update(lista => [nova, ...lista]);
    console.log(`✅ Tarefa adicionada com ID: ${nova.id}`);
  }

  // Remover tarefa
  removerTarefa(id: number) {
    console.log(`🗑️ Removendo tarefa ID: ${id}`);
    this.tarefas.update(lista => lista.filter(t => t.id !== id));
    console.log(`✅ Tarefa ${id} removida`);
  }
}
