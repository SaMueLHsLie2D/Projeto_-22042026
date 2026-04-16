// --- VARIÁVEIS GLOBAIS ---
let jogoAtivo = true; // FLAG: Enquanto true, o jogo aceita cliques

// CONTADORAS
let contP1 = 0;
let contP2 = 0;

// ACUMULADORA
let acumPartidas = 0;

function jogar(escolhaP1) {
    if (!jogoAtivo) {
        alert("O jogo está encerrado! Recarregue para jogar novamente.");
        return;
    }

    // Solicitação da Escolha do Jogador 2
    let escolhaP2 = parseInt(prompt("Jogador 2:\n1-Pedra\n2-Papel\n3-Tesoura"));

    if (escolhaP2 === 4) {
        encerrarJogo();
        return;
    }

    const statusTxt = document.getElementById("status");

    // Lógica de Comparação
    if (escolhaP1 === escolhaP2) {
        statusTxt.innerText = "Empate na rodada!";
    } else if (
        (escolha1 === 1 && escolha2 === 3) ||
        (escolha1 === 2 && escolha2 === 1) ||
        (escolha1 === 3 && escolha2 === 2)
    ) {
        statusTxt.innerText = "Jogador 1 venceu a rodada!";
        contP1++; // Incremento da Contadora
        document.getElementById("vitoriasP1").innerText = contP1;
    } else {
        statusTxt.innerText = "Jogador 2 venceu a rodada!";
        contP2++; // Incremento da Contadora
        document.getElementById("vitoriasP2").innerText = contP2;
    }

    acumPartidas++; // Incremento da Acumuladora
    document.getElementById("totalPartidas").innerText = acumPartidas;
}

function encerrarJogo() {
    jogoAtivo = false; // Alterando a FLAG
    document.getElementById("status").innerText = "JOGO FINALIZADO!";
    alert(`Resultado Final:\nPartidas: ${acumPartidas}\nP1: ${contP1}\nP2: ${contP2}`);
}