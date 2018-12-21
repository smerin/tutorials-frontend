import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Input from "../fields/Input";
import Button from "../fields/Button";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {
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
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await signup();
              this.setState({ name: "", email: "", password: "" });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Signup for an account</h2>
              <Input
                id="signupName"
                type="text"
                name="name"
                label="Name"
                value={this.state.name}
                handleChange={this.saveToState}
              />
              <Input
                id="signupEmail"
                type="email"
                name="email"
                label="Email"
                value={this.state.email}
                handleChange={this.saveToState}
              />
              <Input
                id="signupPassword"
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

export default Signup;
