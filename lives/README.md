# Resumos das Lives

Esta pasta tem um arquivo por live da **DIO PRO Vitalício Week 2026**. Cada arquivo recebe o resumo da sessão correspondente, gerado a partir da transcrição da live, rotulando em cada momento qual dos 12 conceitos essenciais do Claude Code está sendo demonstrado.

## Sessões

| # | Arquivo | Sessão |
|---|---------|--------|
| 1 | [`sessao-1.md`](./sessao-1.md) | Setup do Claude Code para acelerar 100x a produtividade |
| 2 | [`sessao-2.md`](./sessao-2.md) | Agentes de IA Back-end, Front-end, QA e DevOps |
| 3 | [`sessao-3.md`](./sessao-3.md) | Kanban ao vivo para orquestração de Agentes |
| 4 | [`sessao-4.md`](./sessao-4.md) | Mentoria ao vivo com Experts da DIO |

## Como os resumos são gerados

O processo tem três etapas:

1. Captura da transcrição da live a partir do player da DIO.
2. Geração do resumo usando o prompt abaixo, com Claude Code.
3. Revisão humana, ajustando timestamps, links e linguagem onde necessário.

### Prompt usado

```text
Você é um analista técnico especializado em Claude Code e fluxos de trabalho com agentes de IA.
Vou te enviar a transcrição completa de uma live da DIO PRO Vitalício Week 2026.

Sua tarefa é produzir um resumo em português brasileiro, seguindo exatamente esta estrutura em Markdown:

# Sessão N: <título da live>

> Link da live: <URL>

## Resumo Executivo
2 a 3 parágrafos com os pontos centrais da live, voz ativa, sem "marketês".

## Linha do Tempo
Tabela com 6 a 12 marcos no formato:
| Tempo | Momento |
| HH:MM | descrição curta |

## Conceitos Apresentados
Identifique APENAS os conceitos explorados durante a live, indique:
- Em qual timestamp/momento aparece
- Como foi usado, explicando em 1 ou 2 frases concretas

Os 12 conceitos para rotular são:
1. CLAUDE.md
2. Permissions
3. Plan Mode
4. Checkpoints
5. Skills
6. Hooks
7. MCP (Model Context Protocol)
8. Plugins
9. Context
10. Commands
11. Compaction
12. Subagents

## Principais Aprendizados
4 a 7 bullets acionáveis que alguém vendo a live pela primeira vez
deveria levar para casa.

## Links e recursos citados
Extraia QUALQUER URL, nome de ferramenta, biblioteca, documentação
ou repositório mencionado na live.

## Próximos passos sugeridos
2 a 4 ações concretas que o aluno pode fazer logo após assistir.

REGRAS:
- Não invente conteúdo. Só complemente conceitos quando isso melhorar a compreensão didática.
- Linguagem clara, direta, em português brasileiro.
- Tom técnico, prático, sem jargão desnecessário.
- Evite travessões longos e textos genéricos de IA.
```

## Sobre os 12 conceitos

Cada conceito tem uma entrada no glossário oficial do Claude Code, que traz uma definição curta e links para a documentação completa. Use isso de referência quando estiver preenchendo os resumos:

👉 https://code.claude.com/docs/en/glossary

A página oficial da Week, com descrição de cada conceito em português e dicas práticas, está em:

👉 https://digitalinnovationone.github.io/dio-pro-vitalicio-week-2026-agentes-ia
