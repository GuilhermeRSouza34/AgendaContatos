function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    var tabelaContatos = document.getElementById("tabelaContatos");
    var linha = tabelaContatos.insertRow();

    var colunaNome = linha.insertCell(0);
    colunaNome.innerHTML = nome;

    var colunaTelefone = linha.insertCell(1);
    colunaTelefone.innerHTML = "(" + telefone.substring(0, 2) + ")" + telefone.substring(2);

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}