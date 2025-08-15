document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".inputs");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var nomeUsuario = document.querySelector("#campoNomeUser").value;
        var nomeCompleto = document.querySelector("#campoNome").value;
        var senha = document.querySelector("#capmoSenha").value;
        var email = document.querySelector("#campoEmail").value;

        if (nomeUsuario === "" || nomeCompleto === "" || senha === "" || email === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        alert("Formulário enviado com sucesso!");
    });
});
