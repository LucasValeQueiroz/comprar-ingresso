function comprar() {
    //Pegando informações: Tipo de ingresso e quantidade
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    //Verificando colocou quantidade de ingressos corretamente
    if (qtd > 0){
        //Verificando o tipo de ingresso foi escolhido
        if (tipo.value == 'pista') {
            comprarPista(qtd);
        }else if (tipo.value == 'superior') {
            comprarSuperior(qtd);
        }else if (tipo.value == 'inferior') {
            comprarInferior(qtd);
        }
    }  else {
        alert('Quantidade invalida');
    }
}


function comprarPista(qtd) {
    //Pegando informações: Quantidade de ingressos disponiveis
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    //Se a quantidade for superior a quantidade de ingressos disponiveis se não realizar a compra 
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    //Pegando informações: Quantidade de ingressos disponiveis
    let qtdPista = parseInt(document.getElementById('qtd-superior').textContent);
    //Se a quantidade for superior a quantidade de ingressos disponiveis se não realizar a compra
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-superior').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    //Pegando informações: Quantidade de ingressos disponiveis
    let qtdPista = parseInt(document.getElementById('qtd-inferior').textContent);
    //Se a quantidade for superior a quantidade de ingressos disponiveis se não realizar a compra
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-inferior').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}