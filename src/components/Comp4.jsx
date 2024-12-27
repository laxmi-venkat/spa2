import { Component, PureComponent } from "react";

class Comp4 extends PureComponent{
    render(){
        console.log("child");
        return(
            <>
            <h1>{this.props.num}</h1>
            </>)
    }

}
export default Comp4;