// REQUISITO TÉCNICO COMPLEMENTARIO: Función propia algorítmica e iterativa para factoriales
function calcularFactorial(num) {
    if (num === 0 || num === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

// Algoritmo interno para aplicar el modelo combinatorio estándar C(n, r)
function obtenerCombinaciones(n, r) {
    if (r > n) return 0; // Regla de control matemático
    return calcularFactorial(n) / (calcularFactorial(r) * calcularFactorial(n - r));
}

function calcularCombinaciones() {
    // 1. Captura estricta por ID tal como exige el punto 3 de las pautas
    const n1 = parseInt(document.getElementById('n1').value);
    const r1 = parseInt(document.getElementById('r1').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const r2 = parseInt(document.getElementById('r2').value);

    const contenedor = document.getElementById('resultado-combinaciones');

    // 2. Control riguroso de excepciones lógicas (Evita desbordamientos e inconsistencias)
    if (r1 > n1) {
        mostrarError('Inconsistencia en Grupo 1: El número de extracciones (r) supera el universo total (n).');
        return;
    }
    if (r2 > n2) {
        mostrarError('Inconsistencia en Grupo 2: El número de extracciones (r) supera el universo total (n).');
        return;
    }
    if (n1 < 0 || r1 < 0 || n2 < 0 || r2 < 0) {
        mostrarError('Matemáticas no válidas: Los factoriales no aceptan números negativos.');
        return;
    }

    // 3. Procesamiento central del simulador combinatorio
    const comb1 = obtenerCombinaciones(n1, r1);
    const comb2 = obtenerCombinaciones(n2, r2);
    const totalCombinaciones = comb1 * comb2;

    // 4. Inyección estructurada de interfaz limpia de resultados
    contenedor.innerHTML = `
        <div class="result-header">
            <span class="success-badge">✓ Análisis Completado</span>
        </div>
        <div class="combo-breakdown">
            <p>• Combinaciones Grupo 1: <strong>${comb1.toLocaleString()}</strong> opciones.</p>
            <p>• Combinaciones Grupo 2: <strong>${comb2.toLocaleString()}</strong> opciones.</p>
        </div>
        <div class="total-highlight">
            <span class="label-total">ESPACIO MUESTRAL TOTAL COMBINADO:</span>
            <span class="number-total">${totalCombinaciones.toLocaleString()}</span>
        </div>
    `;

    // Mostramos la caja activando los estilos de transición CSS
    contenedor.className = "result-box animate-fade";
}

function mostrarError(mensaje) {
    const contenedor = document.getElementById('resultado-combinaciones');
    contenedor.innerHTML = `
        <div class="result-header">
            <span class="error-badge">❌ Excepción de Lógica</span>
        </div>
        <p style="margin-top: 10px; font-family: system-ui, sans-serif; font-size: 0.95rem; color: #991b1b;">${mensaje}</p>
    `;
    contenedor.className = "result-box error-box animate-fade";
}