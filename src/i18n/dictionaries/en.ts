const en = {
  header: {
    about: 'ABOUT',
    experience: 'EXPERIENCE',
    projects: 'PROJECTS',
    skills: 'SKILLS',
    contact: 'CONTACT',
    lang: 'PT',
  },
  hero: {
    greeting: 'I’M A',
    role: 'FULL-STACK DEVELOPER',
    based: 'HELLO, I’M ARTHUR',
    summary: 'I build high-impact interfaces and robust systems. Focused on scalable architecture and unique experiences.',
    cta: 'GET IN TOUCH',
    viewProject: 'VIEW PROJECTS',
  },
  about: {
    title: 'ABOUT',
    description1: 'I’m a full-stack developer who enjoys turning complex challenges into clear, efficient, and well-structured solutions. I combine a strong technical foundation with careful attention to design and user experience, always aiming to deliver products that not only work well but truly make sense for the people who use them.',
    description2: 'I work across the entire stack, from optimizing database queries to crafting fluid frontend animations, always ensuring performance and accessibility.',
  },
  experience: {
    title: 'EXPERIENCE',
    items: [
      {
        role: 'Mid-Level Full-Stack Developer III',
        company: 'Quality Digital',
        period: '2025 - Present',
        description: 'Full-stack development on large-scale projects, focusing on performance, automation, and scalability. Responsible for automating product registration and updates across multiple environments for Decathlon, reducing manual processes and increasing operational efficiency. Development of services and integrations using Node.js, DynamoDB, and event-driven architecture, ensuring reliability and robust asynchronous processing.',
      },
      {
        role: 'Mid-Level Full-Stack Developer III',
        company: 'Adtail',
        period: '2024 - 2025',
        description: 'Development and evolution of e-commerce platforms using VTEX IO, CMS, and FastStore, building custom components, Admin apps, and backend integrations with Node.js. Worked on store architecture, MasterData configuration, checkout implementation, and cloud services. Actively participated in client meetings for scope definition and technical support, working in an agile environment with SCRUM and Git Flow.',
      },
      {
        role: 'Mid-Level Full-Stack Developer II',
        company: 'Cadastra',
        period: '2022 - 2024',
        description: 'Implementation and evolution of large-scale e-commerce platforms using VTEX IO, CMS, and FastStore, contributing to major projects such as Carrefour, Samsung, and Perfect Draft (Ambev). Developed custom components, integrated backend services with Node.js, and configured MasterData. Strong focus on performance, user experience, and scalable front-end architecture within agile squads.',
      },
      {
        role: 'Junior Web Developer',
        company: 'M3',
        period: '2021 - 2022',
        description: 'Worked on the implementation and evolution of VTEX IO and CMS stores, including MasterData configuration and checkout deployment. Participated in deployments, version control using Git Flow, and agile methodologies. Built a solid technical foundation in modern front-end development and e-commerce architecture.',
      },
      {
        role: 'Web Developer',
        company: 'DTO',
        period: '2020 - 2021',
        description: 'Developed institutional platforms and administrative systems using Laravel (PHP), including database modeling and query optimization. Implemented structured backend architectures, managed servers via FTP, and used Git for version control. Built a strong foundation in web application architecture and code organization.',
      },
      {
        role: 'Web Developer Intern',
        company: 'Friweb',
        period: '2020 - 2021',
        description: 'Contributed to the development and maintenance of PHP systems, including MySQL database modeling and support for legacy projects. Enhanced web platforms using HTML, CSS, and JavaScript, as well as configuring hosting environments and providing technical support.',
      }
    ]
  },
  projects: {
    title: 'CHALLENGING PROJECTS',
    viewProject: 'VIEW DETAILS',
    backToList: 'Back to projects',
    items: [
      {
        name: 'Decathlon',
        slug: 'decathlon',
        description: 'Real-Time Data Integration and Synchronization Hub',
        tech: [ 'Backend', 'Lambda' , 'Node.js', 'Kafka','DynamoDB', 'AWS', 'CronJobs', 'Microservices']
      }
    ]
  },
  skills: {
    title: 'SKILLS & TECHNOLOGIES',
    areas: [
      {
        stack: 'FRONTEND',
        groups: [
          {
            group: 'Architecture & Strategy',
            items: [
              'Frontend Architecture',
              'Design Systems',
              'SSR, SSG, ISR',
              'State Management',
            ],
          },
          {
            group: 'Performance & Quality',
            items: [
              'Performance Optimization',
              'Core Web Vitals',
              'Technical SEO',
              'Accessibility (WCAG)',
              'Responsive Design',
              'Unit & Integration Testing',
            ],
          },
          {
            group: 'Favorite Stack',
            items: ['Next.js', 'React','TypeScript', 'Tailwind CSS'],
          },
        ],
      },
      {
        stack: 'BACKEND',
        groups: [
          {
            group: 'Architecture & Strategy',
            items: [
              'Event-Driven Architecture',
              'Clean Architecture & SOLID',
              'RESTful API Development',
            ],
          },
          {
            group: 'Performance & Quality',
            items: [
              'Scalability & Performance',
              'Backend Testing (Unit & Integration)',
            ],
          },
          {
            group: 'Data & Integrations',
            items: [
              'Database Modeling & Structure',
              'Query Optimization',
              'Data Validation & Modeling',
              'API Integration (REST & GraphQL)',
              'Messaging & Asynchronous Processing',
              'External Services Integration',
              'Payment Gateway Integration',
            ],
          },
          {
            group: 'Security & Scalability',
            items: [
              'Authentication & Authorization (JWT, RBAC)',
              'Error Handling & Response Standardization',
              'Version Control & Best Practices',
            ],
          },
          {
            group: 'Favorite Stack',
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
        stack: 'DATABASES',
        groups: [
          {
            group: 'Favorite Stack',
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
        stack: 'TOOLS & METHODS',
        groups: [
          {
            group: 'Favorite Stack',
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
    title: 'CONTACT',
    subtitle: 'GET IN TOUCH',
    email: 'hello@arthur.dev',
    github: 'GITHUB',
    linkedin: 'LINKEDIN',
    cta: 'GET IN TOUCH',
    formName: 'NAME',
    formNamePlaceholder: 'Your name',
    formEmail: 'EMAIL',
    formEmailPlaceholder: 'your.email@example.com',
    formMessage: 'MESSAGE',
    formMessagePlaceholder: 'How can I help you?',
    formSubmit: 'SEND MESSAGE',
    formSubmitting: 'SENDING...',
    formSuccessTitle: 'SUCCESS',
    formSuccess: 'Message sent successfully! I will be in touch soon.',
    formErrorTitle: 'ERROR',
    formError: 'There was an error sending your message. Please try again later.',
    errors: {
      NAME_MIN: 'Name must have at least 2 characters',
      NAME_MAX: 'Name must have less than 100 characters',
      EMAIL_INVALID: 'Please enter a valid email',
      MESSAGE_MIN: 'Message must have at least 10 characters',
      MESSAGE_MAX: 'Message must have less than 1000 characters'
    }
  },
  footer: {
    copy: 'ARTHUR CARDOSO. ALL RIGHTS RESERVED.',
  },
  notFound: {
    description: 'The page you are looking for does not exist or has been moved. Head back home to keep browsing.',
    backHome: 'Back to Home',
  },
};

export default en;
