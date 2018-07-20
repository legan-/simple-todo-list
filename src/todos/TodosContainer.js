import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Message,
  Divider,
  Header,
  List,
  Grid,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import { addItem, toggleItem, removeItem } from './../actions/';

import InputForm from './InputForm';
import StatusBar from './StatusBar';
import Todo from './Todo';


class TodosContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus  = this.handleFocus.bind(this);
    this.handleRef    = this.handleRef.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = e.target.getElementsByTagName('input')[0]
    const value = input.value;
    if (value.length) this.props.addItem(value);
    this.handleFocus();
    input.value = '';
  }

  handleFocus() {
    this.inputField.focus()
  }

  handleRef(e) {
    this.inputField = e
  }

  componentDidMount(){
    this.handleFocus();
  }

  render() {
    const { items, onCheckboxToggle, onCheckboxRemove } = this.props;

    const listNode = items.all.length ? (
      <Container>
        <StatusBar 
          all={ items.all.length }
          completed={ items.completed.length }
          removed={ items.removed.length }
        />
        <Divider />
        <List
          divided
          relaxed
          size='large'
        >
          {
            items.all.map( (item, index) => (
              <Todo
                key={ index }
                onToggle={ onCheckboxToggle }
                onRemove={ onCheckboxRemove }
                { ...item }
              />
            ))
          }
        </List>
      </Container>
    ) : (
      <Message visible>Add some todos</Message>
    );

    return (
      <Grid padded centered columns={ 3 }>
        <Grid.Row>
          <Grid.Column>
            <Container>          
              <Header as='h2' textAlign='center'>Simple Todo List</Header>
              <Grid centered>
                <Grid.Column textAlign='center'>
                  <InputForm
                    inputField={ this.handleRef }
                    handleSubmit={ this.handleSubmit }
                  />
                </Grid.Column>
              </Grid>
              <Divider hidden />
              { listNode }
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

TodosContainer.propTypes = {
  items:    PropTypes.shape({
    all:        PropTypes.array.isRequired,
    completed:  PropTypes.array.isRequired,
    removed:    PropTypes.array.isRequired,
  }).isRequired,
  addItem:  PropTypes.func.isRequired
}

const mapStateToProps = state => {
  const items = Object.values(state.items);
  return ({
    items: {
      all:        items,
      completed:  items.filter( item => item.isChecked ),
      removed:    items.filter( item => item.isRemoved ),
    }
  })
}

const mapDispatchToProps = dispatch => ({
  addItem:          value => dispatch(addItem(value)),
  onCheckboxToggle: id => dispatch(toggleItem(id)),
  onCheckboxRemove: id => dispatch(removeItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);