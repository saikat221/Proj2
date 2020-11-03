import React from 'react';


class Child extends React.Component{
   
    
    render() {
      return  (<div>
          
          <button onClick={(e) => this.props.onClick('increment')}>+</button>
          <button onClick={(e) => this.props.onClick('decrement')}>-</button>
          
      </div>
      )
    }
    
  }
  export default Child;