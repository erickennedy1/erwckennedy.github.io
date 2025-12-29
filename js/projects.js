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
    id: "dark-ascent",
    title: "Dark Ascent",
    description: "Jogo 2D desenvolvido em Unity como projeto de graduação na Fatec Americana. Platformer com foco em shaders e efeitos visuais.",
    icon: "🎮",
    image: "assets/images/projects/dark-ascent/cover.png",
    tags: ["Unity", "C#", "ShaderLab", "HLSL"],
    github: "https://github.com/erickennedy1/dark-ascent",
    demo: "https://kakohari.itch.io/thorn-ascent",
    details: {
      fullDescription: `
        Dark Ascent é um jogo platformer 2D desenvolvido em Unity como projeto de graduação
        na Fatec Americana. O projeto foca em mecânicas de plataforma combinadas com
        efeitos visuais elaborados utilizando shaders customizados.

        Desenvolvido em colaboração, o jogo apresenta uma estética dark com uso intensivo
        de ShaderLab e HLSL para criar atmosferas imersivas e efeitos visuais únicos.
      `,
      features: [
        "Mecânicas de plataforma fluidas e responsivas",
        "Shaders customizados para efeitos visuais",
        "Atmosfera dark com iluminação dinâmica",
        "Level design progressivo",
        "Disponível para download no itch.io"
      ],
      images: [
        "assets/images/projects/dark-ascent/screenshot-1.png"
      ]
    }
  },
  {
    id: "mk-beauty",
    title: "mK Beauty",
    description: "Provador virtual de cores de cabelo com IA. Aplicação web que usa segmentação de imagem para simular colorações em tempo real.",
    icon: "💇",
    image: "assets/images/projects/mk-beauty/cover.png",
    tags: ["Vue 3", "MediaPipe", "Tailwind", "Vite"],
    github: null,
    demo: "https://metakosmoslab.com/aneethun/",
    details: {
      fullDescription: `
        mK Beauty é um provador virtual de cores de cabelo desenvolvido para a Metakosmos.
        A aplicação utiliza inteligência artificial para detectar e segmentar o cabelo
        do usuário em tempo real, permitindo visualizar diferentes colorações antes de aplicá-las.

        Projeto desenvolvido com código proprietário, combinando processamento de imagem
        avançado com uma interface intuitiva para proporcionar uma experiência imersiva ao usuário.
      `,
      features: [
        "Segmentação de cabelo em tempo real com MediaPipe",
        "Aplicação de cores com ajuste de intensidade e brilho",
        "Modo comparação split-view (antes/depois)",
        "Catálogo de cores por categorias (naturais, fantasia, etc)",
        "Sistema de favoritos",
        "Captura e download de fotos",
        "Layout responsivo mobile/desktop"
      ],
      images: []
    }
  },
  {
    id: "dev-wrapped",
    title: "Dev Wrapped",
    description: "Retrospectiva anual para desenvolvedores. Conecta com GitHub, Linear e Google para gerar um resumo do seu ano como dev.",
    icon: "📊",
    image: "assets/images/projects/dev-wrapped/cover.jpeg",
    tags: ["Vue 3", "Vite", "Node.js", "APIs"],
    github: "https://github.com/erickennedy1/dev-wrapped",
    demo: null,
    details: {
      fullDescription: `
        Dev Wrapped é uma aplicação inspirada no Spotify Wrapped, mas voltada para desenvolvedores.
        Conecte suas contas do GitHub, Linear e Google para gerar uma retrospectiva completa
        do seu ano como desenvolvedor.

        A aplicação coleta dados de commits, PRs, issues, emails e eventos para criar
        um resumo visual e interativo das suas conquistas e atividades ao longo do ano.
      `,
      features: [
        "Integração com GitHub (commits, PRs, issues)",
        "Integração com Linear (issues criadas e completadas)",
        "Integração com Google (emails e eventos)",
        "Geração de retrospectiva visual",
        "Interface clean e intuitiva"
      ],
      images: [
        "assets/images/projects/dev-wrapped/screenshot-1.jpeg",
        "assets/images/projects/dev-wrapped/screenshot-2.jpeg",
        "assets/images/projects/dev-wrapped/screenshot-3.jpeg"
      ]
    }
  },
  {
    id: "azuliaverso",
    title: "Azulia Verso",
    description: "Mundo 3D submarino desenvolvido em Unity para a plataforma Spatial. Ambiente imersivo com visual scripting e shaders customizados.",
    icon: "🌊",
    image: "assets/images/projects/azuliaverso/cover.jpg",
    tags: ["Unity", "C#", "ShaderLab", "Spatial"],
    github: "https://github.com/erickennedy1/azuliaverso",
    demo: null,
    details: {
      fullDescription: `
        Azulia Verso é um ambiente 3D submarino desenvolvido em Unity para a plataforma Spatial.
        O projeto cria um mundo imersivo com temática oceânica, utilizando visual scripting
        para interações e shaders customizados para efeitos visuais subaquáticos.

        Desenvolvido com base no Spatial Unity SDK, o ambiente permite que múltiplos
        usuários explorem o cenário juntos em tempo real.
      `,
      features: [
        "Ambiente 3D submarino imersivo",
        "Desenvolvido para plataforma Spatial (multiplayer)",
        "Visual scripting para interações",
        "Shaders customizados (ShaderLab/HLSL)",
        "Sistema de diálogos e NPCs",
        "Cenário detalhado com fauna e flora marinha"
      ],
      images: [
        "assets/images/projects/azuliaverso/screenshot-1.jpg",
        "assets/images/projects/azuliaverso/screenshot-2.jpg",
        "assets/images/projects/azuliaverso/screenshot-3.jpg"
      ]
    }
  },
  {
    id: "familia-folhas",
    title: "Família Folhas",
    description: "Mundo 3D estilizado desenvolvido em Unity para a plataforma Spatial. Ambiente com visual low-poly e shaders customizados.",
    icon: "🌳",
    image: "assets/images/projects/familia-folhas/cover.jpg",
    tags: ["Unity", "C#", "ShaderLab", "Spatial"],
    github: "https://github.com/erickennedy1/amo-vacinas",
    demo: null,
    details: {
      fullDescription: `
        Família Folhas é um ambiente 3D estilizado desenvolvido em Unity para a plataforma Spatial.
        O projeto apresenta um mundo com estética low-poly, utilizando shaders customizados
        para criar uma atmosfera única e acolhedora.

        Desenvolvido com o Spatial Unity SDK, o ambiente permite que múltiplos
        usuários explorem o cenário juntos em tempo real, com elementos interativos
        e visuais detalhados.
      `,
      features: [
        "Ambiente 3D estilizado com visual low-poly",
        "Desenvolvido para plataforma Spatial (multiplayer)",
        "Shaders customizados (ShaderLab/HLSL/GLSL)",
        "Cenário detalhado com vegetação e estruturas",
        "Experiência multiplayer em tempo real"
      ],
      images: [
        "assets/images/projects/familia-folhas/screenshot-1.jpg",
        "assets/images/projects/familia-folhas/screenshot-2.jpg",
        "assets/images/projects/familia-folhas/screenshot-3.jpg",
        "assets/images/projects/familia-folhas/screenshot-4.jpg",
        "assets/images/projects/familia-folhas/screenshot-5.jpg"
      ]
    }
  },
  {
    id: "mk-tryon-lab",
    title: "mK Try-On Lab",
    description: "Provador virtual com IA para experimentar roupas, óculos, joias, bonés e tênis. Gera imagens realistas usando inteligência artificial.",
    icon: "👗",
    image: "assets/images/projects/mk-tryon-lab/cover.png",
    tags: ["Vue 3", "Tailwind", "Replicate API", "Face-API"],
    github: null,
    demo: null,
    details: {
      fullDescription: `
        mK Try-On Lab é uma plataforma de provador virtual com IA desenvolvida para a Metakosmos.
        Permite que usuários experimentem roupas, óculos, joias, bonés e tênis virtualmente
        usando inteligência artificial para gerar imagens realistas.

        A plataforma suporta múltiplas marcas e categorias de produtos, oferecendo uma
        experiência de compra imersiva e interativa para o e-commerce de moda.
        Projeto desenvolvido com código proprietário.
      `,
      features: [
        "Prova virtual de roupas com IA generativa",
        "Experimentação de óculos e acessórios",
        "Visualização de joias (colares, brincos, anéis)",
        "Prova de bonés e chapéus",
        "Visualização de tênis nos pés",
        "Suporte a múltiplas marcas (Animale, Maria Filó, Renner, C&A)",
        "Integração com Replicate API para geração de imagens",
        "Detecção facial com Face-API.js"
      ],
      images: [
        "assets/images/projects/mk-tryon-lab/screenshot-1.png",
        "assets/images/projects/mk-tryon-lab/screenshot-2.png",
        "assets/images/projects/mk-tryon-lab/screenshot-3.png"
      ]
    }
  }

  // Adicione mais projetos aqui seguindo a mesma estrutura
];
