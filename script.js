// 1. Lógica para las Pestañas (Hardware vs Software)
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// 2. Simulador de IA en Tiempo Real (Efecto Mecanografiado para el Jurado)
const simData = {
    ocr: {
        text: '>>> DETECTADO: Letrero comercial ["FARMACIA SAN RAFAEL - ABIERTO 24 HORAS"]. Distancia aproximada: 2.5 metros.',
        audio: '"Farmacia San Rafael, abierto 24 horas a 2.5 metros a las doce en punto."',
        haptic: 'Vibración suave y corta (confirmación de texto).'
    },
    obstacle: {
        text: '>>> ALERTA DE RIESGO: Rama de árbol suspendida a nivel de la cabeza (1.70m de altura). Distancia: 1.2 metros en trayectoria directa.',
        audio: '"¡Alerta! Obstáculo alto a un metro frente a ti."',
        haptic: '¡VIBRACIÓN RÁPIDA E INTENSA EN LA VARILLA DERECHA!'
    },
    nav: {
        text: '>>> GPS ACTIVO: Cruce peatonal detectado. Semáforo visualizado en ROJO para peatones. Esperar instrucción.',
        audio: '"Cruce peatonal al frente. Semáforo en rojo, por favor deténgase."',
        haptic: 'Vibración constante e intermitente de advertencia.'
    }
};

let typeInterval;

function runSimulation(mode) {
    // Actualizar botones
    const buttons = document.querySelectorAll('.sim-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Obtener elementos de la pantalla
    const screenText = document.getElementById('sim-text');
    const audioText = document.getElementById('audio-text');
    const hapticText = document.getElementById('haptic-text');

    // Limpiar intervalo anterior si el usuario hace clic rápido
    clearInterval(typeInterval);

    // Reiniciar textos
    screenText.innerHTML = '';
    audioText.innerHTML = '<i style="color: #60a5fa;">Procesando voz...</i>';
    hapticText.innerHTML = '<i style="color: #60a5fa;">Calibrando motores...</i>';

    const targetData = simData[mode];
    let charIndex = 0;

    // Efecto Typewriter (Mecanografiado)
    typeInterval = setInterval(() => {
        if (charIndex < targetData.text.length) {
            screenText.innerHTML += targetData.text.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typeInterval);
            // Mostrar respuestas hápticas y de voz al finalizar la lectura
            audioText.innerHTML = targetData.audio;
            hapticText.innerHTML = targetData.haptic;
        }
    }, 25);
}

// 3. Efecto Sombra en el Navbar al Hacer Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 12, 16, 0.95)';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.6)';
    } else {
        nav.style.background = 'rgba(10, 12, 16, 0.85)';
        nav.style.boxShadow = 'none';
    }
});