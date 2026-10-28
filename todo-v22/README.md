# TodoV22

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## O que foi implementado

Este projeto TodoV22 demonstra as novas funcionalidades do Angular 22, incluindo:

### Sinais (Signals) e Control Flow
- Utilização de `signal` para estado reativo em vez de observables tradicionais
- `@for` loop com otimização `track` para renderização eficiente de listas
- `@empty` block nativo que elimina a necessidade de conditionais `@if` extras para arrays vazios

### Componentes e Interfaces
- Interface `Tarefa` com `id`, `titulo` e `concluida`
- Sinais reativos para gerenciamento de lista de tarefas
- Eventos de clique para alternar status e remover tarefas

### Funcionalidades
- Adicionar novas tarefas com timestamp único como ID
- Alternar status concluído/incompleto de tarefas
- Remover tarefas da lista
- Estado inicial com 3 tarefas de exemplo sobre a arquitetura Angular 22

### Tecnologias Utilizadas
- Angular 22 com Signals-First approach
- Zoneless change detection (configurado no angular.json)
- Vitest para testes unitários
- StyleScss com componentes isolados

## Avaliação

Este projeto serve como um estudo prático da nova arquitetura Angular 22, focada em:
- **Performance**: Sinais proporcionam mudanças de estado mais eficientes sem zone change detection
- **Developer Experience**: O `@for` loop com `track` oferece renderização otimizada e o `@empty` block simplifica o código condicional
- **Modernidade**: Eliminação progressiva de patterns legados em favor do novo modelo de sinais

O aplicativo demonstra como construir uma aplicação completa utilizando apenas as novas features do Angular 22, desde o estado reativo até a renderização de lista, proporcionando uma base sólida para migração de aplicações Angular legadas.

Para mais detalhes sobre o código implementado, consulte os arquivos `todo.ts` e `todo.html` na pasta `src/app/pages/todo/`.
