import React, { Component } from "react";
import SortingNavbar from "./sortingNavbar";
import { Container, Col } from "react-bootstrap";
import Bar from "./bar";
import { getBubbleSortAnimations } from "../sorters/bubbleSort.js";
import { getInsertionSortAnimations } from "../sorters/insertionSort.js";
import { getSelectionSortAnimations } from "../sorters/selectionSort.js";
import { getMergeSortAnimations } from "../sorters/mergeSort.js";
import { COLORS } from "../constants/constants.js";

const BASE_SIZE = 25;
const BASE_ANIMATION_MS = 300;

class SortingContainer extends Component {
  handleMergeSort = () => {
    const animations = getMergeSortAnimations(this.state.bars);
    const len = animations.length;
    for (let i = 0; i < len; i++) {
      setTimeout(() => {
        this.setState({ bars: animations[i] });
      }, i * this.state.animationSpeed);
    }
  };

  handleBubbleSort = () => {
    const animations = getBubbleSortAnimations(this.state.bars);
    const len = animations.length;
    for (let i = 0; i < len; i++) {
      setTimeout(() => {
        this.setState({ bars: animations[i] });
      }, i * this.state.animationSpeed);
    }
  };

  handleInsertionSort = () => {
    const animations = getInsertionSortAnimations(this.state.bars);
    const len = animations.length;
    for (let i = 0; i < len; i++) {
      setTimeout(() => {
        this.setState({ bars: animations[i] });
      }, i * this.state.animationSpeed);
    }
  };

  handleSelectionSort = () => {
    const animations = getSelectionSortAnimations(this.state.bars);
    const len = animations.length;
    for (let i = 0; i < len; i++) {
      setTimeout(() => {
        this.setState({ bars: animations[i] });
      }, i * this.state.animationSpeed);
    }
  };

  handleGenerateArray = () => {
    this.setState({ bars: generateRandomArray(this.state.sizeOfArray) });
  };

  handleAnimationSpeedChange = (event) => {
    let percentageChange = -2 * ((event.target.value - 1) * 100);
    let newAnimationSpeed =
      BASE_ANIMATION_MS + (BASE_ANIMATION_MS * percentageChange) / 100;
    if (newAnimationSpeed < 0) {
      newAnimationSpeed = 0;
    }
    this.setState({ animationSpeed: newAnimationSpeed });
  };

  handleArraySizeChange = (event) => {
    this.setState({ sizeOfArray: event.target.value });
    this.handleGenerateArray();
  };

  state = {
    bars: generateRandomArray(BASE_SIZE),
    sizeOfArray: BASE_SIZE,
    animationSpeed: BASE_ANIMATION_MS,
  };

  render() {
    return (
      <React.Fragment>
        <SortingNavbar controllerObject={this} />
        <Container
          style={{
            border: "solid black 1px",
          }}
          className="height-full"
        >
          <Col className="height-full col-sm-12">
            <div className="height-full mb-5 mt-1">
              {this.state.bars.map((bar) => (
                <Bar
                  width={bar.width}
                  height={bar.height}
                  color={bar.color}
                  key={bar.id}
                />
              ))}
            </div>
          </Col>
        </Container>
      </React.Fragment>
    );
  }
}

function generateRandomArray(size) {
  let bars = [];
  for (var i = 1; i <= size; i++) {
    bars.push({
      id: i,
      height: getRandomNumberBetween(5, 85),
      index: i - 1,
      width: 100 / size,
      color: COLORS.PRIMARY,
    });
  }
  return bars;
}

function getRandomNumberBetween(start, end) {
  return Math.floor(Math.random() * end + start);
}

export default SortingContainer;
