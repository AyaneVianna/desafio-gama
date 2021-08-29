console.log('Javascript carregado');
// função de validar pelo número de caracteres e etc
function validaCPF(cpf) {
    console.log(cpf.length);
    if(cpf.length != 11){
        return false;
    } else {
        let numeros = cpf.substring(0, 9);
        let digitos = cpf.substring(9);

        console.log("numeros o cpf " + numeros);
        console.log("digito do cpf " + digitos);

        // validação do primeiro digito
        let soma = 0;
        for ( let i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;

        }
   

        let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        // validação do segundo digito
        soma = 0;
        numeros = cpf.substring(0, 10);
        for ( let k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;

        }

       
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digitos.charAt(1)) {
            return false;
        }
        return true;
    }
   
}

// função para auxiliar na validação e trazer coisas do html para isso
function validacao() {
    console.log('Iniciando validação CPF');
    // essa parte é pra limpar respostas conforme tentativas
    document.getElementById('success').style.display = 'none'
    document.getElementById('error').style.display = 'none'
    // .

    // fazer o cpf aparecer no terminal, tem que ter a id lá no input na html com o mesmo nome
    let cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf); 

    let resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block' 
     } else {
         document.getElementById('error').style.display = 'block'
     }
}

// ligação front e back
const Formulario = () => {
    
   let form = {
        nome: document.getElementById('nome').value,
        cargo: document.getElementById('cargo').value,
        data: document.getElementById('data').value,
        genero: document.getElementById('genero').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        identidade: document.getElementById('identidade').value,
        cpf_digitado: document.getElementById('cpf_digitado').value,
        habilitacao: document.getElementById('habilitacao'),
        veiculo: document.getElementById('veiculo').value,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        complemento: document.getElementById('complemento').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        uf: document.getElementById('uf').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        telefone2: document.getElementById('telefone2').value,
        celular: document.getElementById('celular').value,
        celular2: document.getElementById('celular2').value,
    };
    console.log(form);
    return form
}

const criarCandidato = async (candidato) => {

    const usuario = await fetch('http://localhost:5000/register', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Formulario())
    });
    if (usuario.status === 200) {
        alert('Sucesso no cadastro');
    }

    if (usuario.status === 500) {
        alert('Ops! Esse CPF ou Email já está cadastrado');
    }
}

function check_form() {
    let nome = document.getElementById('nome').value;
    let cargo = document.getElementById('cargo').value;
    let data = document.getElementById('data').value;
    let identidade = document.getElementById('identidade').value;
    let cpf_digitado = document.getElementById('cpf_digitado').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let uf = document.getElementById('uf').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let celular = document.getElementById('celular').value;

    if (nome == "" || cargo == "" || data =="" || identidade == "" ||
    cpf_digitado == "" || cep == "" || rua =="" || numero == "" ||
    bairro == "" || cidade == "" || uf == "" || email == "" || telefone == ""
    || celular == "" || validacao() == false) {
        alert('Algo deu errado, verifique se os campos estão preenchidos corretamente.');
    } else {
        criarCandidato();
        alert('efetuando o cadastro...');
    }
}





