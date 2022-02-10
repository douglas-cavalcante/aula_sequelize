/*
  index() 
  store() - cadastrar 
  show() 
  update()
  destroy()
*/

import sequelize  from 'sequelize'

import Category from '../models/Category';

import createCategoryValidation from '../../validations/category/createCategorySchema';

class CategoryController {

  async index(_req, res) {
    try {
      const categories = await Category.findAll({
        attributes: ['id', 'name']
      })
      return res.json(categories)
    } catch (error) {
      return res.status(401).json(
        { message: 'Houve um erro ao tentar listar as categorias' }
      )
    }
  }

  async store(req, res) {
    try {
      const data = req.body

      if (!(await createCategoryValidation.isValid(data))) {
        return res.status(401).json({ message: 'Campos inválidos' })
      }

      const category = await Category.create(data)

      return res.json(category)

    } catch (error) {
      return res.status(400).json({
        message: 'Houve um erro ao tentar realizar o cadastro da categoria'
      })
    }

  }

  async show(req, res) {
    /*
    const {id} = req.params;
    const category = await Category.findByPk(id)
    return res.json(category)
    */
    const {id} = req.params;

    const [results] = await sequelize.query(`SELECT * FROM categories where id = ${id}`);

    return res.json(results);
  }

}

export default new CategoryController()
