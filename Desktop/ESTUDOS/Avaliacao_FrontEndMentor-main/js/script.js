let notaSelecionada = null;

function nota(valor, elemento) {
    notaSelecionada = valor; // Salva a nota escolhida pelo user
}

function confirmar() {
    if (notaSelecionada !== null) {
        localStorage.setItem("nota", notaSelecionada); // Salva a nota no localStorage
        window.location.href = "thanks.html"; // Pagina de agradecimento
    } else {
        alert("Por favor, selecione uma nota antes de confirmar!");
    }
}

// demonstrar a nota na página de agradecimento
document.addEventListener("DOMContentLoaded", function () {
    let notaSalva = localStorage.getItem("nota");

    if (notaSalva && document.getElementById("notaSelecionada")) {
        document.getElementById("notaSelecionada").innerText = `You selected ${notaSalva} out of 5`;
    }
});
