import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import "./App.css";


class App extends Component {
  state = {
    counters: [
        {id: 1, value:0},
        {id: 2, value:0},
        {id: 3, value:0},
        {id: 4, value:0},
        {id: 5, value:0},
        {id: 6, value:0}
    ]
};

constructor() {
  super();
  console.log("Lifecycle Hooks listed below via Virtual DOM:");
  console.log("App - Contructor");
}

componentDidMount() {
  // Ajax call
  console.log("App - Mounted")
}

handleReset = () => {
    // console.log("handleReset clicked");
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters });
}

handleIncrement = counter => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
}

handleDecrement = counter => {
  // console.log(counter);
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = { ...counter };
  counters[index].value--;
  if (counters[index].value < 0){
    return "product";
  }
  this.setState({ counters });
}

handleDelete = counterId => {
    // console.log("Event Handler Called: ", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters })
};
  render() {  
    console.log("App - Rendered");
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className="container">
        < Counters 
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement} 
          onDelete={this.handleDelete}
      />
      </main>
      </React.Fragment>
    );
  }  
}

export default App;


// deleteItem(key){
//     const filteredItems= this.state.items.filter(item =>
//       item.key!==key);
//     this.setState({
//       items: filteredItems
//     })

//   }
//   setUpdate(text,key){
//     console.log("items:"+this.state.items);
//     const items = this.state.items;
//     items.map(item=>{      
//       if(item.key===key){
//         console.log(item.key +"    "+key)
//         item.text= text;
//       }
//     })
//     this.setState({
//       items: items
//     })
