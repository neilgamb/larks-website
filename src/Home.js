import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Home = () => (
  <div>
    <Paper style={style} zDepth={2} />
    <Paper style={style} zDepth={2} />
    <Paper style={style} zDepth={2} />
    <Paper style={style} zDepth={2} />
    <Paper style={style} zDepth={2} />
  </div>
);

export default Home;
