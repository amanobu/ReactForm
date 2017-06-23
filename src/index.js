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
        //イベント発行もと(event.target.name)の値に値(event.target.value)を入れて、更新後のnameオブジェクトをつくる
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
                名前情報
                <label>
                姓:
                <input type='text' name="lname" onChange={this.handleChange} onBlur={this.handleBlur} required />
                </label>
                <label>
                名:
                <input type='text' name="fname" onChange={this.handleChange} onBlur={this.handleBlur} required />
                </label>
                </div>
        );
    }
}

class AddressForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            address:{
                zip1:'',//郵便番号1
                zip2:'',//郵便番号2
                add1:'',//都道府県
                add2:'',//市区郡名
                add3:'',//町名
                add4:'',//丁目・番地
                add5:'',//建物名
                add6:''//部屋番号
            }
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
    }
    handleChange(event){
        const address = this.state.address;
        address[event.target.name] = event.target.value;

        this.setState({
            address: address
        });
    }

    handleBlur(event){
        console.log("blur:"+getObjectStr(this.state.address));
    }

    render(){
        return (
                <div>
                住所情報
                <div>
                郵便番号
                <input type='text' name="zip1" onChange={this.handleChange} onBlur={this.handleBlur} required />
                -
                <input type='text' name="zip2" onChange={this.handleChange} onBlur={this.handleBlur} required />
                </div>
                <div>
                都道府県：<input type='text' name="add1" onChange={this.handleChange} onBlur={this.handleBlur} required />
                市区郡名：<input type='text' name="add2" onChange={this.handleChange} onBlur={this.handleBlur} required />
                町名：<input type='text' name="add3" onChange={this.handleChange} onBlur={this.handleBlur} required />
                丁目・番地：<input type='text' name="add4" onChange={this.handleChange} onBlur={this.handleBlur}/>
                建物名：<input type='text' name="add5" onChange={this.handleChange} onBlur={this.handleBlur}/>
                部屋番号：<input type='text' name="add6" onChange={this.handleChange} onBlur={this.handleBlur}/>
                </div>
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
                <AddressForm ref='AddressFormComponent' />
                <input type='submit' value='Submit' />
                </form>
        );
    }
}

ReactDOM.render(
        <FormROOT />,
    document.getElementById('root')
);
