const pt = {
  header: {
    about: 'SOBRE',
    experience: 'EXPERIÊNCIA',
    projects: 'PROJETOS',
    skills: 'TECNOLOGIAS',
    contact: 'CONTATO',
    lang: 'EN',
  },
  hero: {
    greeting: 'SOU DEV',
    role: 'FULL-STACK',
    based: 'OLÁ, ME CHAMO ARTHUR',
    summary: 'Construo interfaces de alto impacto e sistemas robustos. Foco em arquitetura escalável e experiências singulares.',
  },
  about: {
    title: 'SOBRE',
    description1: 'Sou um desenvolvedor full-stack apaixonado por transformar problemas complexos em soluções elegantes. Minha abordagem combina uma base técnica sólida com um olhar aguçado para o design.',
    description2: 'Trabalho em toda a stack, desde a otimização de consultas de banco de dados até a criação de animações fluidas no frontend, sempre garantindo performance e acessibilidade.',
  },
  experience: {
    title: 'EXPERIÊNCIA',
    items: [
      {
        role: 'Desenvolvedor Full-Stack',
        company: 'Freelance',
        period: '2023 - Presente',
        description: 'Desenvolvimento de aplicações web completas, do planejamento à entrega. Arquitetura de bancos de dados, criação de APIs RESTful e interfaces interativas.',
      },
    ]
  },
  projects: {
    title: 'PROJETOS',
    viewProject: 'VER PROJETO',
    sourceCode: 'CÓDIGO FONTE',
    items: [
      {
        name: 'Site.Set',
        description: 'Plataforma para afiliados venderem produtos em um único lugar.',
        tech: ['Next.js', 'React', 'Tailwind CSS'],
        link: '#',
      }
    ]
  },
  skills: {
    title: 'TECNOLOGIAS',
    frontend: 'FRONTEND',
    backend: 'BACKEND',
    tools: 'FERRAMENTAS',
  },
  contact: {
    title: 'CONTATO',
    subtitle: 'ENTRE EM CONTATO',
    email: 'hello@arthur.dev',
    github: 'GITHUB',
    linkedin: 'LINKEDIN',
    cta: 'INICIAR PROJETO',
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
    copy: '© 2026 ARTHUR TAVARES. TODOS OS DIREITOS RESERVADOS.',
  }
};

export default pt;
