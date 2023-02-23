import { h } from "preact";
import Image from "../src/components/image";
import { shallow } from "enzyme";
import { dataImg } from "./moksData/image";

describe("Test of the Image", () => {
  it("is set Image", () => {
    const contextShallow = shallow(<Image {...dataImg} />);
    expect(contextShallow.prop('src')).toEqual("https://itx-frontend-test.onrender.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg");
    expect(contextShallow.prop('alt')).toEqual("xyPoqGJxYR4Nn3yVGQcfI");
    expect(contextShallow.props().visibleByDefault).toBeFalsy();
  });
});
