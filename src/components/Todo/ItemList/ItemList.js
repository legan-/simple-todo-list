import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Message,
  Divider,
  List,
} from 'semantic-ui-react';

import StatusBar  from '../StatusBar';
import Item       from '../Item';


class ItemList extends Component {
  render() {
    const { items, onItemClick } = this.props;

    return items.all.length ? (
      <Container>
        <StatusBar 
          all={ items.all.length }
          completed={ items.completed.length }
          removed={ items.removed.length }
        />
        <Divider />
        <List
          verticalAlign='middle'
          size='large'
          selection
          divided
        >
          {
            items.all.map( (item, index) => (
              <Item
                key={ index }
                onClick={ onItemClick }
                { ...item }
              />
            ))
          }
        </List>
      </Container>
    ) : (
      <Message visible>Add some todos</Message>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.shape({
    all:        PropTypes.array.isRequired,
    completed:  PropTypes.array.isRequired,
    removed:    PropTypes.array.isRequired,
  }).isRequired,
  onItemClick: PropTypes.func.isRequired,
}

export default ItemList