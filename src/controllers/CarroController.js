const CarroService = require('../services/CarroServices');

module.exports = {
    buscarUm: async (req, res) =>{
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;//para pegar o parametro na requisição
        let carros = await CarroService.buscarUm(codigo);//retorna "um carro"

     if(carro){
        json.result = carro;
     }

        res.json(json);
    }

}