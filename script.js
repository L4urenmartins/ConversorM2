function validarForm() {
    var valorInput = document.getElementById('valor');
    var categoriaSelect = document.getElementById('categoria');
    var unidadeOrigemSelect = document.getElementById('unidadeOrigem');
    var unidadeDestinoSelect = document.getElementById('unidadeDestino');
    var resultado = document.getElementById('resultado');

    // Verificar se o campo de valor está preenchido
    if (valorInput.value.trim() === '') {
        resultado.textContent = 'Insira um valor para converter.';
        resultado.style.display = 'block';
        return false;
    }

    // Verificar se uma categoria foi selecionada
    if (categoriaSelect.value === '') {
        resultado.textContent = 'Selecione uma categoria.';
        resultado.style.display = 'block';
        return false;
    }

    // Verificar se uma unidade de resultado foi validada
    if (unidadeOrigemSelect.value === '') {
        resultado.textContent = 'Selecione uma unidade de origem.';
        resultado.style.display = 'block';
        return false;
    }

    // Verificar se uma unidade de resultado foi validada
    if (unidadeDestinoSelect.value === '') {
        resultado.textContent = 'Selecione uma unidade de destino.';
        resultado.style.display = 'block';
        return false;
    }

    // A validação passou, significa que pode limpar a mensagem de erro e continuar com a conversão
    resultado.textContent = '';
    resultado.style.display = 'none';
    converter();
}
