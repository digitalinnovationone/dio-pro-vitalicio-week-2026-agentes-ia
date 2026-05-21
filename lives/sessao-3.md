# Sessão 3: Criação do Kanban para Orquestração do Seu Time de Agentes de IA

> Link da live: https://web.dio.me/lives/criacao-do-kanban-ao-vivo-para-orquestracao-do-seu-time-de-agentes-de-ai

## Resumo Executivo

Felipe Aguiar (Felipão) e Oswaldo (Vart) encerram a série de mentorias sobre Claude Code partindo do ponto onde a Sessão 2 parou: o aplicativo Mandaí, um delivery construído com agentes de IA, rodando apenas localmente. A primeira meta da live foi colocar essa aplicação em produção. Para isso, Oswaldo provisionou um banco Postgres no Neon através da Vercel, rodou os comandos de migrate e seed pelo Prisma, configurou variáveis de ambiente protegidas no .env e fez o deploy do back-end Fastify e do front-end Next.js em projetos separados na Vercel, mostrando todos os pequenos detalhes do caminho, como apontar o root directory para apps API ou apps web num monorepo, e como diferenciar variáveis de ambiente de produção, preview e desenvolvimento.

Com o Mandaí no ar, eles apresentaram uma quarta forma de orquestrar agentes que ainda não tinha aparecido na série: o Agent Board, um sistema construído em cima do Claude Code que funciona como um Trello para agentes. O usuário cria fases personalizadas (Backlog, Especificação, Arquitetura, Desenvolvimento, Teste), aloca agentes em cada fase com System Prompts próprios, define o modelo e o effort, e abre cards de demanda. Cada agente trabalha no diretório do projeto, gera artefatos (user stories, ADRs, código) e faz handoff automático para a próxima fase. A motivação central, segundo Oswaldo, é democratizar a orquestração de agentes para pessoas menos técnicas, que se intimidam com o terminal do Claude Code mas conseguem trabalhar bem com uma interface visual.

Os dois fecharam a live demonstrando o fluxo completo de ponta a ponta. Primeiro implementaram um cupom de boas-vindas de 10 reais no Mandaí usando agentes encadeados, e em seguida Felipe baixou o Agent Board no Windows e pediu para o time gerar a especificação de uma feature de recuperação de senha por magic link. O resultado foi uma user story completa, com requisitos funcionais, não funcionais, modelo de dados sugerido e contratos de API, no nível de qualidade que dificilmente um time humano entregaria sob pressão. O recado final foi direto: IA deixou de ser diferencial e passou a ser requisito básico no currículo de tecnologia, e a única forma de acompanhar é experimentar todo dia.

## Linha do Tempo

| Tempo    | Momento                                                              |
|----------|----------------------------------------------------------------------|
| 00:11:00 | Apresentação do projeto Mandaí no monorepo (Fastify, Next, Prisma)   |
| 00:18:00 | Discussão sobre segurança de chaves e credenciais em projetos com IA |
| 00:24:00 | Criação do banco Postgres no Neon via Vercel e configuração do .env  |
| 00:30:00 | Execução do migrate e seed pelo Prisma para popular o banco          |
| 00:37:00 | Testes locais da API com o Claude Code rodando endpoints             |
| 00:42:00 | Deploy da API e do front-end na Vercel apontando para o monorepo     |
| 00:58:00 | Aplicação Mandaí completamente no ar acessível pela URL pública      |
| 01:01:00 | Apresentação do Agent Board, quarta forma de orquestrar agentes      |
| 01:04:00 | Criação dos agentes Faro (pesquisa) e Pena (produção de conteúdo)    |
| 01:15:00 | Discussão sobre comunicação Agent to Agent e tipos de orquestração   |
| 01:26:00 | Demonstração do Plan Mode para resolver bugs com segurança           |
| 01:33:00 | Configuração das fases do Kanban e alocação dos agentes do Mandaí    |
| 02:00:00 | Implementação completa do cupom de boas-vindas no Mandaí             |
| 02:12:00 | Recapitulação das três sessões e encerramento da série               |

## Conceitos Explorados

- `CLAUDE.md` (00:20:00): Oswaldo cita o uso do arquivo CLAUDE.md como local para fixar diretrizes obrigatórias de segurança e arquitetura que precisam ser respeitadas em todo o desenvolvimento, funcionando como contrato persistente entre desenvolvedor e agente.

- `Permissions` (00:08:00 e 00:41:00): Aparece em dois momentos. Primeiro, na configuração do settings do Claude Code para liberar a execução de Agent Teams, e depois na conexão entre Vercel e GitHub, em que o desenvolvedor pode escolher dar acesso total ou apenas a repositórios específicos, mostrando boas práticas de segurança ao integrar serviços.

- `Plan Mode` (01:26:00): Felipe e Oswaldo demonstram o Plan Mode para investigar uma constraint do banco antes de aplicar qualquer mudança. O Plan Mode busca, entende o problema, propõe uma solução e só executa depois de aprovação explícita, o que torna seguro mexer em código sensível.

- `Skills` (00:22:00): Felipe menciona o Security MD como uma skill que pode ser carregada no Claude Code para rodar checks de vulnerabilidades pré-definidos em código gerado, complementando ferramentas tradicionais como SAST e Sonar.

- `MCP` (00:51:00): A integração com o Neon dentro da Vercel é citada como exemplo de conector, e Felipe lembra que a Vercel oferece integrações nativas com várias outras ferramentas no estilo de servidores MCP, como PostHog e Sentry.

- `Context` (00:08:00 e 01:16:00): Oswaldo explica como cada modelo do Claude Code tem uma janela de contexto diferente (citando o exemplo do Opus 4.7 com 1 milhão de tokens) e como o contexto é o que diferencia um agente isolado de um sub-agente ou de um Agent Team com comunicação Agent to Agent.

- `Subagents` (00:09:00 e 01:16:00): Oswaldo mostra o diagrama das três formas de trabalhar no Claude Code. Os sub-agents trabalham em paralelo mas se comunicam apenas com o processo main, enquanto o Agent Team permite comunicação direta entre agentes através do handoff, que ficou evidente quando o Sentinel interagiu com o LUM durante o desenvolvimento da feature de recuperação de senha.

## Principais Aprendizados

- Coloque o projeto no ar o quanto antes, mesmo um MVP simples. Nada vale mais num portfólio do que uma URL pública funcionando, e ferramentas como Vercel e Neon tornam isso uma questão de minutos quando o projeto está bem estruturado num monorepo.

- Trate o arquivo .env como seu molho de chaves. Mesmo desenvolvendo com IA, separe credenciais, use arquivos .env.example para documentar o esperado, configure variáveis diferentes para produção, preview e desenvolvimento, e considere rotação automática para senhas sensíveis de banco.

- Existem quatro maneiras de orquestrar agentes no Claude Code, e cada uma tem seu lugar. Agente único para tarefas simples, Subagents para trabalho paralelo sem comunicação direta, Agent Team para comunicação Agent to Agent em problemas complexos, e sistemas customizados em cima do Claude Code (como o Agent Board) para democratizar o uso a pessoas menos técnicas.

- A arquitetura ainda é responsabilidade humana. A IA implementa muito bem, mas você precisa definir o cercadinho onde ela vai trabalhar. Estabeleça padrões, defina contratos, escreva ADRs, mantenha a Clean Architecture, e revise o código gerado com o mesmo cuidado que você daria a um pull request de um desenvolvedor júnior.

- Use Plan Mode antes de mudanças sensíveis. Em vez de pedir para a IA resolver um bug direto, peça primeiro um plano de investigação. Isso evita que ela tome decisões drásticas em produção e te dá tempo para refinar a abordagem antes da execução.

- A documentação e os testes deixaram de ter justificativa para ficar para trás. Enquanto o desenvolvedor foca no problema de negócio, a IA pode gerar em paralelo a documentação, os testes unitários e de integração, os ADRs e até as user stories no nível de detalhe que um PO sênior entregaria, com critérios de aceite no formato Dado-Quando-Então.