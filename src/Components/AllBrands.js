import React from 'react'

const AllBrands = () => {
  // For Changing Header Image in web and mobile View
  const viewport_width = document.documentElement.clientWidth;
  return (
    <div className="all-brands">
      <h1>Tools Covered</h1>

      <div className="img">
        {viewport_width > "800" ? (
          <img src={require("../Assets/NewAssets/webBrand.png")} alt="" />
        ) : (
          <img src={require("../Assets/NewAssets/mobileBrand.png")} alt="" />
        )}
      </div>
    </div>
  );
}

export default AllBrands