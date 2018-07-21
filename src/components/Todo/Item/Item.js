import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Icon
} from 'semantic-ui-react';


class Item extends Component {
  render() {
    const { id, value, isChecked, isRemoved, onClick } = this.props;

    const removeBtn = isChecked && (
      <List.Content floated='right'>
        <Icon
          link 
          name='remove'
        />
      </List.Content>
    )

    return !isRemoved && (
      <List.Item onClick={ e => onClick(e, id) }>
        { removeBtn }
        <List.Icon
          name={ isChecked ? 'checkmark' : '' }
        />
        <List.Content>
          <List.Header>{ value }</List.Header>
        </List.Content>
      </List.Item>
    )
  }
}

Item.propTypes = {
  id:         PropTypes.number.isRequired,
  value:      PropTypes.string.isRequired,
  isChecked:  PropTypes.bool.isRequired,
  isRemoved:  PropTypes.bool.isRequired,
  onClick:    PropTypes.func.isRequired,
}

export default Item