import React, { Component } from 'react';
import data from './data';
import Timer from 'react-compound-timer';
import { TestPageContainer } from './test-page.styles';

class TestPage extends Component {
  constructor() {
    super();
    this.state = {
      resp: {},
      time: data.test.duration * 60 * 1000,
    };
  }

  componentDidMount() {}

  handleOnChange = (e) => {
    const { name, value, id } = e.target;

    let response = this.state.resp;

    const questionType = data.test.questions[id - 1].type;

    if (questionType === 'MULTICORRECT') {
      if (response[id] == undefined) {
        response[id] = [value];
      } else if (response[id].includes(value)) {
        let temp = response[id].filter((item) => {
          return item !== value;
        });
        response[id] = temp;
      } else {
        response[id].push(value);
      }
    } else {
      response[id] = [value];
    }

    console.log('resp', response);
    this.setState(
      {
        resp: response,
      },
      () => {
        console.log('state', this.state);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.state.resp;
    let values = Object.values(data);
    console.log(values);
  };

  render() {
    return (
      <>
        <TestPageContainer>
          <Timer initialTime={this.state.time} direction='backward'>
            {() => (
              <React.Fragment>
                <Timer.Hours />:
                <Timer.Minutes />:
                <Timer.Seconds />
              </React.Fragment>
            )}
          </Timer>
          <div>
            <div className='testame'>Test - 1 {data.test.testName}</div>

            <form
              type='submit'
              onChange={(e) => this.handleOnChange(e)}
              onSubmit={this.handleSubmit}
            >
              <div>
                {data.test.questions.map((question, number) => {
                  return (
                    <>
                      <div key={number}>{question.statement}</div>
                      {question.type === 'MULTICORRECT' ? (
                        <>
                          {question.options.map((option, index) => {
                            return (
                              <label key={index} htmlFor={option}>
                                <input
                                  type='checkbox'
                                  key={option}
                                  value={option}
                                  id={question.number}
                                  name={option}
                                />
                                {option} <br />
                              </label>
                            );
                          })}
                        </>
                      ) : null}
                      {question.type === 'SINGLECORRECT' ? (
                        <>
                          {question.options.map((option, index) => {
                            return (
                              <label key={index} htmlFor={option}>
                                <input
                                  type='radio'
                                  key={option}
                                  value={option}
                                  id={question.number}
                                  name={question.number}
                                />
                                {option} <br />
                              </label>
                            );
                          })}
                        </>
                      ) : null}
                      {question.type === 'TYPED' ? (
                        <>
                          <label htmlFor={number}>
                            <input
                              type='text'
                              id={question.number}
                              name={question.number}
                            />
                          </label>
                        </>
                      ) : null}
                    </>
                  );
                })}
              </div>
              <button>submit</button>
            </form>
          </div>
        </TestPageContainer>
      </>
    );
  }
}

export default TestPage;
