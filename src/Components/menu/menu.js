import React, {Component} from "react";

class Menu extends Component{

    constructor(props){
        super(props);
        console.log("constructor")
        this.state ={"f_name":"Raja"};

    }
    componentDidMount = ()=>{
        console.log("componentDidMount")

        this.timer = setInterval(()=>{
            console.log("hello all")
            this.setState({"f_name":"HELLO RAJA"})
        },10000)
    }
    componentWillUnmount=()=>{
        console.log("componentWillUnmount")
        clearInterval(this.timer)
    }
    shouldComponentUpdate=(nextProps, nextState)=>{
        
        console.log("shouldComponentUpdate")
        console.log(this.state.f_name, nextState.f_name)
        if (nextState.f_name !== this.state.f_name) {
          return true;
        }
        return false; //this is the missing piece
    
    }
    getSnapshotBeforeUpdate=()=>{
        console.log("getSnapshotBeforeUpdate")
    }
    componentDidCatch=()=>{
        console.log("componentDidCatch")
    }

    componentDidUpdate = () => {
        console.log("componentDidCatch")

    }
    render(){
        console.log("render")

        let html;
        let name="Hello RAj"
        function add(a,b){
            return a+b;
        }
        function sub(a,b){
            return a-b;
        }
        function mul(a,b){
            return a*b;
        }
        function div(a,b){
            return a/b;
        }
        
        // setTimeout(function(){
        //     this.setusername=("Hello ALL")
        // },1000)
        html =(
            <div>
                <p>Java</p>
                <ul>
                   <li>name: {name}</li> 
                   <li>add: {add(10,2)}</li>
                   <li>sub: {sub(10,2)}</li>
                   <li>mul: {mul(10,2)}</li>
                   <li>div: {div(10,2)}</li>
                   <li>constructor name: {this.state.f_name}</li>
                   <li>First NAME: {this.props.first_name}</li>
                   <li>Age : {this.props.age}</li>
                    {this.props?.data?.map((skill)=>
                   <li>Skills : {skill.skill} <br></br>Rating : {skill.rating}
                   </li>
                   )}
                </ul>
            </div>
        
            
        );
        return html;
    }
    
}

export default Menu;