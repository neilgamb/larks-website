// import React from 'react';
import Paper from 'material-ui/Paper';

import React, { Component } from 'react';

export default class Home extends Component {
  state = {
    shadow: 1,
  };
  onMouseOver = () => this.setState({ shadow: 3 });
  onMouseOut = () => this.setState({ shadow: 1 });
  render() {
    return (
      <div>
        <Paper
          className="paper-block"
          style={style}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          zDepth={this.state.shadow}
        />
      </div>
    );
  }
}

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

// const Home = () => (

// );

// export default Home;
