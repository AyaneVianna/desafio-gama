const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true},
    cargo: { type: String, unique: false, required: true},
    data:  { type: Date, unique: false, required: true},
    genero:  { type: String, unique: false, required: false},
    estadoCivil:  { type: String, unique: false, required: false},
    identidade:  { type:String, unique: true, required: true},
    cpf_digitado:  { type:String, unique: true, required: true},
    habilitacao:  { type: String, unique: false, required: false},
    veiculo:  { type: String, unique: false, required: false},
    cep: { type:String, unique: false, required: true}, 
    rua:  { type: String, unique: false, required: true},
    numero: { type:String, unique: false, required: true},
    complemento: { type: String, unique: false, required: false},
    bairro: { type: String, unique: false, required: true},
    cidade: { type: String, unique: false, required: true},
    uf:  { type: String, unique: false, required: true},
    email:  { type: String, unique: true, required: true},
    telefone: { type: String, unique: false, required: true},
    telefone2: { type: String, unique: false, required: false},
    celular: { type: String, unique: false, required: true},
    celular2: { type: String, unique: false, required: false}

}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);