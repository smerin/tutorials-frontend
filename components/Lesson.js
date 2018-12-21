import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const LESSON_QUERY = gql`
  query LESSON_QUERY($id: ID!) {
    lesson(where: { id: $id }) {
      title
      description
      videoUrl
    }
  }
`;

const Lesson = ({ id }) => (
  <Query query={LESSON_QUERY} variables={{ id }}>
    {({ data: { lesson }, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>No lesson found</p>;
      if (!lesson) return <p>No lesson found</p>;

      return (
        <div>
          <h1>{lesson.title}</h1>
          <p>{lesson.description}</p>
          <p>{lesson.videoUrl}</p>
        </div>
      );
    }}
  </Query>
);

Lesson.propTypes = {
  id: PropTypes.string.isRequired
};

export default Lesson;
