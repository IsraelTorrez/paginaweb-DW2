
function fibonacciRecursivo(n) {
    if (n <= 1) {
        return [0, 1].slice(0, n + 1);
    } else {
        let fib = fibonacciRecursivo(n - 1);
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        return fib;
    }
}

function mostrarFibonacciRecursivo() {
    let n = prompt("Ingresa el número de términos para la serie de Fibonacci:");
    n = parseInt(n);

    if (!isNaN(n) && n >= 0) {
        let resultado = fibonacciRecursivo(n);
        alert("Serie de Fibonacci recursiva: " + resultado.join(", "));
    } else {
        alert("Por favor, ingresa un número entero no negativo.");
    }
}