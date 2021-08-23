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


