import React from 'react';
import { Grid } from 'semantic-ui-react';

import PersonCard from './PersonCard.jsx';

export default class People extends React.Component {
  render() {
    return (
      <div>
        <h1>People</h1>
        <Grid relaxed columns={4}>
          <Grid.Column>
            <PersonCard />
          </Grid.Column>
          <Grid.Column>
            <PersonCard />
          </Grid.Column>
          <Grid.Column>
            <PersonCard />
          </Grid.Column>
          <Grid.Column>
            <PersonCard />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
