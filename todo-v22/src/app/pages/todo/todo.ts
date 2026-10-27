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
  // Estado reativo usando signal()
  tarefas = signal<Tarefa[]>([
    { id: 1, titulo: 'Configurar arquitetura de Pages com Router-Outlet', concluida: true },
    { id: 2, titulo: 'Testar o Control Flow nativo (@for + @empty)', concluida: false }
  ]);

  // Função para alternar o status da tarefa
  alternarStatus(id: number) {
    this.tarefas.update(lista =>
      lista.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t)
    );
  }
}
