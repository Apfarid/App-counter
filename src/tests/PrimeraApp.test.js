import PrimeraApp from "../PrimeraApp";
// import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Pruebas en <PrimeraApp/>", () => {
  //   test("debe de mostrar el mensaje Hola, soy Anderson", () => {});
  //   const saludo = "Hola, soy Anderson";
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);

  //   expect(getByText(saludo)).toBeInTheDocument();

  test("debe de mostrar el mensaje Hola, soy Anderson", () => {
    const saludo = "Hola, soy Anderson";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el subtitilo enviado por props", () => {
    const saludo = "Hola, soy Anderson";
    const subTitulo = " React ";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subTitulo={subTitulo} />
    );

    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(subTitulo);
  });
});
