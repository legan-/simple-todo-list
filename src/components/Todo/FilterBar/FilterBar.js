import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  Menu
} from 'semantic-ui-react';


class FilterBar extends Component {
  render() {
    const { items, onClick, active } = this.props;
    const { all, completed, removed } = items;

    return (
      <Menu borderless widths={ 3 }>
        <Menu.Item
          name='all'
          active={ active === 'all' }
          onClick={ onClick }
        >
          All
          <Label>
            { all.length }
          </Label>
        </Menu.Item>
        <Menu.Item
          name='completed'
          active={ active === 'completed' }
          onClick={ onClick }
        >
          Completed
          <Label>
            { completed.length }
          </Label>
        </Menu.Item>
        <Menu.Item
          name='removed'
          active={ active === 'removed' }
          onClick={ onClick }
        >
          Removed
          <Label>
            { removed.length }
          </Label>
        </Menu.Item>
      </Menu>
    )
  }
}

FilterBar.propTypes = {
  items:      PropTypes.shape({
    all:        PropTypes.array.isRequired,
    completed:  PropTypes.array.isRequired,
    removed:    PropTypes.array.isRequired,
  }).isRequired,
  onClick:    PropTypes.func.isRequired,
  active:     PropTypes.string.isRequired,
}

export default FilterBar