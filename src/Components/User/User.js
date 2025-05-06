import React from 'react';
class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count :0,
        }
        console.log(this.props.name+'constructor')
    }
    componentDidMount(){
        console.log(this.props.name+'component Mount')
    }
    render(){
        const {name,location} = this.props;
        console.log(this.props.name+'render')
    return (
        <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={()=>{
                this.setState({count :this.state.count+1})
            }}>Increase</button>
            <h1>name : {name}</h1>
            <p>{location}</p>
        </div>
    )
}
}

export default User;