import SC7010 from '../models/SC7010';

class Sc7010Controller {
  async index(req, res) {

    const pedidos = await SC7010.findAll();

    return res.json(pedidos);
  }
}

export default new Sc7010Controller();
