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
      list.push(
      <li key={data.id}>
        <a href={data.id+'.HTML'} onClick={function(id, ev){
          ev.preventDefault();
          this.props.onSelect(id);
        }.bind(this, data.id)}>
          {data.title}</a>
      </li>
      );
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
            <h2>{this.props.data.title}</h2>
            {this.props.data.desc}
          </article>
      );
  }

}


class App extends Component {
  state={
    mode:'read',
    selected_content_id:2,
    contents:[
        {id:1, title:'HTML', desc:'HTML is for info'},
        {id:2, title:'CSS', desc:'CSS is for Design'},
        {id:3, title:'JAVASCRIPT', desc:'JAVASCRIPT is for interactive'}
    ]
  }
  getSelectedContent(){
      var i=0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if( data.id == this.state.selected_content_id){
            return data;
        }
        i=i+1;
      }
  }
  getControlComponent(){
    return [
        <a key="1" href="/create">create</a>,
        <a key="2" href="/update">update</a>,
        <input key="3" type="button" href="/delete" onClick={function(){
            var newContents=this.state.contents.filter(function(el){
              if(el.id !== this.state.selected_content_id){
                return el;
              }
            }.bind(this));
            this.setState({
              contents:newContents,
              mode:'welcome'
            })
        }.bind(this)} value="delete"></input>,
    ];
  }

  getContentComponent() {
    if(this.state.mode === 'read'){
      return <Content data={this.getSelectedContent()}> </Content>
    }
    else if(this.state.mode === 'welcome'){
      return <Content data={{
        title:'Welcome',
        desc:'Hello, React!!!'
      }}> </Content>
    }
  }
  render() {
    return (
      <div className="App"> 
        <Subject title="React" sub="Hello, React."></Subject>
        <TOC onSelect={function(id){
          this.setState({
            selected_content_id:id,
            mode:'read'
          })
        }.bind(this)} data={this.state.contents}></TOC>
        {this.getControlComponent()}
        {this.getContentComponent()}
      </div>
    );
  }
}

export default App;
