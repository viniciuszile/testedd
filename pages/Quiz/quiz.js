const questions = [
  {
    question: "Qual o maior inimigo do Minideca ?",
    image: "../../Assets/miniargentino.jpg",
    options: ["Carteira De trabalho", "Sara Cristina", "Araujo", "Vida Social"],
    answer: "Carteira De trabalho",
  },
  {
    question: "Quem é o verdadeiro parceiro do minideca ?",
    image: "../../Assets/miniparceiro.jpg",
    options: ["Cristian", "Rodrigão", "Vinizile", "Araujo"],
    answer: "Rodrigão",
  },
  {
    question: "Quem é melhor amiga do minideca ?",
    image: "../../Assets/amiga.png",
    options: ["Jheny", "Sara Sarinha", "Rayane", "larissa"],
    answer: "Sara Sarinha",
  },
  {
    question: "Quem é o duo do amor do minideca?",
    image: "../../Assets/duo.jpg",
    options: ["Vinizile", "Gabriel gol", "ViTiN", "Araujo"],
    answer: "Vinizile",
  },
  {
    question: "Qual a maior conquista do minideca?",
    image: "../../Assets/mascara.png",
    options: [
      "Diamante",
      "amizade do vinizile",
      "ensino superior",
      "se livrar da sara",
    ],
    answer: "se livrar da sara",
  },
  {
    question: "Qual o dia mais feliz na vida do minideca?",
    image: "../../Assets/sara.JPG",
    options: [
      "Criação ofical da FEC$",
      "fim da FEC$ / FEC$ awards",
      "Dia que pegou diamante",
      "strogonoff na casa da sara",
    ],
    answer: "strogonoff na casa da sara",
  },
  {
    question: "Qual é a função do minideca",
    image: "../../Assets/minimic.JPG",
    options: [
      "Smokar",
      "Ser Toxico",
      "Vadiar / Vagabundar",
      "Todas as alternativas",
    ],
    answer: "Todas as alternativas",
  },
  {
    question: "Qual deste é um ponto forte do minideca?",
    image: "../../Assets/carecadeca.JPG",
    options: [
      "Sono regulado e ajustado",
      "Boa contribuição ao FGTS",
      "Otimo Farmaceutico",
      "nenhum das alternativas",
    ],
    answer: "nenhum das alternativas",
  },
  {
    question: "Qual é o jogo favorito do minideca",
    image: "../../Assets/miniminideca.JPG",
    options: [
      "hollow knight",
      "The witcher",
      "Fortnite ft WS",
      "Mortal kombat ft Sara",
    ],
    answer: "Mortal kombat ft Sara",
  },
  {
    question: "Quem o Minideca Prefere ter como Cunhada",
    image: "../../Assets/cunhada.JPG",
    options: ["Janaina", "Jhenny", "Larissa", "Rayssa"],
    answer: "Jhenny",
  },
];

// Função para embaralhar as opções de resposta
function shuffleOptions(options) {
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]]; // Troca as posições aleatoriamente
  }
}

let questionsCopy = questions.slice(); // Copia as perguntas para não modificar o array original
let currentQuestion = 0;
let pontuacao = 0;

function loadQuestion() {
  if (currentQuestion >= questionsCopy.length) {
    // Se todas as perguntas já foram feitas, reinicie o processo
    currentQuestion = 0;
    shuffleOptions(questionsCopy);
  }

  const currentQ = questionsCopy[currentQuestion];

  // Carregar a imagem
  const questionImg = document.createElement("img");
  questionImg.src = currentQ.image;
  questionImg.alt = "Imagem da pergunta";
  document.getElementById("image-container").innerHTML = "";
  document.getElementById("image-container").appendChild(questionImg);

  // Carregar a pergunta
  document.getElementById("question-container").innerHTML = `<p>${currentQ.question}</p>`;

  // Embaralhar as opções de resposta
  const shuffledOptions = currentQ.options.slice(); // Copia as opções para não modificar o array original
  shuffleOptions(shuffledOptions);

  // Carregar as opções de resposta
  document.getElementById("options-container").innerHTML = "";
  shuffledOptions.forEach((option, index) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = option;
    const label = document.createElement("label");
    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    document.getElementById("options-container").appendChild(label);
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Por favor, selecione uma opção!");
    return;
  }

  if (selectedOption.value === questionsCopy[currentQuestion].answer) {
    alert("Resposta correta!");
    pontuacao += 10;
  } else {
    pontuacao -= 10;
    alert("Resposta incorreta!");
  }

  currentQuestion++;
  if (currentQuestion < questionsCopy.length) {
    loadQuestion();
  } else {
    alert("Quiz finalizado!");
    if (pontuacao < 100) {
      alert("Impressionante a sua incompetência!");
      resetQuiz(); // Chama a função para reiniciar o quiz
    } else if (pontuacao === 100) {
      alert("De Nada 🥱");
      window.location.href = "../../pages/Premio/premio.html";
    }
  }

  // Atualiza a pontuação na tela
  updatePontuacaoDisplay();
}

function updatePontuacaoDisplay() {
  document.getElementById('pontuacao').textContent = pontuacao;
}

function resetQuiz() {
  pontuacao = 0;
  currentQuestion = 0;
  shuffleOptions(questionsCopy);
  loadQuestion();

  // Atualiza a pontuação na tela
  updatePontuacaoDisplay();
}

const nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", checkAnswer);

// Iniciar o quiz carregando a primeira pergunta
shuffleOptions(questionsCopy);
loadQuestion();
updatePontuacaoDisplay();
