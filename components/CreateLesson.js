import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Input, Button } from "./fields";

const CREATE_LESSON_MUTATION = gql`
  mutation CREATE_LESSON_MUTATION(
    $title: String!
    $description: String!
    $videoUrl: String!
  ) {
    createLesson(
      title: $title
      description: $description
      videoUrl: $videoUrl
    ) {
      id
    }
  }
`;

class CreateLesson extends Component {
  state = {
    title: "",
    slug: "",
    description: "",
    videoUrl: ""
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={CREATE_LESSON_MUTATION} variables={this.state}>
        {(createLesson, { error, loading }) => (
          <form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await createLesson();
              this.state = { title: "", description: "", videoUrl: "" };
            }}
          >
            <Input
              type="text"
              id="createLessonTitle"
              name="title"
              label="Title"
              value={this.state.title}
              handleChange={this.saveToState}
            />
            <Input
              type="text"
              id="createLessonSlug"
              name="slug"
              label="Slug"
              value={this.state.slug}
              handleChange={this.saveToState}
            />
            <Input
              type="text"
              id="createLessonDescription"
              name="description"
              label="Description"
              value={this.state.description}
              handleChange={this.saveToState}
            />
            <Input
              type="text"
              id="createLessonVideoUrl"
              name="videoUrl"
              label="Video URL"
              value={this.state.videoUrl}
              handleChange={this.saveToState}
            />
            <Button type="submit" id="createLessonSubmit">
              Add tutorial
            </Button>
          </form>
        )}
      </Mutation>
    );
  }
}

export default CreateLesson;
