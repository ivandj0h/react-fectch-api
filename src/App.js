import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div className="App">
        <h3 className="list-group-item list-group-item-action active">Daftar User</h3>
          <ul className="list-group">
            {items.map(item => (
              <li key={item.id} className="list-group-item list-group-item-action">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

}

export default App;
