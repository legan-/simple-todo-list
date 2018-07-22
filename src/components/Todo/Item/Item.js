import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Icon
} from 'semantic-ui-react';


class Item extends Component {
  render() {
    const { id, value, isCompleted, onClick, active } = this.props;
    const isAll = active === 'all';
    const isRemoved = active === 'removed';

    const removeBtn = isCompleted && !isRemoved && (
      <List.Content floated='right'>
        <Icon
          link 
          name='remove'
        />
      </List.Content>
    )

    return (
      <List.Item
        className={ isCompleted && isAll ? 'completed' : '' }
        onClick={ e => !isRemoved ? onClick(e, id) : '' }
      >
        { removeBtn }
        <List.Icon
          name={ isCompleted && !isRemoved ? 'checkmark' : '' }
        />
        <List.Content>
          <List.Header>{ value }</List.Header>
        </List.Content>
      </List.Item>
    )
  }
}

Item.propTypes = {
  id:           PropTypes.number.isRequired,
  value:        PropTypes.string.isRequired,
  isCompleted:  PropTypes.bool.isRequired,
  onClick:      PropTypes.func.isRequired,
  active:       PropTypes.string.isRequired,
}

export default Item