function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const de = document.getElementById('de').value;
    const para = document.getElementById('para').value;

    let resultado;

    if (de === para) {
        resultado = valor;
    } else if (de === 'metros') {
        if (para === 'polegadas') {
            resultado = valor * 39.37;
        } else if (para === 'centimetros') {
            resultado = valor * 100;
        }
    } else if (de === 'polegadas') {
        if (para === 'metros') {
            resultado = valor / 39.37;
        } else if (para === 'centimetros') {
            resultado = valor * 2.54;
        }
    } else if (de === 'centimetros') {
        if (para === 'metros') {
            resultado = valor / 100;
        } else if (para === 'polegadas') {
            resultado = valor / 2.54;
        }
    }

    if (resultado) {
        document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(2)} ${para}`;
    } else {
        document.getElementById('resultado').textContent = 'Selecione unidades diferentes para conversão.';
    }
}