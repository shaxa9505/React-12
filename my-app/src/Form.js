import React, { Component } from 'react';

class Form extends Component {

    state = {
        firstName: "",
        email: "",
        message: "",
        select: "",
        subscription: false,
        gender: ""
    }



    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(this.state);
    }

    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert("Sizni ismingiz 5 harfdan kup bulishi kerak")
        }
    }

    validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regEmail = re.test(this.state.email)
        if (!regEmail) {
            alert("email is not valid")
        }
    };

    checkedHandler = (e) => {
        this.setState({ [e.target.name]: e.target.checked })
    }

    componentDidUpdate() {
        console.log(this.state);
    }
    

    render() {
        const { firstName, email, message, select, subscription, gender} = this.state
        // console.log(this.state);
        return (
            <div className="App">
                <h1>Form</h1>
                <input type="text"
                    placeholder="firstname"
                    name="firstName"
                    value={firstName}
                    onChange={this.changeHandler}
                    onBlur={this.validateName}
                /> <br /> <br />
                <input type="text"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={this.changeHandler}
                    onBlur={this.validateEmail}
                /> <br /> <br />
                <textarea name="message" value={message} onChange={this.changeHandler} placeholder="message"></textarea> <br /> <br />
                <select name="select" value={select} onChange={this.changeHandler}>
                    <option disabled></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select> <br /> <br />
                <input type="checkbox" name="subscription" value={subscription} onChange={this.checkedHandler}/> subscription <br /> <br />
                <input type="radio" name="gender" value="male"  onChange={this.changeHandler}/> Male
                <input type="radio" name="gender" value="female"  onChange={this.changeHandler}/> Female
            </div>
        );
    }
}

export default Form;