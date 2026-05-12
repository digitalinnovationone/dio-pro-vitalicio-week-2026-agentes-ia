# Sessão 1: Setup do Claude Code para Acelerar 100x a Produtividade no Desenvolvimento
> Link da live: __https://web.dio.me/lives/setup-do-claude-code-para-acelerar-100x-a-produtividade-no-desenvolvimento__

## Resumo Executivo

Felipe Aguiar (Felipão) e Oswaldo conduzem a primeira live técnica da DIO PRO Vitalício Week 2026, com foco em colocar todos os assinantes no mesmo nível com o Claude Code. A dupla parte do zero absoluto: explica o que é Harness (o "corpo" que permite o LLM agir além de só responder texto), mostra o processo de instalação tanto pela extensão oficial do VS Code quanto pelo terminal, e cobre os primeiros comandos essenciais como `claude doctor`, `claude -p`, `/model` e `/effort`. A escolha didática é construir o projeto Mandaí, um app de delivery em Next.js com TypeScript e Tailwind, que vai evoluir ao longo das próximas mentorias.

Na sequência, Oswaldo demonstra na prática o scaffold do projeto a partir de um prompt estruturado, explica como o Cloud Code interage com o desenvolvedor pedindo permissões (Edit Mode), validando o próprio trabalho com curl e mantendo a sessão organizada. A live aprofunda em janela de contexto, sessões de 5 horas, controle de tokens, criação do arquivo CLAUDE.md como memória persistente e a definição de um agente especializado de Product Owner com System Prompt próprio. Para fechar, Felipão revela uma surpresa criada ao vivo: dois agentes trabalhando em paralelo durante a transmissão para gerar um Wiki resumo da live, demonstrando o poder de orquestrar Subagents.

O recado central da dupla é claro: IA deixou de ser diferencial e virou pré-requisito para entrar no mercado. Quem dominar essas ferramentas agora vai sair na frente, mas com responsabilidade técnica e ética, mantendo o desenvolvedor no controle das decisões arquiteturais e de segurança.

## Linha do Tempo

| Tempo | Momento |
|-------|---------|
| 00:07:11 | Por que Claude Code: a virada das sessões de longa duração contra o autocomplete tradicional |
| 00:12:22 | Conceito de Harness explicado com analogia do cérebro (LLM) e corpo (ferramentas) |
| 00:17:08 | Claude Code só está disponível a partir do plano Pro pago da Anthropic |
| 00:24:24 | Demonstração de `claude doctor`, `claude --version` e `claude -p` no terminal |
| 00:29:00 | Apresentação dos modelos Opus, Sonnet e Haiku com o comando `/model` |
| 00:31:22 | Effort levels (low, medium, high, x-high, max) e o impacto no consumo de tokens |
| 00:46:48 | Prompt estruturado para scaffold do Mandaí com stack Next.js, TypeScript e Tailwind |
| 00:54:54 | Edit Mode em ação: Cloud Code pedindo permissão para cada operação nova |
| 01:09:28 | Análise da janela de contexto de 1 milhão de tokens com `/context` |
| 01:15:58 | Criação do CLAUDE.md via comando `/init` como memória persistente do projeto |
| 01:25:30 | Construção manual de um agente Product Owner com System Prompt customizado |
| 01:49:34 | Revelação da surpresa: Wiki resumo da live gerado ao vivo por dois agentes em paralelo |

## Conceitos Explorados

`CLAUDE.md` (~01:15:58): Apresentado como memória persistente do projeto, criado via comando `/init`. Felipão compartilha que coloca ali code conventions, design patterns que ele não quer (negative prompts) e padrões de rotas da API, garantindo consistência entre sessões.

`Permissions` (~00:54:54): O Cloud Code pede permissão sempre que vai fazer algo novo (editar arquivo, rodar bash, instalar pacote). Oswaldo aprova as edições conforme o projeto avança, mostrando que o desenvolvedor mantém o controle das ações sensíveis.

`Plan Mode` (~01:39:58): Ativado via Shift+Tab, faz o Cloud Code planejar tudo antes de executar, gerando um JSON interno com etapas e subprocessos. Oswaldo recomenda para atividades complexas, comparando com cerimônias de refinamento técnico de times ágeis.

`Skills` (~01:33:36): Playbooks que ensinam habilidades específicas ao agente, como verificar arquivos `.test`, fazer deploy via Terraform ou padronizar escrita de user stories. Felipão usa a analogia com Recipes do mundo .NET para facilitar o entendimento.

`Context` (~01:09:28): Comando `/context` mostra visualmente a janela de 1 milhão de tokens com system prompt, messages, skills e espaço livre. Oswaldo reforça que cada turno consome mais tokens e que entender isso é essencial para gerenciar os limites das sessões de 5 horas.

`Commands` (~00:35:39): Demonstra os comandos nativos via barra (`/help`, `/model`, `/clear`, `/context`, `/compact`, `/usage`, `/init`, `/agents`), o uso de `!` para executar bash sem sair do TUI, e menciona que dá para criar comandos customizados para tarefas repetitivas.

`Compaction` (~01:13:34): Comando `/compact` sumariza a janela de contexto preservando apenas o essencial. Útil quando o modelo começa a alucinar por excesso de contexto, mas ainda não terminou a tarefa em andamento. O Cloud Code também dispara o compact automaticamente quando o limite se aproxima.

`Subagents` (~01:21:46): Criação de agentes especializados via `/agents`, cada um com System Prompt, escopo, modelo e ferramentas próprias. A live cria um agente de Product Owner para gerar user stories, e Felipão demonstra dois agentes em paralelo construindo o Wiki resumo durante a transmissão.

## Principais Aprendizados

- Escolha o modelo certo para cada tarefa em vez de usar Opus para tudo. Bugs simples e refatorações pontuais rodam bem em Sonnet ou Haiku, economizando tokens dentro da sessão de 5 horas. Use também o effort level (low para tarefas simples, x-high para refatorações complexas) como segunda alavanca de otimização.

- Crie o CLAUDE.md logo no início do projeto com `/init` e enriqueça com suas convenções, design patterns proibidos e regras de padronização (rotas, naming, estrutura de pastas). Essa memória persistente elimina a amnésia entre sessões e mantém o agente alinhado com suas decisões arquiteturais.

- Domine o ciclo Plan Mode, Edit Mode e Auto Mode (Shift+Tab para alternar). Para features complexas, comece em Plan Mode para revisar a abordagem antes da execução. Para tarefas conhecidas e seguras, Auto Mode acelera. Edit Mode é o equilíbrio para o dia a dia, com você validando cada passo crítico.

- Gerencie ativamente o contexto: use `/context` para inspecionar o consumo, `/compact` quando o modelo começar a se perder, e `/clear` ao iniciar uma tarefa totalmente nova. Sessão limpa consome menos tokens e produz respostas mais focadas.

- Adote Spec Driven Development antes de soltar prompts soltos. Escreva user stories, ADRs e o passo a passo da feature em markdown antes de pedir código. A IA toma decisões muito melhores quando enxerga o todo, e você evita situações como o caso citado na live de uma IA que dropou todas as tabelas por causa de um prompt mal especificado.

- Use Subagents para tarefas com escopo bem delimitado (PO, backend, frontend, QA). A live mostra que dá para colocar dois agentes trabalhando em paralelo enquanto você foca em outra coisa, e que essa orquestração é o caminho natural para as próximas mentorias da DIO PRO Vitalício Week.