import React from "react";
import './sign-up.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument, createUser } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword){
            alert("passwords don't match")
            return
        }

        try {
            const { user } = await createUser(auth, email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (err) {
            console.error(err)
        }
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
            
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text' 
                        name='displayName' 
                        value={this.state.displayName} 
                        required 
                        handleChange={this.handleChange}
                        label='Display Name'
                    />
                    <FormInput 
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        required 
                        handleChange={this.handleChange}
                        label='Email'
                    />
                    <FormInput 
                        type='password' 
                        name='password' 
                        value={this.state.password} 
                        required 
                        handleChange={this.handleChange}
                        label='Password'
                    />
                    <FormInput 
                        type='password' 
                        name='confirmPassword' 
                        value={this.state.confirmPassword} 
                        required 
                        handleChange={this.handleChange}
                        label='Confirm Password'
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp