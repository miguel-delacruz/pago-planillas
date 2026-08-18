const {
  validarDatos,
  calcularPagoHorasExtra,
  calcularIngresosTotales,
  calcularPagoNeto,
  calcularPlanilla
} = require("../src/planilla");

describe("Cálculo de pago de planilla", () => {
  test("calcula correctamente el pago por horas extra", () => {
    expect(calcularPagoHorasExtra(5, 20)).toBe(100);
  });

  test("calcula correctamente los ingresos totales", () => {
    expect(calcularIngresosTotales(3000, 100, 200)).toBe(3300);
  });

  test("calcula correctamente el pago neto", () => {
    expect(calcularPagoNeto(3300, 150)).toBe(3150);
  });

  test("calcula correctamente una planilla completa", () => {
    const empleado = {
      nombre: "Ana Torres",
      sueldoBase: 3000,
      horasExtra: 5,
      tarifaHoraExtra: 20,
      bono: 200,
      descuentos: 150
    };

    const resultado = calcularPlanilla(empleado);

    expect(resultado.pagoHorasExtra).toBe(100);
    expect(resultado.ingresosTotales).toBe(3300);
    expect(resultado.pagoNeto).toBe(3150);
  });

  test("rechaza valores negativos", () => {
    const empleado = {
      nombre: "Ana Torres",
      sueldoBase: -3000,
      horasExtra: 5,
      tarifaHoraExtra: 20,
      bono: 200,
      descuentos: 150
    };

    expect(() => validarDatos(empleado)).toThrow(
      "Los valores no pueden ser negativos"
    );
  });
});