document.getElementById("copy").addEventListener("click", function() {
    // Selecionar o texto do elemento span
    var textToCopy = document.getElementById("pw").innerText;
    
    // Criar um elemento de área de transferência temporária
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    
    // Selecionar o texto na área de transferência temporária
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); /* Para dispositivos móveis */

    // Copiar o texto selecionado para a área de transferência
    document.execCommand("copy");
    
    // Remover o elemento de área de transferência temporária
    document.body.removeChild(tempTextArea);

    // Mostrar uma mensagem de sucesso
    alert("Texto copiado: " + textToCopy);
});