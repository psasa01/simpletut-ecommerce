import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { signInUser, signInWithGoogle, resetAllAuthforms } from './../../redux/User/user.actions'

import './styles.scss';
import Button from './../forms/Button';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput'
// import Button from './../forms/Button'

const mapState = ({ user }) => ({
        signInSuccess: user.signInSuccess
});

const SignIn = props => {
    const { signInSuccess } = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (signInSuccess) {
                resetForm();
                dispatch(resetAllAuthforms());
                props.history.push('/');
    }
    }, [signInSuccess])

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signInUser({ email, password }));
    }

    const handleGoogleSignin = () => {
        dispatch(signInWithGoogle());
    }
    
          const configAuthWrapper = {
            headline: 'Login'
        }

        return (
            <AuthWrapper {...configAuthWrapper}>

                <div className="formWrap">
                    <form onSubmit={handleSubmit}>

                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Please enter your email"
                            handleChange={e => setEmail(e.target.value)}
                        />
                        <FormInput
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Please enter your password"
                            handleChange={e => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                        >
                            Login
                                    </Button>
                        <div className="socialSignin">
                            <div className="row">
                                <Button onClick={ handleGoogleSignin }>
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

export default withRouter(SignIn);