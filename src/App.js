import React, { Component } from 'react';

class Subject extends Component{
  render(){
    return (
      <header>
        <h1>WEB</h1>
        World Wide Web
      </header>
    );
  }
}

class TOC extends Component{
  render(){
    return (
      <nav>
        <ol>
          <li><a href="1.HTML"> HTML</a></li>
          <li><a href="2.CSS"> CSS </a></li>
          <li><a href="3.JAVASCRIPT"> JAVASCRIPT</a></li>
        </ol>
      </nav>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App"> 
        
        <Subject></Subject>
        <TOC></TOC>
      </div>
    );
  }
}

export default App;
