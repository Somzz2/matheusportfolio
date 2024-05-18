document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio real do formulário
    alert('Sua mensagem foi enviada com sucesso!');
    this.reset(); // Reseta o formulário
});
