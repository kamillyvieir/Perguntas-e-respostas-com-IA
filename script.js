const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "E se você acordasse no Minecraft, qual a primeira coisa que você faria?",
        alternativas: [
            {
                texto: "Pegaria madeira.",
                afirmacao: "Você é prevenido, prático e não pula as ordens das coisas."
            },
            {
                texto: "Iria atrás de um bom lugar para fazer uma casa.",
                afirmacao: "Você é caprichoso, alguns diriam ansioso, entretanto pode ser uma virtude, apesar de não ser a melhor decisão."
            }
        ]
    },
    {
        enunciado: "A noite está chegando, a essa altura você já tem uma casa. O que você faz a seguir?",
        alternativas: [
            {
                texto: "Durmo, óbvio.",
                afirmacao: "Sendo racional, você sabe que é arriscado por isso prefere esperar o tempo certo."
            },
            {
                texto: "Provavelmente estou em uma caverna mineirando e nem sei se está de noite.",
                afirmacao: "Claramente, você não liga de se arriscar para buscar aquilo que você precisa."
            }
        ]
    },
    {
        enunciado: "Você precisa de uma armadura. Qual minério você busca?",
        alternativas: [
            {
                texto: "Me contento com a de ferro, mas ainda vou atrás de diamante para ferramentas.",
                afirmacao: "Gosta de se prevenir, e curte uma zona de conforto."
            },
            {
                texto: "Vou atrás de diamante até ter o suficiente para uma armadura e espada.",
                afirmacao: "Você busca o melhor na maioria das vezes, mesmo que nem sempre seja um caminho seguro."
            }
        ]
    },
    {
        enunciado: " Depois de conseguir alguns recursos, qual seu objetivo?",
        alternativas: [
            {
                texto: "Ir para o nether e depois para o end.",
                afirmacao: "Talvez você seja meio anioso, e procura sempre terminar logo o que você começou."
            },
            {
                texto: "Tento evoluir mais ainda para estar preparado para tudo.",
                afirmacao: "Você espera o tempo certo para as coisas acontecerem, e quando acontecem você quer estar preparado."
            }
        ]
    },
    {
        enunciado: "Após você conseguir zerar seu mundo, qual caminho vc segue?",
        alternativas: [
            {
                texto: "Paro de jogar.",
                afirmacao: "As vezes prático, as vezes buscando novos objetivos. Você fica entediado fácil."
            },
            {
                texto: "Continuo jogando e enfrentando mais desafios.",
                afirmacao: "Bom, além disso, você curte se aventurar, e dependendo você é bem autosuficiente."
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Baseado nisso...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
