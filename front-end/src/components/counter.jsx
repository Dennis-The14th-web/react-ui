import React, { Component } from "react";

class Counter extends Component {
  // Uncomment this to view componentDidMount cycle
  // componentDidUpdate(prevProps, prevState){
  //   console.log("prevProps: ", prevProps);
  //   console.log("prevState: ", prevState);
  //   if (prevProps.counter.value !== this.props.counter.value) {
  //     // Ajax call and get new data from the server
  //   }
  // };

  // Uncomment this to view componentWillUnmount cycle
  // componentWillUnmount() {
  //   console.log("Counter - Unmount");
  // }
  // state = {
  //   value: this.props.counter.value,
  //   tags: []
  // };

  // we no longer need to get the props from the constructor
  // since we are now using an arrow function method which enables the props by default
  // constructor(){
  //   super()
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // styles = {
  //   fontSize: 15,
  //   fontWeight: "bold"
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  // return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
  // }
  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span style={{fontSize:15, fontWeight:"bold"}} 
        className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} 
        className="btn btn-secondary btn-sm m-2"
        >Add Product
        </button> 
        <button onClick={() => this.props.onDecrement(this.props.counter)} 
        className="btn btn-secondary btn-sm m-2"
        >Remove Product
        </button> 
        <button onClick={() => this.props.onDelete(this.props.counter.id)} 
        className="btn btn-danger btn-sm m-2"
        >Delete
        </button>
        {/* <br />
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}

      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value !== 0) ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Product" : value;
    // if (value === 0){
    //   return "Zero"
    // }else{
    //   return value;
    // }
  }
}

export default Counter;