import React from 'react'

class SignUpForm extends React.Component {
        constructor() {
                super()
                this.state = {
                        
                        resp: {},
                        cafe: '5fa5796e9542c50df4285b04'
                }
        }


        handleOnChange = (e) => {
                //console.log(e.target.value);
                //console.log(e.target.name);
                // const responses = this.resp.push({name: [e.target.value]})
                //console.log(responses)
                //  this.setState({ selectedOption: e.target.value});
                //console.log(resp)
                const value = e.target.value;
                const name = e.target.name;
                let response = this.state.resp;
                response[name] = value;
                //console.log(response);
                this.setState(
                        {
                                resp: response,
                        },
                        () => {
                               console.log(this.state);
                        }
                );
        };

        handleSubmit = (e) => {
                e.preventDefault()
                const data = {...this.state.resp}
                data['cafe'] = this.state.cafe
                console.log('handle submit called', data)
                
                fetch('/signup', {
                        method: 'POST', // or 'PUT'
                        headers: {
                                'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                })
                        .then(response => response.json())
                        .then(data => {
                                console.log('Success:', data);
                        })
                        .catch((error) => {
                                console.error('Error:', error);
                        })
};

        render() {
                return (
                        <>
                                <form onChange={(e) => this.handleOnChange(e)} onSubmit={this.handleSubmit}
                                        style={{
                                                display: 'flex',
                                                flexDirection: 'column'
                                        }}>
                                        <h1>SIGN UP FORM</h1>
                                        <label htmlFor="firstName">
                                                firstName:
               <input type='text'
                                                        id='firstName'
                                                        name='firstName' />
                                        </label>
                                        <label htmlFor='lastName'>
                                                lastName:
               <input type='text'
                                                        id='lastName'
                                                        name='lastName' />
                                        </label>
                                        <label htmlFor='phoneNumber'>
                                                phoneNumber:
               <input type='text'
                                                        id='phoneNumber'
                                                        name='phoneNumber' />
                                        </label>
                                        <label htmlFor='username'>
                                                username:
               <input type='text'
                                                        id='username'
                                                        name='username' />
                                        </label>
                                        <label htmlFor='email'>
                                                email:
               <input type='email'
                                                        id='email'
                                                        name='email' />
                                        </label>
                                        <label htmlFor='password'>
                                                password:
               <input type='password'
                                                        id='password'
                                                        name='password' />
                                        </label>
                                        <div>
                                                role:
                   <label htmlFor='student'>
                                                        <input type='radio' id='student' name='role' value='STUDENT' />student
                   </label>
                                                <label htmlFor='teacher'>
                                                        <input type='radio' id='teacher' name='role' value='TEACHER' />teacher
                   </label>
                                        </div>
                                        <button>sign up</button>
                                </form>
                                
                        </>
                )
        }
}

export default SignUpForm