// --- VARIÁVEIS GLOBAIS ---
let jogoAtivo = true; // FLAG: Controla se o jogo está processando jogadas

// CONTADORAS: Registram vitórias individuais
let contP1 = 0;
let contCPU = 0;

// ACUMULADORA: Soma o total de rodadas jogadas
let acumPartidas = 0;

function jogar(escolhaP1) {
    // Verificação da FLAG
    if (!jogoAtivo) {
        alert("O jogo está encerrado! Clique em 'Reiniciar' para jogar de novo.");
        return;
    }

    // --- Lógica da CPU (Automática) ---
    // Math.random() gera entre 0 e 1. 
    // Multiplicamos por 3 e arredondamos para cima para ter 1, 2 ou 3.
    let escolhaCPU = Math.floor(Math.random() * 3) + 1;
    
    const nomesOpcoes = { 1: "Pedra", 2: "Papel", 3: "Tesoura" };
    const statusTxt = document.getElementById("status");

    // --- Processamento do Vencedor ---
    if (escolhaP1 === escolhaCPU) {
        statusTxt.innerText = `Empate! Ambos escolheram ${nomesOpcoes[escolhaP1]}`;
    } 
    else if (
        (escolhaP1 === 1 && escolhaCPU === 3) || // Pedra vence Tesoura
        (escolhaP1 === 2 && escolhaCPU === 1) || // Papel vence Pedra
        (escolhaP1 === 3 && escolhaCPU === 2)    // Tesoura vence Papel
    ) {
        statusTxt.innerHTML = `<span style="color: #2ecc71">Você venceu!</span> A CPU escolheu ${nomesOpcoes[escolhaCPU]}`;
        contP1++; // Incremento da Contadora P1
        document.getElementById("vitoriasP1").innerText = contP1;
    } 
    else {
        statusTxt.innerHTML = `<span style="color: #e74c3c">CPU venceu!</span> Ela escolheu ${nomesOpcoes[escolhaCPU]}`;
        contCPU++; // Incremento da Contadora CPU
        document.getElementById("vitoriasP2").innerText = contCPU;
    }

    // Atualização da ACUMULADORA
    acumPartidas += 1; 
    document.getElementById("totalPartidas").innerText = acumPartidas;
}

function encerrarJogo() {
    jogoAtivo = false; // Acionando a FLAG de parada
    document.getElementById("status").innerText = "Sessão Finalizada!";
    
    // Pequeno resumo usando as variáveis acumuladora e contadoras
    alert(`Estatísticas da Sessão:\nTotal de Rodadas: ${acumPartidas}\nSuas Vitórias: ${contP1}\nVitórias CPU: ${contCPU}`);
}

// Opcional: Função para resetar e voltar a FLAG para true
function reiniciar() {
    contP1 = 0;
    contCPU = 0;
    acumPartidas = 0;
    jogoAtivo = true;
    document.getElementById("vitoriasP1").innerText = "0";
    document.getElementById("vitoriasP2").innerText = "0";
    document.getElementById("totalPartidas").innerText = "0";
    document.getElementById("status").innerText = "Escolha uma opção para começar!";
}