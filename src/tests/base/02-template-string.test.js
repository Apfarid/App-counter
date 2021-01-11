import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test("Prueba en el metodo getSaludo", () => {
    const nombre = "Anderson";
    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  test("getSaludo debe retornar Hola Carlos si no hay argumentos", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos");
  });
});
