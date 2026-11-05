# Mini E-commerce 22

Projeto de estudo do bloco 3 do plano Angular 22: comunicação entre componentes com `input()`, `output()` e `model()`, além de injeção de dependências com `inject()`.

## Executar

Na pasta `mini-ecommerce-22`, execute:

```bash
npm start
```

Abra `http://localhost:4200/`. Para acompanhar os logs, abra as ferramentas de desenvolvedor do navegador e selecione a aba **Console**.

## Testar o estudo

1. Ao carregar a página, procure por `[Bloco 3 - inject()]`: o catálogo recebeu `ProdutosService` por injeção de dependência. O log `[Bloco 3 - input()]` mostra o placeholder recebido pelo componente de busca.
2. Digite `áudio` no campo. Cada alteração deve gerar `[Bloco 3 - model()]` no filtro e no catálogo. O texto sincroniza entre os componentes, mas a lista ainda não é filtrada.
3. Pressione Enter ou clique no botão de busca. O componente de busca registra `[Bloco 3 - output()] Emitindo aoPesquisar`, e o catálogo registra o recebimento do evento.
4. Confira `[Bloco 3 - computed()] Produtos visíveis`: a lista deve mostrar os produtos da categoria Áudio. Apague o texto e submeta novamente para ver todos os produtos.

Os logs identificam o fluxo: `input()` configura o componente filho, `model()` sincroniza o valor em duas vias, `output()` comunica a submissão ao pai, `inject()` fornece o serviço e `computed()` deriva os produtos visíveis.

## Estrutura do estudo

- `src/app/components/filtro-busca`: componente de busca com `input()`, `model()` e `output()`.
- `src/app/pages/catalogo`: página que recebe o valor sincronizado e aplica a busca após a submissão.
- `src/app/data/produtos.service.ts`: fonte de produtos fornecida por DI e consumida com `inject()`.

## Testes automatizados

```bash
npm test -- --watch=false
npm run build
```

