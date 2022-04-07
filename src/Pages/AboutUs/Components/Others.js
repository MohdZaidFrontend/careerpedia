import img1 from "../../../Assets/NewAssets/othersImg1.svg";
import img2 from "../../../Assets/NewAssets/approachImg1.svg";
import img3 from "../../../Assets/NewAssets/approachImg2.svg";

const Others = () => {

    const data = [
      {
        id: 1,
        classname: "section",
        heading: "Where",
        span: "others fail?",
        details:
          "Undoubtedly, we are not short of Ed-tech companies in India, but on a more profound assessment, they too fail to train students with industry-ready skills. One of the reasons in our research points to a larger cohort or, in other words, a batch size of 30 to a staggering 120 students in one class. This factor calls to how they are different from our mainstream colleges and unproductive coaching centers.",
        img:  img1 ,
      },
      {
        id: 2,
        classname: "section section-reverse",
        heading: "Our",
        span: "Solution",
        details:
          "That is why we positioned Careerpedia as far away from this environment, both physically and ideologically. Our intent is clear; we want to take in a small group of highly motivated individuals from any background and prepare them holistically. Our approach is through practical training students through time-tested industry-ready skills, optimizing their LinkedIn profile and resume, providing strategies to ace interviews, and opening avenues to network within and outside their industry.",
        img:  img2 ,
      },
      {
        id: 3,
        classname: "section",
        heading: "",
        span: "",
        details:
          "Our selective batch consists of no more than 20 people, which is precise enough to have collaborative teamwork and seek extensive support from the mentors. Further, putting their learned skills to the test, trainees can work on industry projects under the supervision of team leaders and mentors, which masters their abilities and provides them a unique advantage to ease into the silicon world.",
        img:  img3 ,
      },
    ];
  return (
   <section className="others">
      {
          data.map((item)=>{
              const{id,classname,heading,span,details,img} = item;
              return (
                <div className={classname} key={id}>
                  <div className="data">
                    <h2>
                      {heading} <span> {span}</span>
                    </h2>
                    <p>{details}</p>
                  </div>
                  <img src={img} alt="" />
                </div>
              );
          })
      }
   </section>
  )
}

export default Others