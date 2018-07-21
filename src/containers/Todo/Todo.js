import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Divider,
  Header,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import { addItem, toggleItem, removeItem } from '../../actions/';

import InputForm from '../../components/Todo/InputForm';
import ItemList from '../../components/Todo/ItemList';


class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit       = this.handleSubmit.bind(this);
    this.handleFocus        = this.handleFocus.bind(this);
    this.handleRef          = this.handleRef.bind(this);
    this.onItemClickHandler = this.onItemClickHandler.bind(this);
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

  onItemClickHandler(e, id) {
    e.preventDefault();
    const classNames = e.target.className.split(' ');

    if (classNames.includes('remove')) {
      this.props.onItemRemove(id);
    } else {
      this.props.onItemToggle(id);
    }
  }

  componentDidMount(){
    this.handleFocus();
  }

  render() {
    const { items } = this.props;

    return (
      <Container>          
        <Header as='h2' textAlign='center'>Simple Todo List</Header>
        <InputForm
          inputField={ this.handleRef }
          handleSubmit={ this.handleSubmit }
        />
        <Divider hidden />
        <ItemList
          items={ items }
          onItemClick={ this.onItemClickHandler }
        />
      </Container>
    );
  }
}

Todo.propTypes = {
  items:    PropTypes.object.isRequired,
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
  addItem:      value => dispatch(addItem(value)),
  onItemToggle: id => dispatch(toggleItem(id)),
  onItemRemove: id => dispatch(removeItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);