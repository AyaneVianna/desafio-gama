const Candidate = require('./Candidate');

module.exports = {
    async register(req, res){
        const{nome, cargo, data, genero, estadoCivil, identidade, cpf_digitado, habilitacao, veiculo, cep, rua, 
        numero, complemento, bairro, cidade, uf, email, telefone, telefone2, celular, celular2} = req.body;
        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.data = data;
        newCandidate.genero = genero;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.identidade = identidade;
        newCandidate.cpf_digitado = cpf_digitado;
        newCandidate.habilitacao = habilitacao;
        newCandidate.veiculo = veiculo;
        newCandidate.cep = cep;
        newCandidate.rua = rua;
        newCandidate.numero = numero;
        newCandidate.complemento = complemento;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.uf = uf;
        newCandidate.email = email;
        newCandidate.telefone = telefone;
        newCandidate.telefone2 = telefone2;
        newCandidate.celular = celular;
        newCandidate.celular2 = celular2;

        newCandidate.save((err, savedCandidate) => {
            if (err){
                console.log(err);
                return res.status(500).send();
            }
            return res.status(200).send(savedCandidate);
        });
    },
};