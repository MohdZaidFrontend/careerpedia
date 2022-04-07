import netflix from '../Assets/NewAssets/netflix.png';
import aws from '../Assets/NewAssets/aws.png';
import LinkedIn from '../Assets/NewAssets/linkedIn.png';
import amazon from '../Assets/NewAssets/amazon.png';
import adobe from '../Assets/NewAssets/adobe.png';




const Brands = () => {
    const data = [
      {
        id: 1,
        classname: "brand",
        img: netflix,
        imgClass: "netflix",
        details:
          "Over the course of the cohort, you will learn from actual industry products and services like Netflix, their challenges, and how they overcame hurdles. This approach will enhance your profile holistically by building you on industry experience. ",
      },
      {
        id: 2,
        classname: "brand brand-reverse special",
        img: aws,
        imgClass: "aws",
        details:
          "Everyone is aware of the giant Amazon Web Services with enough servers to host the entire world. Whether you are a design student or a Digital marketer, learning about AWS conditions you and puts you on a unique journey that will enhance your career to the global standards. ",
      },
      {
        id: 3,
        classname: "brand",
        img: LinkedIn,
        imgClass: "linkedIn",
        details:
          "Building your LinkedIn profile is essential for a successful career. Here at Inkprog, we can guide you on finding and networking with professionals in your industry to optimize your profile to grow in LinkedIn. ",
      },
      {
        id: 4,
        classname: "brand brand-reverse",
        img: amazon,
        imgClass: "amazon",
        details:
          "The market leader in E-commerce, Amazon, has enough case studies to learn from to gain market insights and work in product and service industries. Both UI/UX designers and Digital Marketers have a great deal to learn from this giant. ",
      },

      {
        id: 5,
        classname: "brand",
        img: adobe,
        imgClass: "adobe",
        details:
          "Get Adobe ready. Adobe continues to shape the global design perspective. Here at Careerpedia, you will learn some of the products pertaining to the course selected.",
      },
    ];
  return (
   <section className="brands">
       {
           data.map((brand)=>{
               const { id, classname, img, imgClass, details } = brand;
               return (
                 <div className={classname} key={id}>
                   <div className="img">
                     <img src={img} alt="" className={imgClass} />
                   </div>
                   <div className="details">
                     <p>{details}</p>
                   </div>
                 </div>
               );
           })
       }
   </section>
  )
}

export default Brands