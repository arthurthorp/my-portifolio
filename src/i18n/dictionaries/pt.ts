const pt = {
  header: {
    about: 'SOBRE',
    experience: 'EXPERIÊNCIA',
    projects: 'PROJETOS',
    skills: 'HABILIDADES',
    contact: 'CONTATO',
    lang: 'EN',
  },
  hero: {
    greeting: 'SOU DEV',
    role: 'Full Stack',
    based: 'OLÁ, ME CHAMO ARTHUR',
    summary: 'Construo interfaces de alto impacto e sistemas robustos. Foco em arquitetura escalável e experiências únicas.',
    cta: 'ENTRAR EM CONTATO',
    viewProject: 'VER PROJETOS',
  },
  about: {
    title: 'SOBRE',
    description1: 'Sou desenvolvedor Full Stack e gosto de transformar desafios complexos em soluções claras, eficientes e bem estruturadas. Uno uma base técnica sólida a uma atenção cuidadosa ao design e à experiência do usuário, buscando sempre entregar produtos que funcionem bem e façam sentido para quem os utiliza.',
    description2: 'Trabalho em toda a stack, desde a otimização de consultas de banco de dados até a criação de animações fluidas no front-end, sempre garantindo performance e acessibilidade.',
  },
  experience: {
    title: 'EXPERIÊNCIA',
    items: [
      {
        role: 'Desenvolvedor Full Stack Pleno III',
        company: 'Quality Digital',
        period: '2025 - Presente',
        description: 'Atuação Full Stack em projetos de grande escala, com foco em performance, automação e escalabilidade. Responsável pela automatização do cadastro e atualização de produtos em múltiplos ambientes para a Decathlon, reduzindo processos manuais e aumentando a eficiência operacional. Desenvolvimento de serviços e integrações utilizando Node.js, DynamoDB e arquitetura orientada a eventos, garantindo confiabilidade e processamento assíncrono robusto.',
      },
      {
        role: 'Desenvolvedor Full Stack Pleno III',
        company: 'Adtail (Grupo Cadastra)',
        period: '2024 - 2025',
        description: 'Desenvolvimento e evolução de e-commerces em VTEX IO, CMS e FastStore, criando componentes customizados, apps para o Admin e integrações back-end em Node.js. Atuação em arquitetura de lojas, configuração de MasterData, implantação de checkout e serviços em Cloud. Participação ativa em reuniões com clientes para definição de escopo e suporte técnico, trabalhando em ambiente ágil com SCRUM e Git Flow.',
      },
      {
        role: 'Desenvolvedor Full Stack Pleno II',
        company: 'Cadastra',
        period: '2022 - 2024',
        description: 'Implementação e evolução de grandes e-commerces utilizando VTEX IO, CMS e FastStore, atuando em projetos relevantes como Carrefour, Samsung e Perfect Draft (Ambev). Desenvolvimento de componentes customizados, integração com serviços back-end em Node.js e configuração de MasterData. Forte atuação em performance, experiência do usuário e arquitetura front-end escalável dentro de squads ágeis.',
      },
      {
        role: 'Desenvolvedor Web Júnior',
        company: 'M3 (Grupo Cadastra)',
        period: '2021 - 2022',
        description: 'Atuação na implementação e evolução de lojas VTEX IO e CMS, incluindo configuração de MasterData e implantação de checkout. Participação em deploys, versionamento com Git Flow e trabalho em metodologia ágil. Evolução técnica sólida em front-end moderno e estruturação de e-commerces.',
      },
      {
        role: 'Desenvolvedor Web',
        company: 'DTO',
        period: '2020 - 2021',
        description: 'Desenvolvimento de plataformas institucionais e sistemas administrativos utilizando Laravel (PHP), com modelagem e otimização de consultas em banco de dados. Implementação de arquiteturas back-end estruturadas, manutenção de servidores via FTP e versionamento com Git. Forte base em estruturação de aplicações web e organização de código.',
      },
      {
        role: 'Desenvolvedor Web Estagiário',
        company: 'Friweb',
        period: '2019 - 2020',
        description: 'Participação no desenvolvimento e manutenção de sistemas em PHP, com modelagem de banco de dados MySQL e suporte a projetos legados. Evolução de plataformas web utilizando HTML, CSS e JavaScript, além de configuração de hospedagem e suporte técnico.',
      }
    ]
  },
  projects: {
    title: 'PROJETOS DESAFIADORES',
    viewProject: 'VER DETALHES',
    backToList: 'Voltar aos projetos',
    items: [
      {
        name: 'Decathlon',
        slug: 'decathlon',
        description: 'Hub de Integração e Sincronização de Dados em Tempo Real',
        tech: [ 'Back-end', 'Lambda' , 'Node.js', 'Kafka','DynamoDB', 'AWS', 'CronJobs', 'Microserviços']
      },
      {
        name: 'Samsung',
        slug: 'samsung',
        description: 'Plataforma de Resgate de Cupons e Sincronização de Usuários',
        tech: ['Full Stack', 'React', 'Node.js', 'BFF', 'VTEX MasterData', 'Segurança', 'API']
      },
      {
        name: 'Carrefour',
        slug: 'carrefour',
        description: 'Plataforma de Autonomia de Pedidos e Backoffice',
        tech: ['Full Stack', 'React', 'Node.js', 'BFF', 'GCP', 'Microservices', 'Microfrontends']
      },
      {
        name: 'IX',
        slug: 'ix',
        description: 'Plataforma SaaS Interna para Gerenciamento de Trabalhadores Terceirizados em Clínicas',
        tech: ['Full Stack', 'Next.js', 'NestJS', 'PostgreSQL', 'Stripe', 'Resend', 'SaaS', 'Automação de E-mails', 'Dashboard Administrativo', 'RBAC']
      }
    ]
  },
  skills: {
    title: 'HABILIDADES & TECNOLOGIAS',
    areas: [
      {
        stack: 'FRONT-END',
        groups: [
          {
            group: 'Arquitetura e Estratégia',
            items: [
              'Arquitetura Front-end',
              'Design Systems',
              'SSR, SSG, ISR',
              'Gerenciamento de Estado',
            ],
          },
          {
            group: 'Performance e Qualidade',
            items: [
              'Otimização de Performance',
              'Core Web Vitals',
              'SEO Técnico',
              'Acessibilidade (WCAG)',
              'Design Responsivo',
              'Testes (Unitários e de Integração)',
            ],
          },
          {
            group: 'Stack Favorita',
            items: ['Next.js', 'React','TypeScript', 'Tailwind CSS'],
          },
        ],
      },
      {
        stack: 'BACK-END',
        groups: [
          {
            group: 'Arquitetura e Estratégia',
            items: [
              'Arquitetura Orientada a Eventos',
              'Clean Architecture & SOLID',
              'Desenvolvimento de APIs RESTful',
            ],
          },
          {
            group: 'Performance e Qualidade',
            items: [
              'Escalabilidade e Performance',
              'Testes (Unitários e de Integração)',
            ],
          },
          {
            group: 'Dados e Integrações',
            items: [
              'Modelagem e Estruturação de Banco de Dados',
              'Otimização de Consultas',
              'Validação e Modelagem de Dados',
              'Integração com APIs (REST & GraphQL)',
              'Mensageria e Processamento Assíncrono',
              'Integração com Serviços Externos',
              'Integração com Gateways de Pagamento',
            ],
          },
          {
            group: 'Segurança e Escalabilidade',
            items: [
              'Autenticação e Autorização (JWT, RBAC)',
              'Tratamento de Erros e Padronização de Respostas',
              'Versionamento e Boas Práticas',
            ],
          },
          {
            group: 'Stack Favorita',
            items: [
              'Node.js',
              'NestJS',
              'Express',
              'Fastify',
              'Bun',
              'Docker',
              'AWS',
              'Jest',
            ],
          },
        ],
      },
      {
        stack: 'BANCO DE DADOS',
        groups: [
          {
            group: 'Stack Favorita',
            items: [
              'PostgreSQL',
              'MongoDB',
              'DynamoDB',
              'Redis',
              'Firebase',
              'MariaDB',
            ],
          },
        ],
      },
      {
        stack: 'FERRAMENTAS E METODOLOGIAS',
        groups: [
          {
            group: 'Stack Favorita',
            items: [
              'Scrum',
              'Kanban',
              'Git Flow',
              'GitHub Actions',
              'Figma',
              'Jira',
            ],
          },
        ],
      },
    ],
  },
  contact: {
    title: 'CONTATO',
    subtitle: 'ENTRE EM CONTATO',
    email: 'hello@arthur.dev',
    github: 'GITHUB',
    linkedin: 'LINKEDIN',
    cta: 'ENTRAR EM CONTATO',
    formName: 'NOME',
    formNamePlaceholder: 'Seu nome',
    formEmail: 'EMAIL',
    formEmailPlaceholder: 'seu.email@exemplo.com',
    formMessage: 'MENSAGEM',
    formMessagePlaceholder: 'Como posso ajudar?',
    formSubmit: 'ENVIAR MENSAGEM',
    formSubmitting: 'ENVIANDO...',
    formSuccessTitle: 'SUCESSO',
    formSuccess: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
    formErrorTitle: 'ERRO',
    formError: 'Houve um erro ao enviar sua mensagem. Tente novamente mais tarde.',
    errors: {
      NAME_MIN: 'O nome deve ter pelo menos 2 caracteres',
      NAME_MAX: 'O nome deve ter menos de 100 caracteres',
      EMAIL_INVALID: 'Por favor, insira um email válido',
      MESSAGE_MIN: 'A mensagem deve ter pelo menos 10 caracteres',
      MESSAGE_MAX: 'A mensagem deve ter menos de 1000 caracteres'
    }
  },
  footer: {
    copy: 'ARTHUR CARDOSO. TODOS OS DIREITOS RESERVADOS.',
  },
  notFound: {
    description: 'A página que você procura não existe ou foi movida. Volte ao início para continuar navegando.',
    backHome: 'Voltar ao início',
  },
};

export default pt;
