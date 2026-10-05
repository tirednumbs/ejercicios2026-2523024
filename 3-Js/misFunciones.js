/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function cambiarUnidades(id, valor) {
    if(isNaN(valor)){
        alert("Se ingresó un valor inválido.");
        document.units.unid_metro.value = "";
        document.units.unid_pulgada.value = "";
        document.units.unid_pie.value = "";
        document.units.unid_yarda.value = "";
    } else if (id == "metro") {
        document.units.unid_pulgada.value = 39.3701*valor;
        document.units.unid_pie.value = 3.28024*valor;
        document.units.unid_yarda.value = 1.09361*valor;
    }
}