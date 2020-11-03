import React from 'react';
import Child from './Child';



class Parent extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
       Number: 0
     }
     this.updateCounter = this.updateCounter.bind(this);
     
   }
   updateCounter(type){
     var count = this.state.Number;
     type==='increment'? count++: count--;
     this.setState({Number: count});
   }
   
   render() {
     return  (<div>Number
          {this.state.Number}
         <Child onClick={this.updateCounter}/>
     </div>
     )
   }
 }
 export default Parent;