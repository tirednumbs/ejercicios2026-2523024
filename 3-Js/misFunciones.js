/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function cambiarUnidades(id, valor) {
    if (isNaN(valor)) {
        alert("Se ingresó un valor inválido.");
        document.units.unid_metro.value = "";
        document.units.unid_pulgada.value = "";
        document.units.unid_pie.value = "";
        document.units.unid_yarda.value = "";
    } else if (id == "metro") {
        document.units.unid_pulgada.value = 39.3701 * valor;
        document.units.unid_pie.value = 3.28084 * valor;
        document.units.unid_yarda.value = 1.09361 * valor;
    } else if (id == "pulgada") {
        document.units.unid_pie.value = 0.0833333 * valor;
        document.units.unid_yarda.value = 0.0277778 * valor;
        document.units.unid_metro.value = 0.0254 * valor;
    } else if (id == "pie") {
        document.units.unid_metro.value = 0.3048 * valor;
        document.units.unid_pulgada.value = 12 * valor;
        document.units.unid_yarda.value = 0.333333 * valor;
    } else if (id == "yarda") {
        document.units.unid_metro.value = 0.9144 * valor;
        document.units.unid_pulgada.value = 36 * valor;
        document.units.unid_pie.value = 3 * valor;
    }
}