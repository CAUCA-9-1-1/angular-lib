interface Environment {
  production: boolean;
  cause: object;
};

export const environment: Environment = {
  production: true,
  cause: {
    apiUrl: './',
    languages: ['fr', 'en']
  },
};
