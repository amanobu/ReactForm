import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NameForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:{
                lname:'',
                fname:''
            }
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
    }
    
    handleChange(event){
        //console.log(event);
        const name = this.state.name;
        switch(event.target.name){
        case 'lname':
            name.lname = event.target.value;
            break;
        case 'fname':
            name.fname = event.target.value;
            break;
        default:
            break;
        }
        
        this.setState({
            name: name
        });
    }
    
    handleSubmit(event){
        alert('A name was submitted:' + this.state.name.lname + this.state.name.fname);
        event.preventDefault();
    }

    handleBlur(event){
        console.log("blur:"+this.state.name.lname+this.state.name.fname);
    }

    render(){
        return (
                <form onSubmit={this.handleSubmit}>
                <label>
                姓:
                <input type='text' name="lname" onChange={this.handleChange} onBlur={this.handleBlur}/>
                </label>
                <label>
                名:
                <input type='text' name="fname" onChange={this.handleChange} onBlur={this.handleBlur}/>
                </label>
                <input type='submit' value='Submit' />
                </form>
        );
    }
}



ReactDOM.render(
        <NameForm />,
    document.getElementById('root')
);
