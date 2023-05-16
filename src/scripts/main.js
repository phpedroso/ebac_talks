AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampdoEvento = dataDoEvento.getTime();

const contaTempo = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampdoEvento - timeStampAtual;

    const diasAteEvento = Math.floor(distanciaAteEvento / (1000 * 60 * 60 * 24));
    const horasAteEvento = Math.floor((distanciaAteEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteEvento = Math.floor(distanciaAteEvento % (1000 * 60 * 60) / (1000 * 60));
    const segundosAteEvento =  Math.floor(distanciaAteEvento % (1000 * 60 ) / 1000);

    document.getElementById('contator').innerHTML = `começa em ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}min ${segundosAteEvento}s`;

    if (distanciaAteEvento < 0 ) {
        clearInterval(contaAsHoras);
        document.getElementById('contator').innerHTML = '';
    }
}, 1000);

