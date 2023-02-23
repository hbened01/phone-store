import { h } from "preact";
import Toast from "../src/components/toast";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow, mount } from "enzyme";
import { warningCase, successCase, dangerCase } from "./moksData/toast";

describe("Test of the Toast", () => {
  test("is set success", () => {
    const contextShallow = shallow(<Toast {...successCase} />);
    // console.log(contextShallow.debug());

    expect(contextShallow.find("span").length).toBe(0);
    expect(contextShallow.find("#msg-success").text()).toEqual("test of success");
    expect(contextShallow.find("#toast-success")).toBeTruthy();
  });

  test("is set warning", () => {
    const contextShallow = shallow(<Toast {...warningCase} />);
    // console.log(contextShallow.debug());

    expect(contextShallow.find("span").length).toBe(2);
    expect(contextShallow.find("#msg-warning").text()).toEqual("test of warning");
    expect(contextShallow.find("#toast-warning")).toBeTruthy();
  });


  test("is set danger", () => {
    const contextShallow = shallow(<Toast {...dangerCase} />);
    // console.log(contextShallow.debug());

    expect(contextShallow.find("span").length).toBe(2);
    expect(contextShallow.find("#msg-danger").text()).toEqual("test of danger");
    expect(contextShallow.find("#toast-danger")).toBeTruthy();
  });
});
