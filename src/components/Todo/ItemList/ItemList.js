import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Message,
  List,
} from 'semantic-ui-react';

import Item from '../Item';


class ItemList extends Component {
  render() {
    const { items, onTodoItemClick, activeMenuItem } = this.props;
    const selectedItems = items[activeMenuItem];

    return selectedItems.length ? (
      <List
        verticalAlign='middle'
        size='large'
        selection
        divided
      >
        {
          selectedItems.map( (item, index) => (
            <Item
              key={ index }
              onClick={ onTodoItemClick }
              active={ activeMenuItem }
              { ...item }
            />
          ))
        }
      </List>
    ) : (
      <Message visible>List of { activeMenuItem } todos is empty</Message>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.shape({
    all:        PropTypes.array.isRequired,
    completed:  PropTypes.array.isRequired,
    removed:    PropTypes.array.isRequired,
  }).isRequired,
  onTodoItemClick: PropTypes.func.isRequired,
  activeMenuItem:  PropTypes.string.isRequired,
}

export default ItemList