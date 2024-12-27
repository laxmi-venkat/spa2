import { Component } from "react";
import Comp4 from"./Comp4"

class Comp3 extends Component{
    constructor(){
        super();
        this.state = {
            num: "100",
    }}
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                num:100,
            })
        },3000)
    }
    render(){
        return (
         
            <>
            <h1>Component 3</h1>
            </>
      ) }

}
export default  Comp3;