import { useState} from "react";

const Faq = () => {
  const faqData = [
    {
      question: "Is there any installment/Loan option provided?",
      answer:"Yes, the aspirants can take the loan from the bank. Bank assistance is available.",
    },
    {
      question: "What if I can't continue the course due to some emergency?",
      answer:"If you have taken the offline course, you can shift it to online.In rare cases, if you cannot attend online, you can continue your course with the next batch when available.",
    },
    {
      question: "How can I register? / What is the admission process?",
      answer:"Call us on 9030924741 or mail us at info@inkprog.com Get shortlisted in the interview and get admission.",
    },
    {
      question: "Do you Offer Placements?",
      answer: "Yes, 100 percent placement assistance is provided.",
    },
    {
      
      question: "Is there any eligibility criteria for internships?",
      answer:"Yes, you have to meet the following eligibility criteria for internships. Minimum 90 percent of attendance Score 75% or more in all the assessments",
    },
    {
      question: "Is this course only for graduates?",
      answer:"NO, this course is available for everyone who wants to learn new skill and grow.",
    },
    {
      question: "Does careerpedia guarantee me a job?",
      answer: "No, We will make you ready from all aspects and land you in your dream job.",
    },
  ];

  const[selected, setSeleted] = useState(null);

  const toggle = (i) => {
   if (selected === i) {
     return setSeleted(null)
   }
   setSeleted(i);
  }

  return (
    <div className="faq">
      <h1>FAQs</h1>

      <div className="accordian">
        {faqData.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h4>{item.question}</h4>
              <img
                src={require("../Assets/downArrow.png")}
                className={selected === i && "reverse"}
                alt=""
              />
            </div>

            <div className={selected === i ? "content show" : "content"}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
