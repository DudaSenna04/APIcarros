const db= require('../db')

db.query

module.exports = {
    buscarUm: (codigo) => {
        return new Promisse((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros WHERE codigo = ?',(codigo),(error, results)=>{
                if (error) { rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
                
            })
        });
    },
    inserir: (modelo, placa) => {
        return new Promisse((aceito, rejeitado)=>{
            db.query('INSERT INTO carros (modelo, placa) VALUES (?, ?',
            (mdelo, placa),(error, results)=>{
                if (error) { rejeitado(error); return;}
                    aceito(results.insertCodigo);
            })
        });
    }
}

module.exports = conection;