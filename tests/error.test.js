import { h } from "preact";
import Error from "../src/components/error";
import { shallow } from "enzyme";

describe("Test of the Error", () => {
  test("Error renders items", () => {
    const contextShallow = shallow(<Error />);

    expect(contextShallow.find("Link").length).toBe(1);
    expect(contextShallow.exists(".img-container")).toEqual(true);
  });
});
