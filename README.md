# DIO PRO Vitalício Week 2026: Agentes de IA

Material exclusivo da **DIO PRO Vitalício Week**, uma semana de lives sobre como construir e orquestrar agentes de IA com Claude Code, exclusiva para assinantes do DIO PRO. Este repositório guarda os recursos de apoio das 4 lives e a página oficial com os 12 conceitos essenciais que serão usados ao longo da semana.

> [!TIP]
> **Mandaí, o app de delivery construído ao longo da Week**
>
> Todo o código que sai das lives é construído de forma incremental no repositório [`digitalinnovationone/mandai`](https://github.com/digitalinnovationone/mandai). Acompanhar o projeto Mandaí em paralelo é a melhor forma de ver os 12 conceitos em ação dentro de uma aplicação real, do zero ao deploy.

## As 4 Lives da Week

| # | Sessão | Resumo | Live |
|---|--------|--------|------|
| 1 | Setup do Claude Code para Acelerar 100x a Produtividade no Desenvolvimento | [Acessar](./lives/sessao-1.md) | [Assistir](https://web.dio.me/lives/setup-do-claude-code-para-acelerar-100x-a-produtividade-no-desenvolvimento) |
| 2 | Construindo Agentes de IA Back-end, Front-end, QA e DevOps com Claude Code | [Acessar](./lives/sessao-2.md) | [Assistir](https://web.dio.me/lives/construindo-os-agentes-de-inteligencia-artificial-back-end-front-end-qa-e-devops-com-claude-code) |
| 3 | Criação do Kanban para Orquestração do Seu Time de Agentes de IA | [Acessar](./lives/sessao-3.md) | [Assistir](https://web.dio.me/lives/criacao-do-kanban-ao-vivo-para-orquestracao-do-seu-time-de-agentes-de-ai) |
| 4 | Sessão de Mentoria com Experts da DIO sobre Agentes de IA | [Acessar](./lives/sessao-4.md) | *em breve* |

> As lives são exclusivas para assinantes do **DIO PRO**. A Sessão 2 apresenta os 12 conceitos de forma conceitual e mostra como este repositório está organizado.

## Os 12 conceitos essenciais

Ao abrir o Claude Code pela primeira vez, é comum sentir que estamos apenas dando comandos para uma ferramenta de IA. Mas, para trabalhar com agentes de verdade, é importante entender os conceitos que controlam memória, permissões, contexto, automação e execução.

Esses 12 conceitos formam o vocabulário base da Week. Eles aparecem ao longo das 4 lives, em momentos diferentes, sempre conectados à prática de construir e orquestrar agentes de IA.

A página oficial reúne cada conceito com uma explicação curta, uma dica prática e um link direto para o glossário oficial do Claude Code:

👉 **https://digitalinnovationone.github.io/dio-pro-vitalicio-week-2026-agentes-ia**

| # | Conceito | Para que serve |
|---|----------|----------------|
| 1 | **CLAUDE.md** | Registra a memória do projeto e orienta o Claude em todas as sessões. |
| 2 | **Permissions** | Define o que o Claude pode ou não pode executar no ambiente. |
| 3 | **Plan Mode** | Permite planejar antes de alterar arquivos ou executar ações. |
| 4 | **Checkpoints** | Salva pontos de restauração para voltar atrás quando necessário. |
| 5 | **Skills** | Reúne instruções reutilizáveis que podem ser carregadas sob demanda. |
| 6 | **Hooks** | Executa scripts automaticamente em momentos específicos da sessão. |
| 7 | **MCP** | Conecta o Claude a ferramentas, APIs e fontes externas. |
| 8 | **Plugins** | Empacota Skills, Subagents, comandos e Hooks em extensões reutilizáveis. |
| 9 | **Context** | Controla as informações disponíveis na janela de contexto atual. |
| 10 | **Commands** | Cria atalhos para fluxos recorrentes de trabalho. |
| 11 | **Compaction** | Resume conversas longas para manter o trabalho fluindo. |
| 12 | **Subagents** | Cria especialistas paralelos com contexto e responsabilidades próprias. |

## Organização do repositório

```

.
├── README.md       → Este arquivo, você está aqui!
├── docs/           → Página oficial publicada no GitHub Pages (apenas HTML, CSS e JS).
└── lives/          → Resumos das 4 lives, gerados incrementalmente com IA.
    ├── README.md   → Arquivo com o prompt usado para gerar os resumos.
    ├── sessao-1.md
    ├── sessao-2.md
    ├── sessao-3.md
    └── sessao-4.md

```

A pasta [`docs/`](./docs) tem o código da página inteira, escrito em HTML, CSS e JavaScript vanilla, sem build, sem framework, pronto para o GitHub Pages servir como está.

A pasta [`lives/`](./lives) começa com um arquivo `.md` por sessão, todos com uma nota dizendo que o resumo está em produção. Cada um ganha o conteúdo final conforme a live acontece. O resumo é gerado a partir da transcrição, com um prompt padronizado que rotula os 12 conceitos em cada momento. O [README da pasta](./lives/README.md) explica o processo e tem o prompt completo para você reproduzir.

## Referências

Este repositório não nasceu do zero. Os materiais abaixo foram a base para darmos vida aos 12 conceitos como um material dinâmico, escrever as descrições e estruturar a página:

- **[Glossário oficial do Claude Code](https://code.claude.com/docs/en/glossary)**, da Anthropic. Fonte primária. Toda definição da página parte daqui, e cada card linka para a entrada específica do glossário com âncora.
- **[Documentação completa do Claude Code](https://code.claude.com/docs/)**, da Anthropic. Onde validamos cada conceito, cada comando e cada dica prática que aparece na página.
- **[12 Claude Code Features Every Engineer Should Know](https://blog.bytebytego.com/p/ep209-12-claude-code-features-every)**, da ByteByteGo. Material de abril de 2026 que circulou bastante e nos deu o recorte dos 12 itens essenciais para quem está começando. Mantivemos a lista original, traduzimos para português e adaptamos a linguagem.

---

Feito com 💜 para a comunidade DIO.
