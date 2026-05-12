# Resumos das Lives

Esta pasta tem um arquivo por live da **DIO PRO Vitalício Week 2026**. Cada arquivo recebe o resumo da sessão correspondente, gerado a partir da transcrição da live, rotulando os conceitos do Claude Code que aparecem em cada momento.

## Sessões

| # | Arquivo | Sessão |
|---|---------|--------|
| 1 | [`sessao-1.md`](./sessao-1.md) | Setup do Claude Code para Acelerar 100x a Produtividade |
| 2 | [`sessao-2.md`](./sessao-2.md) | Agentes de IA Back-end, Front-end, QA e DevOps |
| 3 | [`sessao-3.md`](./sessao-3.md) | Kanban para Orquestração de Agentes |
| 4 | [`sessao-4.md`](./sessao-4.md) | Mentoria com Experts da DIO |

## Como os resumos são gerados

1. **Captura** da transcrição da live a partir do player da DIO.
2. **Geração** do resumo com o prompt abaixo, usando Claude Code.
3. **Revisão humana**, ajustando timestamps, links e linguagem.

### Prompt usado

```text
Você vai receber a transcrição de uma live da DIO PRO Vitalício Week 2026
sobre Claude Code e agentes de IA. Gere um resumo em português brasileiro,
seguindo a estrutura abaixo.

# Sessão N: <título da live>

> Link da live: <URL>

## Resumo Executivo
2 a 3 parágrafos com os pontos centrais da live. Voz ativa, linguagem direta.

## Linha do Tempo
Tabela com 6 a 12 marcos da live:

| Tempo | Momento |
| HH:MM | descrição curta do que acontece |

## Conceitos Apresentados
Liste APENAS os conceitos do Claude Code que aparecem na live. Para cada um,
informe o timestamp em que aparece e descreva, em 1 ou 2 frases, como foi
usado na prática.

Os conceitos possíveis são: CLAUDE.md, Permissions, Plan Mode, Checkpoints,
Skills, Hooks, MCP, Plugins, Context, Commands, Compaction e Subagents.
Se um conceito não for abordado, simplesmente não inclua na lista.

## Principais Aprendizados
4 a 6 bullets com aprendizados acionáveis que o aluno deve levar da live.

## Links e Recursos
Liste todas as URLs, ferramentas, bibliotecas, documentações e repositórios
citados durante a live.

## Próximos Passos
2 a 4 ações concretas que o aluno pode fazer logo após assistir.

REGRAS:
- Não invente conteúdo. Se algo não está na transcrição, não inclua.
- Linguagem clara e direta, em português brasileiro.
- Sem travessões longos ou textos genéricos de IA.
```

## Sobre os 12 conceitos

Cada conceito tem uma entrada no glossário oficial do Claude Code, com definição curta e links para a documentação completa:

👉 https://code.claude.com/docs/en/glossary

A página oficial da Week, com descrição em português e dicas práticas:

👉 https://digitalinnovationone.github.io/dio-pro-vitalicio-week-2026-agentes-ia
