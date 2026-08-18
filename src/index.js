const { calcularPlanilla } = require("./planilla");

const empleado = {
  nombre: "Ana Torres",
  sueldoBase: 3000,
  horasExtra: 5,
  tarifaHoraExtra: 20,
  bono: 200,
  descuentos: 150
};

const resultado = calcularPlanilla(empleado);

console.log("=== PAGO DE PLANILLA ===");
console.log(`Empleado: ${resultado.nombre}`);
console.log(`Sueldo base: S/ ${resultado.sueldoBase}`);
console.log(`Pago horas extra: S/ ${resultado.pagoHorasExtra}`);
console.log(`Bono: S/ ${resultado.bono}`);
console.log(`Ingresos totales: S/ ${resultado.ingresosTotales}`);
console.log(`Descuentos: S/ ${resultado.descuentos}`);
console.log(`Pago neto: S/ ${resultado.pagoNeto}`);