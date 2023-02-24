import { h } from "preact";
import Loader from "../src/components/loader";
import { shallow } from "enzyme";

describe("Test of the Loader", () => {
  test("Loader renders items", () => {
    const contextShallow = shallow(<Loader />);

    expect(contextShallow.find(".animate-pulse")).toBeTruthy();
    expect(contextShallow.exists(".spinner-grow")).toEqual(true);
  });
});
