const pet = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Sashsa'),
    React.createElement('h2', {}, 'Dog'),
    React.createElement('h2', {}, 'Mutt')
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt me!'),
    React.createElement(pet),
    React.createElement(pet),
    React.createElement(pet)
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
