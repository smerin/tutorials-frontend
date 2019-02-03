import Lesson from "../components/Lesson";

const LessonPage = props => {
  console.log(props);

  const { id } = props.query;
  if (!id) return <p>No lesson found</p>;

  return (
    <div>
      <Lesson id={props.query.id} />
    </div>
  );
};
export default LessonPage;
