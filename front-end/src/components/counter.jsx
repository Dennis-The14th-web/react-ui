import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  // constructor(){
  //   super()
  //   this.handleIncreament = this.handleIncreament.bind(this);
  // }
  // styles = {
  //   fontSize: 15,
  //   fontWeight: "bold"
  // };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
  }

  handleIncreament = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <span style={{fontSize:15, fontWeight:"bold"}} 
        className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.handleIncreament({ id: 1 })} className="btn btn-secondary btn-sm">Increment</button>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}

      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count !== 0) ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // return count === 0 ? "Zero" : count;
    if (count === 0){
      return "Zero"
    }else{
      return count;
    }
  }
}

export default Counter;