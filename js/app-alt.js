function comprar() {
    let tipo = document.getElementById("tipo-ingresso");
    let qtd = parseInt(document.getElementById("qtd-ingresso").value);

    if (tipo.value == "pista") {
        comprarPista(qtd);
    } else if (tipo.value == "superior") {
        comprarSuperior(qtd);
    } else if (tipo.value == "inferior") {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista.textContent) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        qtdPista.textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-Superior').textContent);
    if (qtd > qtdSuperior.textContent) {
        alert('Quantidade indisponível para tipo Superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        qtdSuperior.textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-Inferior').textContent);
    if (qtd > qtdInferior.textContent) {
        alert('Quantidade indisponível para tipo Inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        qtdInferior.textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}