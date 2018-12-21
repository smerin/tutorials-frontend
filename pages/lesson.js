import Lesson from "../components/Lesson";

const LessonPage = ({ query: { id } }) => {
  console.log(id);

  if (!id) return <p>No lesson found</p>;

  return (
    <div>
      <Lesson id={id} />
    </div>
  );
};
export default LessonPage;
