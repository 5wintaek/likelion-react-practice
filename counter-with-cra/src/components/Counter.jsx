import { Component } from "react";



class Counter extends Component{

  static defaultProps ={
    count :1,
    min : 1,
    max : 10,
    step : 1,
  }

  state ={
    count:this.props.count,
  };


  render(){
    const {count} = this.state;


    return(
      <div data-components = "Counter">
        <button type="button"
        onClick={this.handleIncrement} 
        aria-label="카운트1증가">
          +
        </button>

        <output>{count}</output>
        <button type="button" 
        onClick={this.handleDecrement}
        aria-label="카운트1감소">
          -
        </button>

      </div>
    )
  }

  handleIncrement = ()=>{
    this.setState({
      count : this.state.count + this.props.step
    })
  }


  handleDecrement = () => {
    this.setState({
      count : this.state.count - this.props.step
    })
  }
}

export default Counter