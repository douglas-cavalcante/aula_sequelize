
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'api_node',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};