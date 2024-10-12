function Enviar() {
    var nome = document.querySelector("#nome").value.trim();
    var email = document.querySelector("#email").value.trim();
    var telefone = document.querySelector("#phone").value.trim();
    var assunto = document.querySelector("#assunto").value;
    var mensagem = document.querySelector("#mensagem").value.trim();
    // Exibindo os dados em um alert
    if (nome.length < 2)
    {
        alert("O nome deve conter pelo menos duas letras.")
    }
    else if (email === ""){
        alert("O email não pode ficar vazio.");

    }
    else if (phone === ""){
        alert("O telefone não pode ficar vazio.");
        
    }
    else if (assunto === ""){
        alert("Você deve selecionar um assunto.");
        
    }
    else if (mensagem === ""){
        alert("A mensagem não pode ficar em branco.");
        
    }
    else{
            window.alert(
        `Informações preenchidas:\n\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}\n\nEnviado com sucesso!`);
    }

 
}