import React, { Component } from "react";
import { Navbar, Nav, Form, InputGroup } from "react-bootstrap";

class SortingNavbar extends Component {
  state = {
    navButtons: [
      {
        name: "Generate Array",
        handle: this.props.controllerObject.handleGenerateArray,
      },
      {
        name: "Bubble Sort",
        handle: this.props.controllerObject.handleBubbleSort,
      },
      {
        name: "Insertion Sort",
        handle: this.props.controllerObject.handleInsertionSort,
      },
      {
        name: "Selection Sort",
        handle: this.props.controllerObject.handleSelectionSort,
      },
      {
        name: "Merge Sort",
        handle: this.props.controllerObject.handleMergeSort,
      },
      {
        name: "Quick Sort",
        handle: this.props.controllerObject.handleQuickSort,
      },
      { name: "Heap Sort", handle: this.props.controllerObject.handleHeapSort },
    ],
  };
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#">DS Visualiser</Navbar.Brand>
        <Nav className="mr-auto">
          {this.state.navButtons.map((button) => (
            <Nav.Link onClick={button.handle} key={button.name}>
              {button.name}
            </Nav.Link>
          ))}
        </Nav>
        <Form inline className="mx-4">
          <Form.Group controlId="sizeOfArray">
            <Form.Label>Array Size</Form.Label>
            <Form.Control
              type="range"
              min="2"
              max="100"
              step="3"
              defaultValue={this.props.controllerObject.state.sizeOfArray}
              onInput={this.props.controllerObject.handleArraySizeChange}
            />
          </Form.Group>
        </Form>
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="AnimationSpeed">Speed</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="select"
              defaultValue="1"
              onChange={this.props.controllerObject.handleAnimationSpeedChange}
            >
              <option value="0.25">0.25x</option>
              <option value="0.50">0.50x</option>
              <option value="0.75">0.75x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="1.50">1.50x</option>
              <option value="1.75">1.75x</option>
            </Form.Control>
          </InputGroup>
        </Form>
      </Navbar>
    );
  }
}

export default SortingNavbar;
