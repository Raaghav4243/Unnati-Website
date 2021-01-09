import React from "react";

class LogInForm extends React.Component {
  constructor() {
    super();
    this.state = {
      resp: {},
      user: {},
    };
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
    console.log(response);
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
    e.preventDefault();
    const data = this.state.resp;
    fetch("/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.setState({ user: data });
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    console.log(localStorage.getItem("user"));
    return (
      <>
        <form
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={this.handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1>LOG IN FORM</h1>

          <label htmlFor="email">
            email:
            <input type="email" id="email" name="email" />
          </label>
          <label htmlFor="password">
            password:
            <input type="password" id="password" name="password" />
          </label>
          <button>log in</button>
        </form>
      </>
    );
  }
}

export default LogInForm;
