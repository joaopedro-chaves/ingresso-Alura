function comprar() {
    // implementar a lógica de compra de ingressos
    let qtdIngresso = parseInt(document.getElementById("qtd-ingresso").value);
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let qtdPista = document.getElementById("qtd-pista");
    let qtdSuperior = document.getElementById("qtd-superior");
    let qtdInferior = document.getElementById("qtd-inferior");

    // atualizar a quantidade de ingressos disponíveis
    if (tipoIngresso === "pista") {
        qtdPista.textContent = parseInt(qtdPista.textContent) - qtdIngresso;
        Alert('Compra realizada com sucesso!');
    } else if (tipoIngresso === "superior") {
        qtdSuperior.textContent = parseInt(qtdSuperior.textContent) - qtdIngresso;
        Alert('Compra realizada com sucesso!');
    } else if (tipoIngresso === "inferior") {
        qtdInferior.textContent = parseInt(qtdInferior.textContent) - qtdIngresso;
        Alert('Compra realizada com sucesso!');
    }

    // validar se há ingressos suficientes
    if (parseInt(qtdPista.textContent) < 0 || parseInt(qtdSuperior.textContent) < 0 || parseInt(qtdInferior.textContent) < 0) {
        alert("Não há ingressos suficientes disponíveis para essa compra.");
        if (tipoIngresso === "pista") {
            qtdPista.textContent = parseInt(qtdPista.textContent) + qtdIngresso;
        } else if (tipoIngresso === "superior") {
            qtdSuperior.textContent = parseInt(qtdSuperior.textContent) + qtdIngresso;
        } else if (tipoIngresso === "inferior") {
            qtdInferior.textContent = parseInt(qtdInferior.textContent) + qtdIngresso;
        }
    }

    // validar quantidade de ingressos
    if (qtdIngresso <= 0 || isNaN(qtdIngresso)) {
        alert("Por favor, insira uma quantidade válida de ingressos para comprar.");
        if (tipoIngresso === "pista") {
            qtdPista.textContent = parseInt(qtdPista.textContent) + qtdIngresso;
        } else if (tipoIngresso === "superior") {
            qtdSuperior.textContent = parseInt(qtdSuperior.textContent) + qtdIngresso;
        } else if (tipoIngresso === "inferior") {
            qtdInferior.textContent = parseInt(qtdInferior.textContent) + qtdIngresso;
        }
    }
}