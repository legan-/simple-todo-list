import React from 'react';
import { shallow } from 'enzyme'
import App from './App';


const setup = () => {
  const component = shallow(<App />);

  return {
    component,
    container: component.find('Grid')
  }
}

describe('App Component', () => {
  it('should display "grid" class', () => {
    const { container } = setup();
    expect(container.exists()).toBe(true);
  });
});