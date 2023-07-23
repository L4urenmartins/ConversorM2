# ConversorM2
Este código é um script JavaScript que implementa um conversor de medidas. Ele permite converter valores entre diferentes unidades de temperatura, peso e comprimento, com base nas seleções feitas em um formulário HTML.

O script começa obtendo referências para os elementos do formulário HTML, como os campos de seleção e o botão de conversão, usando document.getElementById.

Em seguida, há uma função chamada mudarCategorias, que é um evento de escuta para o campo de seleção "Categorias Medidas". Quando a categoria é selecionada, a função atualiza as opções disponíveis nos campos de seleção de unidades de entrada e saída, dependendo da categoria escolhida. Por exemplo, se a categoria for "temperatura", as unidades disponíveis serão "Celsius", "Fahrenheit" e "Kelvin".

O evento de clique do botão "Conversão" também é definido para chamar uma função anônima que realiza a conversão com base nas unidades de entrada e saída selecionadas, utilizando outras funções de conversão específicas para cada tipo de medida (temperatura, peso, comprimento).

As funções de conversão são definidas no final do script e são usadas para fazer as conversões de fato. Por exemplo, a função celsiusToFahrenheit converte Celsius para Fahrenheit e assim por diante.

No geral, o código é um conversor de medidas funcional, que pode ser expandido para adicionar mais categorias de medidas ou unidades de conversão, se necessário.

Na parte de estilização, foi desenvolvida uma paleta de cores para que pudesse transmitir uma leveza para o código e passar uma mensagem amigavel para o usuário.

Este projeto foi um desafio enorme até chegar no que que queria. Foi um baita aprendizado e me incentivou a aprender mais e mais linguagens de progamação.
