import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function getObjectStr(obj){
    return JSON.stringify(obj);
}

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
        this.handleBlur=this.handleBlur.bind(this);
    }

    getValue(){
        //console.log('NameFormComponent getName() called:'+getObjectStr(this.state.name));
        return this.state.name;
    }
    
    handleChange(event){
        //console.log(event);
        const name = this.state.name;
        name[event.target.name] = event.target.value;

        //Changeイベント毎に値を設定する必要がある模様
        //でないと、キーを押した物が画面に反映されない
        this.setState({
            name: name
        });
    }

    handleBlur(event){
        console.log("blur:"+getObjectStr(this.state.name));
    }

    render(){
        return (
                <div>
                <label>
                姓:
                <input type='text' name="lname" onChange={this.handleChange} onBlur={this.handleBlur}/>
                </label>
                <label>
                名:
                <input type='text' name="fname" onChange={this.handleChange} onBlur={this.handleBlur}/>
                </label>
                </div>
        );
    }
}

class FormROOT extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    

    getValue(){
        return this.refs.NameFormComponent.getValue();
    }
    
    handleSubmit(event){
        console.log(this.getValue());
        event.preventDefault();
    }
    render(){
        return (
                <form onSubmit={this.handleSubmit}>
                <NameForm ref='NameFormComponent' />
                <input type='submit' value='Submit' />
                </form>
        );
    }
}

ReactDOM.render(
        <FormROOT />,
    document.getElementById('root')
);
