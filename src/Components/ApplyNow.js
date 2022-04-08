import { useState } from "react";

import Contact from "../Pages/Contact/Contact";




const ApplyNow = () => {
  // For opening contact-us modal form
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  
  return (
    <>
      <div className="apply-now" onClick={handleModal}>
        <p>Apply Now</p>
      </div>

      {modal && <Contact event={handleModal} />}
    </>
  );
}

export default ApplyNow