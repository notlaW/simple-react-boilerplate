import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './pet';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Sasha" animal="dog" breed="mutt" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
