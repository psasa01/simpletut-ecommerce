import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './styles.scss';
import Button from './../forms/Button';
import { signInWithGoogle, auth } from './../../firebase/utils';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput'
// import Button from './../forms/Button'

const initialState = {
    email: '',
    password: ''
}

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                ...initialState
            });
        } catch (error) {
            const code = error.code;
            const message = error.message;
            console.log(code);
            // console.log(err);
        }
    }

    render() {
        const { email, password } = this.state;

        const configAuthWrapper = {
            headline: 'Login'
        }

        return (
            <AuthWrapper {...configAuthWrapper}>

                <div className="formWrap">
                    <form onSubmit={this.handleSubmit}>

                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Please enter your email"
                            handleChange={this.handleChange}
                        />
                        <FormInput
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Please enter your password"
                            handleChange={this.handleChange}
                        />
                        <Button
                            type="submit"
                        >
                            Login
                                    </Button>
                        <div className="socialSignin">
                            <div className="row">
                                <Button onClick={signInWithGoogle}>
                                    Sign in with Google
                                </Button>
                            </div>
                        </div>

                        <div className="links">
                            <Link to="/recovery">
                                Reset Password
                            </Link>
                        </div>

                    </form>
                </div>
            </AuthWrapper>
        )
    }
}

export default SignIn;