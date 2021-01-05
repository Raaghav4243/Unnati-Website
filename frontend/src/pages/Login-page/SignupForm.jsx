import React from 'react'

class SignUpForm extends React.Component {
    render() {
        return (
            <>
                <form>
                    <label htmlFor="Name">
                        Name:
                    <input type='text'
                            id='Name'
                            name='Name' />
                    </label>
                    <label htmlFor='UserName'>
                        UserName:
                    <input type='text'
                            id='UserName'
                            name='UserName' />
                    </label>
                    <label type=''>

                    </label>
                </form>
            </>
        )
    }
}

export default SignUpForm