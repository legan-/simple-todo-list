import React from 'react';
import { shallow } from 'enzyme'
import FilterBar from './FilterBar';

import { setup as importedItems } from '../../../reducers/items.test.js';
import { classifyItems } from '../../../reducers/items';

const setup = (active = 'all') => {
  const component = shallow(<FilterBar items={ classifyItems(importedItems().items) } onClick={ () => {} } active={ active } />);

  return {
    component
  }
}

describe('FilterBar Component', () => {

  it('should display "menu" class', () => {
    const { component } = setup();
    expect(component.find('Menu').exists()).toBe(true);
  });

  it('should display correct "All" label', () => {
    const { component } = setup();
    const { all } = importedItems();
    const label = parseInt(component.find('Menu').childAt(0).find('Label').dive().text());
    expect(label).toEqual(all);
  });

  it('should display correct "Completed" label', () => {
    const { component } = setup();
    const { completed } = importedItems();
    const label = parseInt(component.find('Menu').childAt(1).find('Label').dive().text());
    expect(label).toEqual(completed);
  });

  it('should display correct "Removed" label', () => {
    const { component } = setup();
    const { removed } = importedItems();
    const label = parseInt(component.find('Menu').childAt(2).find('Label').dive().text());
    expect(label).toEqual(removed);
  });

  it('should be "All" button active', () => {
    const { component } = setup();
    const button = component.find('Menu').childAt(0).dive();
    expect(button.hasClass('active')).toBe(true);
  });

  it('should be "Completed" button active', () => {
    const { component } = setup('completed');
    const button = component.find('Menu').childAt(1).dive();
    expect(button.hasClass('active')).toBe(true);
  });

  it('should be "Removed" button active', () => {
    const { component } = setup('removed');
    const button = component.find('Menu').childAt(2).dive();
    expect(button.hasClass('active')).toBe(true);
  });
});