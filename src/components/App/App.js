import React, { Component } from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Todo from '../../containers/Todo';


class App extends Component {
  render() {
    return (
      <Grid padded centered doubling columns={ 2 }>
        <Grid.Row>
          <Grid.Column>
            <Todo />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default App;