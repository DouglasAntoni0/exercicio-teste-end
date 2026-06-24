# Testes End-to-End - EBAC Shop

![Cypress](https://img.shields.io/badge/Cypress-E2E-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-testes-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![QA](https://img.shields.io/badge/QA-regressao%20web-0A66C2?style=for-the-badge)
![E-commerce](https://img.shields.io/badge/E--commerce-fluxos%20criticos-2E7D32?style=for-the-badge)

Projeto de automação end-to-end com Cypress para validar fluxos de interface da EBAC Shop, com foco em execução simples, reprodutível e alinhada a cenários de regressão web.

Este repositório funciona como uma base de automação E2E: configura o Cypress, aponta para uma aplicação alvo e permite executar testes no navegador para validar comportamento funcional.

## Objetivo do projeto

O objetivo é exercitar automação de interface com Cypress em uma aplicação web realista de e-commerce.

O projeto trabalha:

- configuração inicial de Cypress;
- execução local dos testes;
- uso da EBAC Shop como aplicação alvo;
- validação de comportamento pelo navegador;
- criação de base para regressão funcional.

## Contexto de QA

Testes E2E validam a aplicação de forma próxima da experiência do usuário. Eles são mais caros que testes unitários ou de API, mas têm valor quando protegem jornadas críticas.

Em um e-commerce, exemplos de fluxos relevantes incluem:

- login;
- busca e seleção de produto;
- carrinho;
- checkout;
- validação de mensagens;
- comportamento visual de componentes.

Este repositório se posiciona como base para esse tipo de validação.

## Stack

| Tecnologia | Função |
| --- | --- |
| Cypress 13 | Framework de automação E2E |
| JavaScript | Linguagem dos testes |
| Node.js | Runtime de execução |
| npm | Gerenciamento de dependências |
| EBAC Shop | Aplicação alvo |

## O que este projeto demonstra

| Competência | Aplicação prática | Valor técnico |
| --- | --- | --- |
| E2E web | Validação de comportamento no navegador | Confirma fluxo integrado |
| Cypress | Configuração e execução headless/interativa | Permite feedback local rápido |
| Regressão funcional | Base para jornadas críticas | Reduz risco de quebra em UI |
| Documentação técnica | Instruções claras de instalação e execução | Facilita manutenção |
| Pensamento de QA | Teste orientado a comportamento | Aproxima validação da experiência real |

## Como executar

Clone o repositório:

```bash
git clone https://github.com/DouglasAntoni0/exercicio-teste-end.git
cd exercicio-teste-end
```

Instale as dependências:

```bash
npm install
```

Execute no terminal:

```bash
npx cypress run
```

Abra o Cypress Runner:

```bash
npx cypress open
```

## Execução e depuração

Use `npx cypress open` quando estiver:

- criando novos cenários;
- depurando seletores;
- observando comportamento visual;
- analisando falhas passo a passo.

Use `npx cypress run` quando quiser:

- execução headless;
- repetição rápida;
- base para pipeline;
- resultado mais próximo de CI.

## Critérios de cobertura recomendados

A evolução mais valiosa para este projeto é escolher poucos fluxos, mas com alto valor de regressão. Em uma loja virtual, um teste E2E deve proteger jornadas que combinam tela, estado, regra e resposta visual. Isso inclui autenticação, seleção de produto, carrinho, mensagens de erro e confirmação de ação.

A cobertura ideal não deve tentar testar tudo pela interface. O papel deste repositório é representar a camada final de confiança: aquilo que precisa ser visto funcionando como usuário final. Regras menores, payloads e validações isoladas tendem a ser mais eficientes em testes de API ou unidade.

## Estratégia de evolução

Este repositório pode evoluir de uma base simples para uma suíte mais madura com:

- Page Objects ou App Actions;
- fixtures para dados de teste;
- custom commands;
- interceptação de rotas;
- relatório de execução;
- screenshots e vídeos;
- integração com GitHub Actions;
- separação entre smoke e regressão.

## Boas práticas para estabilidade

Para manter uma suíte E2E confiável, é importante reduzir dependência de tempo fixo e selecionar elementos por atributos estáveis sempre que possível. Também vale separar setup de dados da jornada principal, para que a falha aponte com mais clareza onde o problema ocorreu.

Em termos de portfólio, esse cuidado comunica uma visão prática: automação boa não é só clicar na tela, é construir uma execução que gere diagnóstico, evidência e confiança para o time.

## Troubleshooting

| Problema | Possível causa | Ação sugerida |
| --- | --- | --- |
| Cypress não encontra elemento | DOM alterado ou seletor frágil | Revisar seletor no DevTools |
| Teste não abre a aplicação | URL alvo fora do ar | Conferir `baseUrl` e acesso à EBAC Shop |
| Falha intermitente | Timing ou carregamento assíncrono | Usar asserts e interceptações adequadas |
| Dependências não instalam | Node/npm incompatíveis | Atualizar Node.js e rodar `npm install` novamente |

## Resultado técnico

Este repositório mostra domínio da base de automação UI: preparar ambiente, executar testes e documentar o fluxo para que a suíte possa ser mantida e evoluída. É uma peça de fundação para projetos Cypress mais completos deste perfil.

## Competências evidenciadas

- Cypress E2E.
- JavaScript aplicado a testes.
- Execução local e headless.
- Validação de comportamento web.
- Configuração de ambiente.
- Raciocínio de regressão funcional.

## Conclusão

O projeto demonstra a base de uma suíte E2E: ferramenta configurada, aplicação alvo definida, comandos documentados e caminho claro de evolução. É um repositório simples, mas com papel técnico direto dentro da trilha de QA Automation.
