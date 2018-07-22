import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Divider,
  Header,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import { addTodoItem, toggleTodoItem, removeTodoItem, setActiveFilter } from '../../actions/';

import InputForm  from '../../components/Todo/InputForm';
import FilterBar  from '../../components/Todo/FilterBar';
import ItemList   from '../../components/Todo/ItemList';


class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus  = this.handleFocus.bind(this);
    this.handleRef    = this.handleRef.bind(this);
    this.onTodoItemClickHandler = this.onTodoItemClickHandler.bind(this);
    this.onMenuItemClickHandler = this.onMenuItemClickHandler.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = e.target.getElementsByTagName('input')[0]
    const value = input.value;
    if (value.length) this.props.addTodoItem(value);
    this.handleFocus();
    input.value = '';
  }

  handleFocus() {
    this.inputField.focus()
  }

  handleRef(e) {
    this.inputField = e
  }

  onMenuItemClickHandler(e, { name }) {
    this.props.onMenuItemClick(name);
  }

  onTodoItemClickHandler(e, id) {
    e.preventDefault();
    const classNames = e.target.className.split(' ');

    if (classNames.includes('remove')) {
      this.props.onTodoItemRemove(id);
    } else {
      this.props.onTodoItemToggle(id);
    }
  }

  componentDidMount(){
    this.handleFocus();
  }

  render() {
    const { items, activeMenuItem } = this.props;

    return (
      <Container>          
        <Header as='h2' textAlign='center'>Simple Todo List</Header>
        <InputForm
          inputField={ this.handleRef }
          handleSubmit={ this.handleSubmit }
        />
        <Divider hidden />
        <FilterBar 
          items={ items }
          onClick={ this.onMenuItemClickHandler }
          active={ activeMenuItem }
        />
        <Divider hidden />
        <ItemList
          items={ items }
          onTodoItemClick={ this.onTodoItemClickHandler }
          activeMenuItem={ activeMenuItem }
        />
      </Container>
    );
  }
}

Todo.propTypes = {
  items:            PropTypes.object.isRequired,
  activeMenuItem:   PropTypes.string.isRequired,
  addTodoItem:      PropTypes.func.isRequired,
  onTodoItemToggle: PropTypes.func.isRequired,
  onTodoItemRemove: PropTypes.func.isRequired,
  onMenuItemClick:  PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const items = Object.values(state.items);
  return ({
    items: {
      all:        items.filter( item => !item.isRemoved ),
      completed:  items.filter( item => item.isCompleted && !item.isRemoved ),
      removed:    items.filter( item => item.isRemoved ),
    },
    activeMenuItem: state.filter.active,
  })
}

const mapDispatchToProps = dispatch => ({
  addTodoItem:      value =>  dispatch(addTodoItem(value)),
  onTodoItemToggle: id =>     dispatch(toggleTodoItem(id)),
  onTodoItemRemove: id =>     dispatch(removeTodoItem(id)),
  onMenuItemClick:  name =>   dispatch(setActiveFilter(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);