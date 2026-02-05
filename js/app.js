function comprar() {
    let qtdIngresso = parseInt(document.getElementById("qtd-ingresso").value);
    let tipoIngresso = document.getElementById("tipo-ingresso").value;

    // 1. Validar se a quantidade é um número positivo
    if (isNaN(qtdIngresso) || qtdIngresso <= 0) {
        showSnackbar("Por favor, insira uma quantidade válida de ingressos.", "error");
        return;
    }

    let elementoQtd = document.getElementById(`qtd-${tipoIngresso}`);
    let qtdDisponivel = parseInt(elementoQtd.textContent);

    // 2. Validar se há ingressos suficientes
    if (qtdIngresso > qtdDisponivel) {
        showSnackbar(`Não há ingressos suficientes para o tipo ${tipoIngresso}.`, "error");
    } else {
        // 3. Processar a compra
        elementoQtd.textContent = qtdDisponivel - qtdIngresso;
        showSnackbar("Compra realizada com sucesso!", "success");
    }
}

function showSnackbar(message, type = "success") {
    let snackbar = document.getElementById("snackbar");
    snackbar.textContent = message;
    snackbar.className = `md-snackbar show ${type}`;

    // Remove a classe após 3 segundos
    setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "").replace(type, "").trim();
    }, 3000);
}