import React from 'react'
import SideNav from '../../components/SideNav/SideNav'
import {hdiv} from './assignment-page.component'
import data from './data'

class AssignmentPage extends React.Component {
    constructor() {
        super()
        this.state = {
            resp: {},
            score: 0,
            sahijawab: [],
            jawab: []
        }
    }

    handleOnChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        // const responses = this.resp.push({name: [e.target.value]})
        //console.log(responses)
        //  this.setState({ selectedOption: e.target.value});
        //console.log(resp)
        const value = e.target.value
        const name = e.target.name
        let response = this.state.resp
        response[name] = value
        console.log(response)
        this.setState({
            resp: response
        }, () => { console.log(this.state) });
    }


    handleClick = (e) => {
        e.preventDefault()
        const questionNumbers = data.assignment.questions.map((number) => number.number)
        let responses = []
        questionNumbers.forEach((questionNumber) => {
            let response = this.state.resp[questionNumber]
            responses.push(response)
        })
        console.log(responses)
        this.setState({jawab: responses})
        const answers = data.assignment.questions.map((answer) => answer.correctAns[0])
        this.setState({sahijawab: answers})
        console.log(answers)
        const compareArray = (a, b) => {
            let marks = 0
            for (let i = 0; i < a.length; i++) {

                if (a[i] == b[i]) {
                    marks = marks + 1
                }
                //console.log(a[i], b[i])
            }
            console.log(marks)
            this.setState({ score: marks})
        }
        compareArray(responses, answers)
        console.log(this.state)
    }


    render() {
        return (
            <>
               
                <hdiv>
                <SideNav />
                <div>
                    Assignment - 1 {data.assignment.assignmentName}
                </div>

                
                <form onChange={(e) => this.handleOnChange(e)}>
                    
                    {
                        
                        data.assignment.questions.map((question) => {
                            
                            //console.log(option)

                            return (
                                <>
                                    <label key={question._id}>{question.statement}<br /></label>
                                    {question.options.map((option, index) => {
                                        //   console.log(option)
                                        return (
                                            <>
                                                <label key={index} htmlFor={question.number}>
                                                    <input
                                                        type='radio' key={question.statement} value={option} id={option} name={question.number} />
                                                    {option}
                                                </label>
                                               
                                                <br />
                                            </>
                                        )
                                    })}
                                </>
                            )

                        })
                    }
                    <button onClick={(e) => this.handleClick(e)}>submit</button>
                </form>
                <div>
                {
                        this.state.score ? <div>your score is: {this.state.score}</div> : null
                }
                </div>

                </hdiv>

            </>

        )

    }
}

export default AssignmentPage;