module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', './data/strapi.db'), // Veritabanı dosyasının yolu
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
