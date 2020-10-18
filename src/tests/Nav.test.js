import React from 'react';
import Nav from '../App';
import ReactDOM from 'react-dom';
import renderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';

describe('Nav component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })


  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Nav />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})