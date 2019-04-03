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
    var list=[];
    var i=0;
    while(i<this.props.data.length){
      var data=this.props.data[i];
      list.push(<li><a href='1.HTML'>{data.title}</a></li>)
      i = i+1;
    }
    return (
      <nav>
        <ol>
          {list}
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
  state={
    contents:[
        {id:1, title:'HTML', desc:'HTML is for info'},
        {id:2, title:'CSS', desc:'CSS is for Design'},
        {id:3, title:'JAVASCRIPT', desc:'JAVASCRIPT is for interactive'}
    ]
  }
  render() {
    return (
      <div className="App"> 
        
        <Subject title="React" sub="Hello, React."></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is for info"> </Content>
        <Content title="CSS" desc="CSS is for look"> </Content>
      </div>
    );
  }
}

export default App;
