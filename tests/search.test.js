import { h } from "preact";
import Search from "../src/components/search";
import { shallow } from "enzyme";
import { dataSearch } from "./moksData/search";

describe("Test of the Toast", () => {
  test("is set success", () => {
    const contextShallow = shallow(<Search {...dataSearch} />);
    // console.log(contextShallow.debug());

    expect(contextShallow.find("#count").text()).toEqual("4");
    expect(contextShallow.find('input#search').prop('placeholder')).toEqual("test of placeholder");
  });
});
