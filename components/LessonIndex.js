import PropTypes from "prop-types";
import Link from "next/link";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const LESSONS_QUERY = gql`
  query LESSONS_QUERY {
    lessons(orderby: createdAt_DESC) {
      id
      title
      description
    }
  }
`;

const Lesson = ({ id }) => (
  <Query query={LESSONS_QUERY}>
    {({ data: { lessons }, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>No lessons found</p>;
      if (!lessons) return <p>No lessons found</p>;

      return (
        <div>
          {lessons.map(lesson => (
            <div>
              <h1>{lesson.title}</h1>
              <p>{lesson.description}</p>
              <Link href={`/lesson?id=${lesson.id}`}>
                <a>View lesson</a>
              </Link>
            </div>
          ))}
        </div>
      );
    }}
  </Query>
);

Lesson.propTypes = {
  id: PropTypes.string.isRequired
};

export default Lesson;
