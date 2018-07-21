import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
} from 'semantic-ui-react';


class StatusBar extends Component {
  render() {
    const { all, completed, removed } = this.props;

    return (
      <Grid padded centered columns={ 3 }>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            Total: { all }
          </Grid.Column>
          <Grid.Column textAlign='center'>
            Completed: { completed }
          </Grid.Column>
          <Grid.Column textAlign='center'>
            Removed: { removed }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

StatusBar.propTypes = {
  all:        PropTypes.number.isRequired,
  completed:  PropTypes.number.isRequired,
  removed:    PropTypes.number.isRequired,
}

export default StatusBar