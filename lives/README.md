# Resumos das Lives

Esta pasta vai receber um resumo exclusivo de cada live da **DIO PRO Vitalício Week 2026**. Os resumos são gerados a partir da transcrição de cada sessão e rotulam, em cada momento da gravação, qual dos 7 conceitos essenciais do Claude Code está sendo demonstrado.

## Lives da Week

| # | Arquivo | Sessão |
|---|---------|--------|
| 1 | `sessao-1.md` | Setup do Claude Code para acelerar 100x a produtividade |
| 2 | `sessao-2.md` | Agentes de IA Back-end, Front-end, QA e DevOps |
| 3 | `sessao-3.md` | Kanban ao vivo para orquestração de Agentes |
| 4 | `sessao-4.md` | App de Delivery do zero ao deploy |

> Os arquivos serão adicionados conforme cada live acontece.

## Como os resumos são gerados

O processo tem três etapas:

1. Captura da transcrição da live a partir do player da DIO.
2. Geração do resumo usando o prompt abaixo, com Claude Code.
3. Revisão humana, ajustando timestamps, links e linguagem onde necessário.

### Prompt usado

```text
Você é um analista técnico especializado em Claude Code e fluxos de
trabalho com agentes de IA. Vou te enviar a transcrição completa de
uma live da DIO PRO Vitalício Week 2026.

Sua tarefa é produzir um resumo em português brasileiro, seguindo
exatamente esta estrutura em Markdown:

# Sessão N: <título da live>

> Link da live: <URL>

## Resumo executivo
2 a 3 parágrafos com os pontos centrais da live, voz ativa, sem
marketês.

## Linha do tempo
Tabela com 6 a 12 marcos no formato:
| Tempo | Momento |
| HH:MM | descrição curta |

## Os 7 conceitos rotulados nesta live
Para CADA um dos 7 conceitos abaixo, indique:
- Se aparece na live (sim ou não)
- Em qual timestamp aparece
- Como foi usado, em 1 ou 2 frases concretas
Se NÃO aparecer, escreva apenas: "Não abordado nesta sessão."

Os 7 conceitos são:
1. CLAUDE.md
2. Plan Mode
3. Slash Commands
4. Skills
5. MCP (Model Context Protocol)
6. Context
7. Compaction

## Principais aprendizados
4 a 7 bullets acionáveis que alguém vendo a live pela primeira vez
deveria levar para casa.

## Links e recursos citados
Extraia QUALQUER URL, nome de ferramenta, biblioteca, documentação
ou repositório mencionado na live.

## Próximos passos sugeridos
2 a 4 ações concretas que o aluno pode fazer logo após assistir.

REGRAS:
- Não invente conteúdo. Se algo não estiver na transcrição, escreva
  "(não mencionado na live)".
- Linguagem clara, direta, em português brasileiro.
- Tom técnico, prático, sem jargão desnecessário.
- Evite travessões longos e textos genéricos de IA.
```

## Sobre os 7 conceitos

Cada resumo rotula os 7 conceitos essenciais que estruturam toda a Week. A página oficial com eles está em:

👉 https://digitalinnovationone.github.io/dio-pro-vitalicio-week-2026-agentes-ia
