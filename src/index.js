import express from 'express';
import './database';

class App {

  constructor() {
    this.server = express()
    this.middlewares()
  }

  middlewares() {
    console.log('Start middlewares')
    this.server.use(express.json());
  }

}

export default new App().server;