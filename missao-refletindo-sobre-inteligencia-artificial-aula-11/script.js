const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um explorador espacial e acaba de descobrir um novo planeta habitável. Qual é a sua primeira ação?",
        alternativas: [
            {
                texto: "Estabelecer uma base de pesquisa para estudar a flora e fauna locais.",
                afirmacao: "Você priorizou a ciência e a compreensão do novo ambiente. "
            },
            {
                texto: "Procurar por recursos valiosos para enviar de volta à Terra.",
                afirmacao: "Sua missão é focada na exploração de recursos para o benefício da humanidade. "
            }
        ]
    },
    {
        enunciado: "Ao explorar o planeta, você encontra uma civilização alienígena avançada. Como você se aproxima deles?",
        alternativas: [
            {
                texto: "Tentar estabelecer comunicação pacífica usando sinais universais e tecnologia de tradução.",
                afirmacao: "Você busca a diplomacia e o intercâmbio cultural. "
            },
            {
                texto: "Observar de longe para entender sua cultura e tecnologia antes de qualquer contato.",
                afirmacao: "Sua abordagem é cautelosa, priorizando a segurança e o conhecimento prévio. "
            }
        ]
    },
    {
        enunciado: "A civilização alienígena oferece compartilhar sua tecnologia de dobra espacial. O que você faz?",
        alternativas: [
            {
                texto: "Aceitar a oferta, pois isso beneficiaria imensamente a exploração humana do universo.",
                afirmacao: "Você acredita no progresso através da colaboração intergaláctica. "
            },
            {
                texto: "Recusar, temendo que essa tecnologia possa ser usada para fins destrutivos ou desequilibrar o poder na Terra.",
                afirmacao: "Sua preocupação com as consequências éticas e de segurança é primordial. "
            }
        ]
    },
    {
        enunciado: "Durante sua estadia, você descobre que o planeta está em perigo iminente devido a um fenômeno cósmico. Qual é a sua decisão?",
        alternativas: [
            {
                texto: "Alertar a civilização alienígena e oferecer ajuda com a tecnologia terrestre disponível.",
                afirmacao: "Você demonstra solidariedade e busca proteger a vida, independentemente da espécie. "
            },
            {
                texto: "Priorizar a segurança da sua tripulação e da sua nave, preparando-se para evacuar.",
                afirmacao: "Sua principal responsabilidade é com a sua equipe e a missão original. "
            }
        ]
    },
    {
        enunciado: "Após o incidente, você tem a chance de retornar à Terra com informações cruciais sobre o universo. Como você compartilha suas descobertas?",
        alternativas: [
            {
                texto: "Apresentar os dados de forma clara e objetiva para a comunidade científica e governos, promovendo a cooperação global.",
                afirmacao: "Você busca o avanço do conhecimento e a união da humanidade. "
            },
            {
                texto: "Manter algumas informações em segredo para evitar pânico ou uso indevido por potências mundiais.",
                afirmacao: "Sua cautela visa proteger a humanidade de possíveis ameaças ou conflitos. "
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
    caixaPerguntas.textContent = "Sua jornada espacial termina...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
