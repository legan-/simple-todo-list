import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  Grid,
  List,
  Icon,
} from 'semantic-ui-react';


class Todo extends Component {
  render() {
    const { id, value, isChecked, isRemoved, onToggle, onRemove } = this.props;

    const removeBtn = isChecked && (
      <List.Content floated='right'>
        <Icon
          link 
          name='remove'
          onClick={ () => onRemove(id) } />
      </List.Content>
    )

    return !isRemoved && (
      <List.Item>
        <Grid padded='horizontally'>
          <Grid.Column>
            { removeBtn }
            <Checkbox
              label={ value }
              checked={ isChecked }
              onChange={ () => onToggle(this.props.id) }
            />
          </Grid.Column>
        </Grid>
      </List.Item>
    )
  }
}

Todo.propTypes = {
  id:         PropTypes.number.isRequired,
  value:      PropTypes.string.isRequired,
  isChecked:  PropTypes.bool.isRequired,
  isRemoved:  PropTypes.bool.isRequired,
  onToggle:   PropTypes.func.isRequired,
  onRemove:   PropTypes.func.isRequired
}

export default Todo