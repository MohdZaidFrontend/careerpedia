import Testimonial from "./Testimonial";
import testimonialImg1 from "../../Assets/testimonial1.png";
import testimonialImg2 from "../../Assets/testimonial2.png";
import testimonialImg3 from "../../Assets/testimonial3.png";

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <h1 className="testimonial-heading">Testimonials</h1>
      <div className="testimonial-section">
        <Testimonial
          title={"Veeraiah"}
          details1={
            "Course materials were good, the mentoring approach was pleasing, and working with other students had been exemplary. "
          }
          details2={
            "The mentor did an outstanding job in communicating and making it more simple. Careerpedia is very useful and  I think it’s a solid platform for course learning with a student-friendly ambiance. I learned a lot."
          }
          imageUrl={testimonialImg1}
        />
        <Testimonial
          title={"Riyaz"}
          details1={
            "The mentor is very helpful in getting me through complicated issues and keeping in touch throughout the course. "
          }
          details2={
            "Excellent content and assignments build your knowledge and it was a tremendous learning experience. It produces real learning as I have learned key principles of the course that I can implement immediately."
          }
          imageUrl={testimonialImg2}
        />
        <Testimonial
          title={"Kalyan Azmeera"}
          details1={
            "I feel that throughout the course I gained a lot of knowledge and practical strategies that will be beneficial to me. "
          }
          details2={
            "One of the most pleasing things about Careerpedia is the flexibility for students to express their doubts and get clarified. It is very well organized as an institution, and the courses are well focused and practicle in terms of approach."
          }
          imageUrl={testimonialImg3}
        />
      </div>
    </div>
  );
};

export default Testimonials;
