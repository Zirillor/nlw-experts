const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        //index 0
        "let",
        //index 1
        "var",
        //index 2
        "const"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Array",
        "Object",
        "String"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função usada para imprimir algo no console do navegador?",
      respostas: [
        "print()",
        "log()",
        "console()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
      respostas: [
        "//",
        "/*",
        "#"
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve 'Olá, Mundo!' em uma caixa de alerta em JavaScript?",
      respostas: [
        "msgBox('Olá, Mundo!')",
        "alert('Olá, Mundo!')",
        "prompt('Olá, Mundo!')"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "splice()",
        "remove()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para comparar igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado de 4 + '4' em JavaScript?",
      respostas: [
        "8",
        "'44'",
        "44"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
      respostas: [
        "toNumber()",
        "parseInt()",
        "convertToInt()"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  //Cria um conjunto, que nesse caso seria um conjunto de respostas corretas 
  const corretas = new Set()
  //Numera as perguntas de começando do 1
  const totalDePerguntas = perguntas.length
  //Pega o span da div 'Acertos' para se tornar uma variável
  const mostrarTotal = document.querySelector('#Acertos span')
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    
    //Copia todo o contéudo do template do HTML
    const quizItem = template.content.cloneNode(true)
  
    //Pega a "Pergunta 1" do HTML e transforma em todas as outras perguntas, 
    //repetindo 10 vezes
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      //Copia a parte de resposta do HTML (que seria o 'dl' e o 'dt')
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
  
      //Transforma a resposta do texto 'span' nas respostas das respectivas
      //perguntas que criamos aqui no javascript
      dt.querySelector('span').textContent = resposta 
  
      //Aplica nome e valor ao input, EX: para que quando eu selecionar alguma resposta da pergunta 2
      //não tirar a seleção de qualquer outra resposta que eu ja dei em outra pergunta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  
      //Transforma o valor do input que seria sempre 0, para o valor de seu index
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      //Verifica se eu mudei de resposta(onchange)
      dt.querySelector('input').onchange = (event) => {
        //Ao escolher ou mudar de resposta, me diz se está correta ou não
        const estaCorreta = event.target.value == item.correta
        
        //Deleta todas as respostas correstas para ai sim fazer a somatória
        corretas.delete(item)
        //Se a resposta estiver correta, adiciona +1 nos acertos
        if(estaCorreta) {
          corretas.add(item)
        }
  
        //Mostra ao usuário o total de acertos que teve
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
  
      //Coloca as respostas na tela
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    //Remove a "Resposta A" das respostas
    quizItem.querySelector('dl dt').remove()
    
  
    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }