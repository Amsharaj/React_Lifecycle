import React, {Component} from "react";
let json ={data: [{name: "Ranjith Kumar", age:33, gender:"Male"},{name: "Raj", age:13, gender:"Male"},{name: "Ranjani", age:24, gender:"Female"}]}

class Person extends Component{
render(){
    return(
        <div>
            <p>{this.props.token}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {json.data.map((person) =>(
                        <tr>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
}

export default Person;