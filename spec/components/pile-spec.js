"use strict";

var React = require("react/addons");
var Pile = require("../../src/javascripts/components/pile");
var Card = require("../../src/javascripts/components/card");
var TestUtils = React.addons.TestUtils;

describe("Pile", function () {
  var shallowRenderer;
  var hearts_10 = {face: "ten", suit: "hearts"};
  var spades_queen = {face: "queen", suit: "spades"};
  var hearts_ace = {face: "ace", suit: "hearts"};
  var diamonds_10 = {face: "ten", suit: "diamonds"};

  beforeEach(function () {
    shallowRenderer = TestUtils.createRenderer();
  });

  it("renders cards into the correct spot", function () {
    shallowRenderer.render(<Pile west={hearts_10} />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children[1].props.children[0]).toEqual(<Card face="ten" suit="hearts" />);
  });

  it("renders no cards if none are passed in", function () {
    shallowRenderer.render(<Pile />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children[0]).toEqual(undefined);
    expect(component.props.children[1].props.children[0]).toEqual(undefined);
    expect(component.props.children[1].props.children[1]).toEqual(undefined);
    expect(component.props.children[2]).toEqual(undefined);
  });

  it("renders one card if one is passed in", function () {
    shallowRenderer.render(<Pile north={hearts_10} />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children[0]).toEqual(<Card face="ten" suit="hearts" />);
    expect(component.props.children[1].props.children[0]).toEqual(undefined);
    expect(component.props.children[1].props.children[1]).toEqual(undefined);
    expect(component.props.children[2]).toEqual(undefined);
  });

  it("renders two cards if two are passed in", function () {
    shallowRenderer.render(<Pile north={spades_queen} east={hearts_ace} />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children[0]).toEqual(<Card face="queen" suit="spades" />);
    expect(component.props.children[1].props.children[0]).toEqual(undefined);
    expect(component.props.children[1].props.children[1]).toEqual(<Card face="ace" suit="hearts" />);
    expect(component.props.children[2]).toEqual(undefined);
  });

  it("renders three cards if three are passed in", function () {
    shallowRenderer.render(<Pile north={hearts_ace} east={hearts_10} south={diamonds_10} />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children[0]).toEqual(<Card face="ace" suit="hearts" />);
    expect(component.props.children[1].props.children[0]).toEqual(undefined);
    expect(component.props.children[1].props.children[1]).toEqual(<Card face="ten" suit="hearts" />);
    expect(component.props.children[2]).toEqual(<Card face="ten" suit="diamonds" />);
  });

  it("renders four cards if four are passed in", function () {
    shallowRenderer.render(<Pile north={hearts_ace} east={spades_queen} south={diamonds_10} west={hearts_10} />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children[0]).toEqual(<Card face="ace" suit="hearts" />);
    expect(component.props.children[1].props.children[0]).toEqual(<Card face="ten" suit="hearts" />);
    expect(component.props.children[1].props.children[1]).toEqual(<Card face="queen" suit="spades" />);
    expect(component.props.children[2]).toEqual(<Card face="ten" suit="diamonds" />);
  });
});
