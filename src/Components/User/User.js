import React from 'react';
class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count :0,
            userData : {
                name :'Dummy',location:'US',avatar_url:'dumy'
            }
        }
        console.log(this.props.name+'constructor')
    }
    async componentDidMount(){
        console.log(this.props.name+'component Mount');
        const data = await fetch('https://api.github.com/users/akshay');
        const json = await data.json();
        this.setState({
            userData :json
        })
    }
    render(){
        const {name,location,avatar_url} = this.state.userData;
        console.log(this.props.name+'render')
    return (
        <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={()=>{
                this.setState({count :this.state.count+1})
            }}>Increase</button>
            <img src={avatar_url} alt="avatar"/>
            <h1>name : {name}</h1>
            <p>{location}</p>
        </div>
    )
}
}

export default User;