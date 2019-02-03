import Link from "next/link";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const LESSONS_QUERY = gql`
  query LESSONS_QUERY {
    lessons(orderby: createdAt_DESC) {
      id
      slug
      title
      description
    }
  }
`;

const Lesson = () => (
  <Query query={LESSONS_QUERY}>
    {({ data: { lessons }, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>No lessons found</p>;
      if (!lessons) return <p>No lessons found</p>;

      return (
        <div>
          {lessons.map(lesson => (
            <div key={lesson.id}>
              <h1>{lesson.title}</h1>
              <p>{lesson.description}</p>
              <Link
                as={`/lesson/${lesson.slug}`}
                href={`/lesson?id=${lesson.id}`}
              >
                <a>View lesson</a>
              </Link>
            </div>
          ))}
        </div>
      );
    }}
  </Query>
);

export default Lesson;
