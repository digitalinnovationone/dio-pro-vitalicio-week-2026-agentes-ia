# Sessão 2: Construindo os Agentes de Inteligência Artificial Back-end, Front-end, QA e DevOps com Claude Code

> Link da live: https://web.dio.me/lives/construindo-os-agentes-de-inteligencia-artificial-back-end-front-end-qa-e-devops-com-claude-code

## Resumo Executivo

Nesta segunda sessão da Vitalício Week, Venilton e Oswaldo Neto (Vart, CTO da DIO) saem do zero até um app de delivery funcional chamado Mandaí, usando Claude Design e Claude Code. O fluxo começa com um wireframe rabiscado no Excalidraw, vira um Design System completo no Claude Design, depois um protótipo de alta fidelidade exportado via handoff para o Claude Code. A arquitetura é definida manualmente em Markdown (Next.js no front, Fastify no back, Clean Architecture, Postgres) antes de qualquer agente codar uma linha, reforçando que a IA potencializa o profissional, mas não substitui a tomada de decisão técnica.

A parte central da live mostra três formas progressivas de trabalhar com agentes no Claude Code. A primeira usa um único agente conversando diretamente no terminal, ideal para tarefas simples como gerar um ERD em Mermaid. A segunda cria agentes especialistas isolados (Product Owner e Arquiteto) que executam em paralelo, mas sem se comunicar entre si. A terceira ativa o Agent Team, uma feature experimental que exige flag no settings.json e permissão total via bypass, onde quatro agentes (PO, Arquiteto, Backend, Frontend) coordenados por um Lead conversam entre si e entregam o projeto completo. O Tmux serve para enxergar todos eles trabalhando simultaneamente em painéis divididos.

O encerramento traz uma revisão dos 12 conceitos essenciais do Claude Code (disponibilizados num repositório bônus no GitHub da DIO), uma tentativa de executar o app gerado pelo time de agentes (com bugs resolvidos a partir de um print de tela enviado ao Claude) e a análise de custo da sessão: 3,28 dólares para construir o produto inteiro usando Sonnet. Os autores reforçam que o plano Pro é suficiente para estudos e portfólio, e que dividir o problema em vários agentes menores costuma ser mais eficiente do que apostar no Opus para tudo.

## Linha do Tempo

| Tempo    | Momento                                                                 |
|----------|-------------------------------------------------------------------------|
| 00:02:41 | Abertura da live, recap da sessão 1 e apresentação da agenda do dia     |
| 00:11:18 | Apresentação do projeto Mandaí e do wireframe rabiscado no Excalidraw   |
| 00:18:30 | Claude Design: como acessar, criar Design System e protótipos           |
| 00:23:40 | Demonstração das telas de alta fidelidade geradas pelo Claude Design    |
| 00:30:23 | Handoff do Claude Design e abertura do projeto no VS Code               |
| 00:37:10 | Definição manual da arquitetura em Markdown (stack, pastas, ADRs)       |
| 00:43:00 | Explicação dos três modelos de agentes no Claude Code                   |
| 00:49:30 | Forma 1: agente único, comando /init e criação do CLAUDE.md             |
| 00:59:00 | Forma 2: criação dos agentes PO e Arquiteto rodando em paralelo         |
| 01:17:30 | Forma 3: configuração do Agent Team com Tmux e flag experimental        |
| 01:30:00 | Disparo do Agent Team com quatro agentes spawnados simultaneamente      |
| 01:38:00 | Apresentação do repositório bônus com os 12 conceitos do Claude Code    |
| 01:46:50 | Revisão conceito por conceito (CLAUDE.md, Plan Mode, Skills, MCP, etc.) |
| 02:08:00 | Tentativa de rodar a API e o front gerados pelos agentes                |
| 02:30:00 | Verificação do custo total da sessão com /users (3,28 dólares)          |
| 02:43:00 | Recap final, spoiler da próxima live (Agent Board) e encerramento       |

## Conceitos Explorados

- `CLAUDE.md` — 00:49:30 e 01:46:50. Vart roda `/init` no diretório do projeto para o Claude varrer os arquivos de arquitetura e design já existentes e gerar o CLAUDE.md, que funciona como memória inicial carregada toda vez que uma sessão começa.
- `Permissions` — 00:55:00 e 01:47:50. Durante a forma 1, o Claude pede permissão a cada ação. Mais tarde, para o Agent Team funcionar, Vart usa a flag bypass permissions para dar autonomia total, alertando que isso só deve ser feito em sandbox.
- `Plan Mode` — 01:48:50. Citado no recap dos 12 conceitos como o modo em que o Claude monta um plano detalhado antes de modificar arquivos, permitindo revisar e refinar antes de autorizar a execução.
- `Checkpoints` — 01:50:23. Apresentado teoricamente: a cada interação o Claude salva o estado, e usando Esc duas vezes ou o comando rewind dá para voltar a um ponto anterior da conversa se a decisão tomada não foi a melhor.
- `Skills` — 01:52:50. Vart dá o exemplo prático de criar uma skill que use Whisper da OpenAI para transcrição de áudio dentro do Claude Code, mostrando que skills podem inclusive integrar modelos de outros provedores.
- `Hooks` — 01:54:50. Explicados como scripts que disparam em momentos específicos da sessão, por exemplo o PreToolUse, que bloqueia comandos perigosos antes de executar uma ferramenta.
- `MCP` — 01:55:30. Citado o protocolo aberto que conecta o Claude a ferramentas externas como Jira, GitHub, Figma e Postgres, com o exemplo de um MCP do Jira permitindo ao agente comentar diretamente nas histórias de usuário.
- `Plugins` — 01:57:30 e 02:18:30. Definidos como pacotes prontos combinando skills, agentes, comandos e hooks. No final da live, durante a tentativa de matar processos, o Claude puxou um plugin automaticamente para resolver a tarefa.
- `Context` — 00:33:30 e 01:58:13. Vart explica que o Sonnet trabalha com uma janela de 1 milhão de tokens e que tudo do projeto (handoff, ADRs, user stories) é colocado nessa janela. No recap, recomenda usar /clear para começar conversas limpas e economizar tokens.
- `Commands` — 02:00:13. Vart usa vários comandos nativos ao longo da live (`/init`, `/agents`, `/users`) e Venilton explica que dá para criar comandos próprios para disparar fluxos repetitivos.
- `Compaction` — 02:00:40. Apresentado como o comando `/compact` que comprime a conversa atual liberando tokens sem perder o essencial do contexto, alternativa para conversas longas em vez de pedir um resumo via prompt.
- `Subagents` — 00:59:00 a 01:30:00. É o coração da live. Vart cria primeiro PO e Arquiteto via `/agents` (cada um com System Prompt, modelo Sonnet e cor própria), depois evolui para o Agent Team com quatro desenvolvedores especializados rodando em paralelo e se comunicando entre si.

## Principais Aprendizados

- Antes de chamar a IA para codar, invista tempo em design (Claude Design + Excalidraw), arquitetura e modelagem documentada em Markdown. Quanto mais detalhe e especificação você fornece, menos decisões os agentes precisam tomar por conta própria e mais o resultado bate com o esperado.
- Escolha o nível certo de orquestração. Para tarefas pontuais, o agente único basta. Para problemas paralelizáveis, crie agentes especialistas isolados. Para construir um produto inteiro, use o Agent Team, mas lembre que ele exige feature flag no settings.json, bypass permissions e Tmux para você acompanhar.
- Use o Sonnet como padrão e quebre o problema em vários agentes em vez de subir para o Opus. Na live, o time inteiro custou 3,28 dólares com Sonnet; o mesmo trabalho com Opus 4.7 chegaria perto de 15 dólares. Dividir para conquistar reduz a complexidade que cada agente precisa enfrentar.
- O CLAUDE.md é o ponto de partida obrigatório de qualquer projeto. Rode `/init` no diretório com os documentos de arquitetura e design já dentro, para que toda sessão nova já comece com memória rica do projeto em vez da amnésia padrão.
- O plano Pro do Claude resolve para estudos, portfólio e até para boa parte do trabalho profissional, desde que você organize as sessões. Quando bater o limite de cinco horas, planeje o próximo bloco com calma em vez de pular direto para o Max.
- Quando o agente travar num bug, mande tudo que for informação: stack trace, log, print de tela. Vart resolveu um erro do Next mandando apenas um screenshot da página quebrada, sem nem digitar a mensagem de erro. O Claude usa essas pistas para navegar a aplicação por conta própria e encontrar a causa.