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
    },

    inserir: async (req, res) =>{
        let json = {error:'', result:{}};

        let modelo =  req.body.modelo;
        let placa =  req.body.placa;

     if(modelo && placa){
        let CarroCodigo = await CarroService.inserir()
        json.result = {
            codigo: CarroCodigo,
            modelo,
            placa
        }
        
        }
        else{
            json.error = 'Campos não enviados';

        }
        req.json(json);
     }

        
    }


