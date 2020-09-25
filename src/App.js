import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shoes: [{brand_name: "Jordan", size: 1, manufacturer: '', color: '', material: '', shoe_type: '', fasten_type: ''}],
    };
  }

  componentDidMount(){
    fetch("http://localhost:8000/api/shoe")
    .then((res) => res.json())
    .then((data) => this.setState({shoes: data}));
  }

  render(){
    return (
      <div className="shoe">
      <h1>Shoes API</h1>
      <ul>
        {this.state.shoes.map((p) => (
          <pre><li>{p.brand_name}, {p.size}, {p.manufacturer}, {p.color}, {p.material}, {p.shoe_type}, {p.fasten_type}
          </li></pre>

        ))}
      </ul>
      </div>
    );

  }
}

export default App;
