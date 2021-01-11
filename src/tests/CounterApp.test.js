import CounterApp from "../CounterApp";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Prueba a <CounterApp/>", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe de mostrar <CounterApp/> correctamente", () => {
    const value = 10;
    const wrapper = shallow(<CounterApp value={value} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el valor por defecto de 10", () => {
    const textoParrafo = wrapper.find("h2").text().trim();
    expect(textoParrafo).toBe("10");
  });

  test("debe de incrementar con el boton +1", () => {
    // const btn1 = wrapper.find("button").at(0);
    // console.log(btn1.html());
    wrapper.find("button").at(0).simulate("click");
    const textoParrafo = wrapper.find("h2").text().trim();
    expect(textoParrafo).toBe("11");
  });

  test("debe de reducir con el boton -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const textoParrafo = wrapper.find("h2").text().trim();
    expect(textoParrafo).toBe("9");
  });

  test("Debe de colocar el valor por defecto con el boton reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const textoParrafo = wrapper.find("h2").text().trim();
    expect(textoParrafo).toBe("105");
  });
});
