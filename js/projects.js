/**
 * DADOS DOS PROJETOS
 * ==================
 * Edite este arquivo para adicionar/remover projetos.
 * 
 * Estrutura de cada projeto:
 * - id: identificador único (usado na URL da página)
 * - title: nome do projeto
 * - description: descrição curta (exibida no card)
 * - icon: emoji do projeto
 * - image: caminho para imagem de capa (ou null para placeholder)
 * - tags: array de tecnologias usadas
 * - github: link do repositório
 * - demo: link da demo (opcional)
 * - details: objeto com informações da página individual
 */

const PROJECTS = [
  {
    id: "mini-game-platformer",
    title: "Mini Game Platformer",
    description: "Jogo 2D criado em Unity focado em mecânicas simples e polish visual. Controles responsivos e level design intuitivo.",
    icon: "🎮",
    image: "assets/images/projects/platformer.png", // Coloque sua imagem aqui
    tags: ["Unity", "C#", "2D"],
    github: "https://github.com/erickennedy/mini-game-platformer",
    demo: null,
    details: {
      fullDescription: `
        Um platformer 2D desenvolvido em Unity com foco em gameplay fluida e visual clean.
        
        O projeto nasceu do desejo de criar algo simples mas polido, aplicando conceitos de
        game feel e juice para tornar cada interação satisfatória.
      `,
      features: [
        "Sistema de movimentação responsivo com coyote time",
        "Animações suaves com transições state machine",
        "Efeitos de partículas para feedback visual",
        "Level design progressivo com curva de dificuldade",
        "Sistema de checkpoints e respawn"
      ],
      images: [
        // Adicione paths das screenshots aqui
        // "assets/images/projects/platformer/screenshot1.png",
        // "assets/images/projects/platformer/screenshot2.png",
      ]
    }
  },
  {
    id: "api-full-stack",
    title: "API Full Stack",
    description: "API REST completa com autenticação JWT, banco de dados PostgreSQL e dashboard web para gerenciamento.",
    icon: "⚡",
    image: "assets/images/projects/api.png",
    tags: ["Node.js", "React", "PostgreSQL", "JWT"],
    github: "https://github.com/erickennedy/api-full-stack",
    demo: null,
    details: {
      fullDescription: `
        Uma API REST robusta construída com Node.js e Express, com frontend React para
        administração. Implementa autenticação segura, validação de dados e boas práticas
        de desenvolvimento.
      `,
      features: [
        "Autenticação JWT com refresh tokens",
        "CRUD completo com validação",
        "Dashboard admin em React",
        "Documentação Swagger automática",
        "Testes unitários e de integração",
        "Deploy containerizado com Docker"
      ],
      images: []
    }
  },
  {
    id: "shorts-ia",
    title: "Shorts com IA",
    description: "Pipeline automatizado para criação de vídeos curtos usando IA. Gera roteiros, áudio e edição automática.",
    icon: "🤖",
    image: "assets/images/projects/shorts.png",
    tags: ["Python", "OpenAI", "FFmpeg", "Automation"],
    github: "https://github.com/erickennedy/shorts-ia",
    demo: null,
    details: {
      fullDescription: `
        Sistema completo de automação para criação de shorts/reels usando inteligência artificial.
        Desde a geração do roteiro até a exportação do vídeo final, tudo automatizado.
      `,
      features: [
        "Geração de roteiros com GPT",
        "Text-to-speech com vozes naturais",
        "Busca automática de imagens/vídeos de stock",
        "Edição automática com FFmpeg",
        "Legendas sincronizadas",
        "Export otimizado para cada plataforma"
      ],
      images: []
    }
  }
  
  // Adicione mais projetos aqui seguindo a mesma estrutura
];
