import React from "react";
import { shallow, mount, render } from "enzyme";
import "../setupEnzymeTests";
import Chart from "./Chart";
import { Sparkline } from "@data-ui/sparkline";

describe.skip("<Chart />", () => {
  it("renders one (and only one) <Sparkline />", () => {
    const wrapper = shallow(
      <Chart title={"some title"} data={[]} tooltipId="someId" />
    );
    expect(wrapper.find(Sparkline)).toHaveLength(1);
  });
});
