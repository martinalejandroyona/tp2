document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('imcForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const peso = parseFloat(document.getElementById('peso').value);
        const estatura = parseFloat(document.getElementById('estatura').value);
        const resultado = document.getElementById('resultado');

        if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
            resultado.textContent = 'Por favor, introduzca un peso y estatura válidos.';
            return;
        }

        const imc = peso / Math.pow(estatura, 2);
        resultado.textContent = `Tu índice de masa corporal (IMC) es: ${imc.toFixed(2)}`;
    });
});
