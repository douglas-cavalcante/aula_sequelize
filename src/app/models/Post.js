import { Model, DataTypes } from 'sequelize';

class Post extends Model {

  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      url_cover: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      is_faker_new: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    
    this.belongsTo(
      models.User, {
      foreignKey: 'user_id', // Qual chave estrangeira dentro de Posts que representa o usuario
      as: 'user' // nome do relacionamento
    });

    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category'
    });

  }

}

export default Post;