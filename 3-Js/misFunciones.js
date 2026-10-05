/**
 * Conversión de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas.
 * @return
 */
const cambiarUnidades = (id, valor) => {
    let metro = "";
    let pulgada = "";
    let pie = "";
    let yarda = "";

    if (isNaN(valor)) {
        alert("Se ingresó un valor inválido.");
    } else {
        valor = Number(valor);

        if (id === "metro") {
            metro = valor;
            pulgada = 39.3701 * valor;
            pie = 3.28084 * valor;
            yarda = 1.09361 * valor;
        } else if (id === "pulgada") {
            metro = 0.0254 * valor;
            pulgada = valor;
            pie = 0.0833333 * valor;
            yarda = 0.0277778 * valor;
        } else if (id === "pie") {
            metro = 0.3048 * valor;
            pulgada = 12 * valor;
            pie = valor;
            yarda = 0.333333 * valor;
        } else if (id === "yarda") {
            metro = 0.9144 * valor;
            pulgada = 36 * valor;
            pie = 3 * valor;
            yarda = valor;
        }
    }

    document.units.unid_metro.value = metro;
    document.units.unid_pulgada.value = pulgada;
    document.units.unid_pie.value = pie;
    document.units.unid_yarda.value = yarda;
};

const convertirGR = (id) => {
    let grad = "";
    let rad = "";

    if (id === "grados") {
        grad = Number(document.getElementById("grados").value);
        rad = (grad * Math.PI) / 180;
    } else if (id === "radianes") {
        rad = Number(document.getElementById("radianes").value);
        grad = (rad * 180) / Math.PI;
    }

    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
};

function mostrar_ocultar(valorMO) {
    if(valorMO=="val_mostrar") {
        document.getElementById("divMO").style.display = 'block';
    } else if (valorMO == "val_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }
}