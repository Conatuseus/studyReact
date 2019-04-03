import React, { Component } from 'react';

class Subject extends Component{
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
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

class Content extends Component {
  render(){
      return (
          <article>
            <h2>{this.props.title}</h2>
            {this.props.desc}
          </article>
      );
  }

}


class App extends Component {
  render() {
    return (
      <div className="App"> 
        
        <Subject title="React" sub="Hello, React."></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is for info"> </Content>
        <Content title="CSS" desc="CSS is for look"> </Content>
      </div>
    );
  }
}

export default App;
