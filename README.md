# DIO PRO Vitalício Week 2026 · Agentes de IA

Material exclusivo da **DIO PRO Vitalício Week**, uma semana de lives sobre como construir e orquestrar agentes de IA com Claude Code, exclusiva para assinantes do DIO PRO.

Este repositório guarda os recursos de apoio das 4 lives e a página oficial com os 12 conceitos essenciais que vão ser usados ao longo da semana.

## As 4 lives da Week

| # | Sessão | Conceitos | Resumo | Live |
|---|--------|-----------|--------|------|
| 1 | Setup do Claude Code para acelerar 100x a produtividade no desenvolvimento | `CLAUDE.md` `Permissions` `Plan Mode` `Slash Commands` `Context` | [Em breve](./lives/sessao-1.md) | [Assistir](https://web.dio.me/lives/setup-do-claude-code-para-acelerar-100x-a-produtividade-no-desenvolvimento) |
| 2 | Construindo Agentes de IA Back-end, Front-end, QA e DevOps com Claude Code | Os 12 conceitos | [Em breve](./lives/sessao-2.md) | [Assistir](https://web.dio.me/lives/construindo-os-agentes-de-inteligencia-artificial-back-end-front-end-qa-e-devops-com-claude-code) |
| 3 | Criação do Kanban ao vivo para orquestração do seu time de Agentes de IA | `Subagents` `MCP` `Slash Commands` `Context` `Compaction` | [Em breve](./lives/sessao-3.md) | [Assistir](https://web.dio.me/lives/criacao-do-kanban-ao-vivo-para-orquestracao-do-seu-time-de-agentes-de-ai) |
| 4 | Sessão de Mentoria ao vivo com Experts da DIO sobre Agentes de IA | Todos os 12 conceitos, conforme as dúvidas | [Em breve](./lives/sessao-4.md) | *em breve* |

> As lives são exclusivas para assinantes do **DIO PRO**. A Sessão 2 passa teoricamente pelos 12 conceitos e apresenta este repositório.

## Os 12 conceitos essenciais

Quando você abre o Claude Code pela primeira vez, é fácil sentir que está dando comando para uma caixa preta. A diferença entre "usar o Claude como autocomplete glorificado" e "trabalhar com agentes de IA de verdade" está em entender alguns conceitos que o produto expõe desde o primeiro dia.

Esses conceitos são o vocabulário compartilhado da Week. Eles aparecem repetidamente nas 4 lives, em ordens diferentes, conectados de jeitos diferentes. A página oficial explica cada um com uma descrição curta, uma dica prática e um link para a documentação oficial:

👉 **https://digitalinnovationone.github.io/dio-pro-vitalicio-week-2026-agentes-ia**

Os 12 conceitos, na ordem em que costumam aparecer:

1. **CLAUDE.md**: memória do projeto que o Claude lê em toda sessão
2. **Permissions**: controle do que cada agente pode ou não pode fazer
3. **Plan Mode**: planejamento antes da execução
4. **Checkpoints**: salvamento automático para voltar no tempo
5. **Skills**: instruções reutilizáveis carregadas sob demanda
6. **Hooks**: scripts disparados em momentos específicos da sessão
7. **MCP**: protocolo aberto para conectar ferramentas externas
8. **Plugins**: extensões que empacotam Skills, Subagents, comandos e Hooks
9. **Context**: gestão do que está na janela de contexto atual
10. **Slash Commands**: atalhos para fluxos recorrentes
11. **Compaction**: compressão de conversas longas
12. **Subagents**: especialistas paralelos com contexto próprio

A documentação completa do Claude Code está em [code.claude.com/docs](https://code.claude.com/docs/).

## Organização do repositório

Tem dois lugares onde olhar:

```
.
├── docs/     → página oficial publicada no GitHub Pages
└── lives/    → resumos das 4 lives, gerados depois com IA
```

A pasta [`docs/`](./docs) tem o código da página inteira, escrito em HTML, CSS e JavaScript vanilla, sem build, sem framework, pronto para o GitHub Pages servir como está.

A pasta [`lives/`](./lives) começa com um arquivo `.md` por sessão, todos marcados como "em breve". Cada um ganha o resumo correspondente conforme a live acontece. O resumo é gerado a partir da transcrição da live, com um prompt padronizado que rotula os 12 conceitos em cada momento da gravação. O [README da pasta](./lives/README.md) explica o processo e tem o prompt completo para você reproduzir.

## Inspiração

A curadoria dos 12 conceitos parte de um material da ByteByteGo, *[12 Claude Code Features Every Engineer Should Know](https://blog.bytebytego.com/p/ep209-12-claude-code-features-every)*, que circulou bastante em abril de 2026. Mantivemos a lista original, traduzimos para português, escrevemos descrições focadas no uso prático e adicionamos uma dica para cada conceito. Cada card da página linka para a documentação oficial correspondente, para quem quiser ir mais fundo.

---

*Feito com 💜 para a comunidade DIO.*
