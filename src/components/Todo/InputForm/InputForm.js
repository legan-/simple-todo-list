import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Input,
  Grid
} from 'semantic-ui-react';


class InputForm extends Component {
  render() {
    const { handleSubmit, inputField } = this.props;

    return (
      <Grid centered>
        <Grid.Column textAlign='center'>
          <form onSubmit={ handleSubmit }>
            <Input
              ref={ input => inputField(input) }
              label={ <Button primary type='submit'>Add</Button> }
              labelPosition='right'
              type='text'
              placeholder='Type todo'
            />
          </form>
        </Grid.Column>
      </Grid>
    )
  }
}

InputForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inputField:   PropTypes.func.isRequired
}

export default InputForm