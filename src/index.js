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

    getName(){
        //console.log('NameFormComponent getName() called:'+getObjectStr(this.state.name));
        return this.state.name;
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
        //どうもこの記述が無いとstateが無いと怒られる...
        this.state = {
            //以下のデータは無くてもかまわないぽい...
            /*
            name:{
                lname : '',
                fname : ''
            }
            */
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    

    getName(){
        //console.log('FormROOTComponent getName() called(before setState):'+getObjectStr(this.state.name));
        //一回目はのsetStateでは反映されない！
        //もしかしたら、this.refs.～で直接とって来るのが良いのかもしれない
        this.setState({
            name : this.refs.NameFormComponent.getName()
        });
        //console.log('FormROOTComponent getName() called(after setState):'+getObjectStr(this.state.name));
    }
    
    handleSubmit(event){
        console.log(this.refs.NameFormComponent.getName());
        //console.log('FormROOTComponent handleSubmit() called(before getName())');
        this.getName();
        //console.log('FormROOTComponent handleSubmit() called(after getName()):'+getObjectStr(this.state.name));
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
