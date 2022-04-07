
const CoursePlan = (props) => {
  const {duration} = props;
  return (
    <div className="course-plan">
      <h1>Course Plan</h1>

      <div className="sections">
        <h3>Coaching</h3>
        <p>{`${duration} Months class room training`}</p>
      </div>
      <div className="sections">
        <h3>Internship</h3>
        <p>6 months Internship</p>
      </div>
      <div className="sections">
        <h3>Projects</h3>
        <p>Personal Projects</p>
        <p>Group Projects</p>
        <p>Capstone Projects</p>
      </div>
    </div>
  );
}

export default CoursePlan