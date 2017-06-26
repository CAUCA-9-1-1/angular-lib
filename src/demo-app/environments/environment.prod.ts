interface Environment {
  production: boolean;
  locale: string;
  igo: object;
  cause: object;
};

export const environment: Environment = {
  production: true,
  locale: 'fr',
  igo: {
    language: {
      prefix: './assets/locale/'
    }
  },
  cause: {
    apiUrl: './',
    locale: 'fr',
    languages: ['fr', 'en']
  },
};
