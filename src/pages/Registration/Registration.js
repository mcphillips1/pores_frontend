import React, { Component } from 'react';
import Axios from '../../Communication/Axios'

class Registation extends Component {

    state = {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        contactNumber: "",
        username: "",
        password: "",
        question: new Map(),
        counter: 0,
        readToSubmit: false,
        showBackButton: false
    }

    componentDidMount() {
        let que = new Map()


        //add object as value to text more infomation in to form
        que.set("firstName", "What is your name")
        que.set("lastName", "What is your last name")
        que.set("dateOfBirth", "What is your date of birth")
        que.set("contactNumber", "Can we get your contact number")
        que.set("username", "What should we call you")
        que.set("password", "Please set a password")
        this.setState({ question: que })


    }

    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = () => {
        let entry = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dateOfBirth: this.state.dateOfBirth,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        Axios.post('/register', entry)
        .then(res => {
            console.log(res.status)
            // go to profile set up
        })

    }

    askNextQuestion = () => {
        let length = this.state.question.size
        let count = this.state.counter

        if (count !== length) {
            if (count < length) {
                count++
            }
            if (count !== 0) {
                this.setState(prev => ({ showBackButton: true }))
            }

            if (count === length) {
                this.setState({ readToSubmit: true })
            }

            this.setState({ counter: count })
        }

    }

    goBackToPreviousQuestion = () => {
        let count = this.state.counter

        if (count !== 0) {
            count--
        }
        this.setState({ counter: count })
        if (count === 0) {
            this.setState({ showBackButton: false })
        }

        if (count !== this.state.question.size) {
            this.setState({ readToSubmit: false })
        }
    }



    render() {
        let name = Object.keys(this.state)[this.state.counter]
        console.log(name)
        return (
            <div>Registration
                <form>
                    <label>
                        {this.state.question.has(name) ? <h4>{this.state.question.get(name)} </h4> : <h4>Ready To Submit</h4>}

                        <input name={name} value={this.state[name]} onChange={(e) => { this.handleChange(e) }} />

                    </label>
                </form>

                {this.state.showBackButton ? <button onClick={this.goBackToPreviousQuestion}>Back</button> : null}
                {this.state.readToSubmit ? <button onClick={this.handleSubmit}>Register</button> : <button onClick={this.askNextQuestion}>Next</button>}

            </div>
        )
    }

}

export default Registation;