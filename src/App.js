import React from "react";

class Counter extends React.Component {
  // State in class based React
  constructor(props) {
    super(props);

    this.state = { count: 5 };

    // We must bind 'this' to de event handlers we create !!
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState(curState => {
      return { count: curState.count - 1 };
    });
  }

  handleIncrement() {
    this.setState(curState => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const date = new Date("June 27 2027");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
