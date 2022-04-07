import subhan from "../Assets/subhan.png";
import jyoshna from "../Assets/jyoshna.png";
import girish from "../Assets/girish.png";
import kalyan from "../Assets/kalyan.png";
import shareef from "../Assets/shareef.png";
import zaid from "../Assets/zaid.png";
import rahul from "../Assets/rahul.png";
import tarun from "../Assets/tarun.png";

const Team = () => {
  const data = [
    {
      id: 1,
      img: rahul,
      name: "Rahul Reddy",
      designation: "Co Founder",
    },
    {
      id: 2,
      img: jyoshna,
      name: "Jyoshna",
      designation: "Co Founder",
    },
    {
      id: 3,
      img: tarun,
      name: "Tarun",
      designation: "Product Head",
    },
    {
      id: 4,
      img: subhan,
      name: "Subhan",
      designation: "Counselling Manager",
    },
    {
      id: 5,
      img: zaid,
      name: "Zaid",
      designation: "Senior React JS Developer",
    },
    {
      id: 6,
      img: shareef,
      name: "Shariff",
      designation: "Senior Digital Marketing Manager",
    },
    {
      id: 7,
      img: kalyan,
      name: "Kalyan",
      designation: "Digital Marketer",
    },
    {
      id: 8,
      img: girish,
      name: "Girish",
      designation: "Student Co-ordinator",
    },
  ];

  return (
    <section className="team" id="team">
      <h1>Our Team & Alumni</h1>

      <div className="cards">
        {data.map((item) => {
          const { id, img, name, designation } = item;
          return (
            <div className="card" key={id}>
              <div className="img">
                <img src={img} alt="" />
              </div>
              <h3>{name}</h3>
              <p>{designation}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
