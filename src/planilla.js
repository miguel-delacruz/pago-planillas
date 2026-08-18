function validarDatos(datos) {
  const {
    sueldoBase,
    horasExtra,
    tarifaHoraExtra,
    bono,
    descuentos
  } = datos;

  if (
    sueldoBase < 0 ||
    horasExtra < 0 ||
    tarifaHoraExtra < 0 ||
    bono < 0 ||
    descuentos < 0
  ) {
    throw new Error("Los valores no pueden ser negativos");
  }
}

function calcularPagoHorasExtra(horasExtra, tarifaHoraExtra) {
  return horasExtra * tarifaHoraExtra;
}

function calcularIngresosTotales(sueldoBase, pagoHorasExtra, bono) {
  return sueldoBase + pagoHorasExtra + bono;
}

function calcularPagoNeto(ingresosTotales, descuentos) {
  return ingresosTotales - descuentos;
}

function calcularPlanilla(empleado) {
  validarDatos(empleado);

  const pagoHorasExtra = calcularPagoHorasExtra(
    empleado.horasExtra,
    empleado.tarifaHoraExtra
  );

  const ingresosTotales = calcularIngresosTotales(
    empleado.sueldoBase,
    pagoHorasExtra,
    empleado.bono
  );

  const pagoNeto = calcularPagoNeto(
    ingresosTotales,
    empleado.descuentos
  );

  return {
    nombre: empleado.nombre,
    sueldoBase: empleado.sueldoBase,
    pagoHorasExtra,
    bono: empleado.bono,
    ingresosTotales,
    descuentos: empleado.descuentos,
    pagoNeto
  };
}

module.exports = {
  validarDatos,
  calcularPagoHorasExtra,
  calcularIngresosTotales,
  calcularPagoNeto,
  calcularPlanilla
};