
import User from '../User/User';
import React from 'react';
class About extends React.Component{
    constructor(props){
        super(props);
        console.log('parent constructor');
    }
    componentDidMount(){
        console.log('parent CDM');
    }
    render(){
        console.log( 'parent render')
        return(
            <div>
                About Page
                <User name={"geetha"} location={"telangana"}/>
                <User name={"second"} location={"US"}/>
            </div>
        )
    }
}


export default About;