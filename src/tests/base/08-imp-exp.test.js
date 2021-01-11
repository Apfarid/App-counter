const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");
const { default: heroes } = require("../../data/heroes");

describe("Pruebas en funciones de Heroe", () => {
  test("Debe retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((heroe) => heroe.id);
    expect(heroe).toEqual(heroeData);
  });

  test("Debe retornar undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Debe retornar un arreglo con los heroes de Dc", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);
    const heroeData = heroes.filter((heroe) => heroe.owner === owner);
    expect(heroe).toEqual(heroeData);
  });

  test("Debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner).length;
    // const heroeData = heroes.filter((heroe) => heroe.owner === owner).length;
    expect(heroe).toBe(2);
  });
});
