const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const botaoPlayPause = document.getElementById('play-pause');

const numeroCapitulos =20;
let Tocando = 0;
let capituloAtual = 0;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPausar() {
    if ( Tocando === 0) {
        tocarFaixa();
        Tocando = 1;
    } else {
        pausarFaixa();
        Tocando = 0;
    }
}

const listaAudios = [
    './assets/audios/Dom Casmurro - Capítulo 1.mp3',
    './assets/audios/dom casmurro - capitulo 2.mp3',
    './assets/audios/com casmurro - capitulo 3.mp3',
    './assets/audios/Dom Casmurro _ Capítulo 4_ Um Dever Amaríssimo_(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 5_ O Agregado(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 6_ Tio Cosme(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 7_ Dona Glória(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 8_ É Tempo(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 9_ A Ópera(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 10_ Aceito a Teoria(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 11_ A Promessa(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 12_ Na Varanda(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 13_ Capitu(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 14_ A Inscrição(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 15_ Outra Voz Repentina(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 16_ O Administrador Interino(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 17_ Os Vermes(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 18_ Um Plano(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 19_ Sem Falta(MP3_128K).mp3',
    './assets/audios/Dom Casmurro _ Capítulo 20_ Mil Padre-Nossos e Mil Ave-Marias(MP3_128K).mp3'
];

const audioCapitulo = document.getElementById('audio-capitulo');
// Índice do áudio atual

// Função para reproduzir o próximo áudio na lista
function proximaFaixa() {
    capituloAtual++;
    if (capituloAtual >= listaAudios.length) {
        capituloAtual = 0;
    }

    audioCapitulo.src = listaAudios[capituloAtual];
    audioCapitulo.play();
}

function voltarFaixa() {
    capituloAtual--;
    if (capituloAtual >= listaAudios.length) {
        capituloAtual > 0; // Volta para o primeiro áudio se estiver no último
    }
    audioCapitulo.src = listaAudios[capituloAtual];
    audioCapitulo.play();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);  // evento que inicia/pausa a música/audio após o click no play
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);