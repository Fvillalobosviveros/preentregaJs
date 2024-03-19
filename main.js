/*
1.-variables ✔
2.-condicionales ✔
3.-ciclos ✔
4.-funciones ✔
*/


let codigoProducto = parseInt(prompt('Ingrese el código del artículo a comprar\n1-Teléfono...$5000\n2-Computadora...$20000\n3-Tableta...$7000\n4-Auriculares...$1500\n0-Salir del programa🚨'));

let sumaTotal = 0;
const IMPUESTO_IVA = 0.19;
const DESCUENTO_EFECTIVO = 0.1;
const RECARGO_TARJETA = 0.04;

while (codigoProducto != 0) {
    switch (codigoProducto) {
        case 1:
            sumaTotal += 5000;
            alert('Has agregado un Teléfono al carrito 🛒Total acumulado $' + sumaTotal);
            break;

        case 2:
            sumaTotal += 20000;
            alert('Has agregado una Computadora al carrito 🛒Total acumulado $' + sumaTotal);
            break;

        case 3:
            sumaTotal += 7000;
            alert('Has agregado una Tableta al carrito 🛒Total acumulado $' + sumaTotal);
            break;

        case 4:
            sumaTotal += 1500;
            alert('Has agregado Auriculares al carrito 🛒Total acumulado $' + sumaTotal);
            break;

        default:
            alert('Código inválido 😮');
            break;
    }

    codigoProducto = parseInt(prompt('Ingrese el código del artículo a comprar\n1-Teléfono...$5000\n2-Computadora...$20000\n3-Tableta...$7000\n4-Auriculares...$1500\n0-Salir del programa🚨'));
}

if (sumaTotal != 0) {
    let formaPago = parseInt(prompt('¿Cómo desea abonar?\n1-Efectivo\n2-Débito\n3-Crédito'));

    if (formaPago == 1) {
        alert('Total a pagar $' + calcularTotalConImpuestos(sumaTotal, IMPUESTO_IVA, -DESCUENTO_EFECTIVO));
    } else if (formaPago == 2) {
        alert('Total a pagar $' + calcularTotalConImpuestos(sumaTotal, IMPUESTO_IVA, 0));
    } else if (formaPago == 3) {
        alert('Total a pagar $' + calcularTotalConImpuestos(sumaTotal, IMPUESTO_IVA, RECARGO_TARJETA));
    } else {
        alert('Opción inválida!');
    }
}

function calcularTotalConImpuestos(total, impuesto, ajuste) {
    let totalConIVA = total * (1 + impuesto);
    let totalFinal = ajuste !== 0 ? totalConIVA * (1 + ajuste) : totalConIVA;
    return totalFinal;
}




