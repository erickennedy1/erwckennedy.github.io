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
  }

  // Adicione mais projetos aqui seguindo a mesma estrutura
];
