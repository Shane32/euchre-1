"use strict";

import OrderUp from "components/phases/order-up";
import React from "react";
import {ace, nine} from "utils/playing-cards";
import {shallow} from "enzyme";

describe("components", function () {
  describe("phases", function () {
    describe("<OrderUp />", function () {
      var component;

      beforeEach(function () {
        component = shallow(
          <OrderUp
            dispatch={jasmine.createSpy("dispatch")}
            hands={{
              north: [nine.clubs],
              south: [nine.spades],
              east: [nine.hearts],
              west: [nine.diamonds],
              kitty: [ace.clubs]
            }}
          />
        );
      });

      it("renders a table", function () {
        expect(component.find("Table").length).toBe(1);
      });

      it("renders the kitty", function () {
        expect(component.find("Kitty").length).toBe(1);
      });

      it("renders the order up question", function () {
        expect(component.find("ShouldOrderUp").length).toBe(1);
      });
    });
  });
});
