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

/**
 * Operación Suma
 */
function sumar() {
    const n1 = document.getElementById("nums1").value;
    const n2 = document.getElementById("nums2").value;
    const totalS = document.getElementById("totalS");

    totalS.disabled = true;

    if (n1 !== "" && n2 !== "") {
        totalS.value = Number(n1) + Number(n2);
    } else {
        totalS.value = "";
    }
}

/**
 * Operación Resta
 */
function restar() {
    const n1 = document.getElementById("numr1").value;
    const n2 = document.getElementById("numr2").value;
    const totalR = document.getElementById("totalR");

    totalR.disabled = true;

    if (n1 !== "" && n2 !== "") {
        totalR.value = Number(n1) - Number(n2);
    } else {
        totalR.value = "";
    }
}

/**
 * Operación Multiplicación
 */
function multiplicar() {
    const n1 = document.getElementById("numm1").value;
    const n2 = document.getElementById("numm2").value;
    const totalM = document.getElementById("totalM");

    totalM.disabled = true;

    if (n1 !== "" && n2 !== "") {
        totalM.value = Number(n1) * Number(n2);
    } else {
        totalM.value = "";
    }
}

/**
 * Operación División
 */
function dividir() {
    const n1 = document.getElementById("numd1").value;
    const n2 = document.getElementById("numd2").value;
    const totalD = document.getElementById("totalD");

    totalD.disabled = true;

    if (n1 !== "" && n2 !== "") {
        const val2 = Number(n2);
        if (val2 === 0) {
            totalD.value = "Error: Div / 0";
        } else {
            totalD.value = Number(n1) / val2;
        }
    } else {
        totalD.value = "";
    }
}