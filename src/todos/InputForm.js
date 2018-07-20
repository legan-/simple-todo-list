import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Input
} from 'semantic-ui-react';


class InputForm extends Component {
  render() {
    const { handleSubmit, inputField } = this.props;

    return (
      <form onSubmit={ handleSubmit }>
        <Input
          ref={ input => inputField(input) }
          label={ <Button primary type='submit'>Add</Button> }
          labelPosition='right'
          type='text'
          placeholder='Type todo'
        />
      </form>
    )
  }
}

InputForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inputField:   PropTypes.func.isRequired
}

export default InputForm