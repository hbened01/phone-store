import { h } from "preact";
import Header from "../src/components/header";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow, mount } from "enzyme";

describe("Test of the Header", () => {
  test("Header renders items", () => {
    const contextShallow = shallow(<Header />);
    const contextMount = mount(<Header />);
    // console.log(contextShallow.debug());
    // console.log(contextMount.debug());

    expect(contextShallow.find("h1").text()).toBe("Phone Store");
    expect(contextShallow.find("Link").length).toBe(1);
    expect(contextMount.find("a").text()).toEqual("Home");
    expect(contextMount.find("button#cart-list").text()).toBeTruthy();
  });
});
