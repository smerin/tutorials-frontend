import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Input from "../fields/Input";
import Button from "../fields/Button";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class Signin extends Component {
  state = {
    name: "",
    password: "",
    email: ""
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await signin();
              this.setState({ name: "", email: "", password: "" });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign into your account</h2>

              <Input
                id="signinEmail"
                type="email"
                name="email"
                label="Email"
                value={this.state.email}
                handleChange={this.saveToState}
              />
              <Input
                id="signinPassword"
                type="password"
                name="password"
                label="Password"
                value={this.state.password}
                handleChange={this.saveToState}
              />
              <Button id="signupSubmit" type="submit" isSubmitting={loading}>
                Sign in
              </Button>
              <Error error={error} />
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Signin;
