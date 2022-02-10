/*
  index() 
  store() - cadastrar 
  show() 
  update()
  destroy()
*/

import User from '../models/User';
import { Op } from 'sequelize';

class UserController {

  async index(req, res) {

    const word = req.query.word ? req.query.word : '';

    const users = await User.findAll({
      include: [
        {
          association: 'posts',
          required: false,
          where: {
            title: {
              [Op.iLike]: `%${word}%`
            },
            status: true
          }
        }
      ],
      limit: 10,
      order: [
        ["name", "ASC"],
      ],
    },
    )

    return res.json(users)
  }

  async store(req, res) {
    const data = req.body;

    const user = await User.create(data);

    return res.json(user);
  }

  async show(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id)

    return res.json(user)
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      name,
      nickname,
      email
    } = req.body;

    const user = await User.findByPk(id);

    user.name = name
    user.nickname = nickname
    user.email = email

    const userUpdated = await user.save()

    return res.json(userUpdated)
  }

  async destroy(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);

    await user.destroy()

    return res.json({})
  }

}

export default new UserController()
