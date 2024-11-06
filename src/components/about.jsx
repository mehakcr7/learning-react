import React from "react";

function about() {
  return (
   <div className="flex justify-center h-screen items-center bg-zinc-900">
     <div className="text-white flex gap-10 w-5/6" >
      <div className="w-1/2 flex justify-center items-center ">
        <img className="w-3/4" src="https://sharonindustry.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout_us_image.b3112cb9.jpg&w=640&q=75" alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl underline">ABOUT US</h1>
        <p>
          <br />Welcome to our Sharon Industries! We are a team of professionals
          dedicated to providing top-quality products for the construction
          industry. Our product line includes a wide range of designs, including
          pillars, water cuttings, wall designs, ventilations, parapet designs,
          and fencing. <br /> <br />Our products are made with the highest quality materials
          and techniques, ensuring that they are both beautiful and functional.
          We are committed to delivering exceptional customer service and stand
          behind our products with a satisfaction guarantee. <br /> <br />Whether you're a
          contractor looking to add value to your projects or a homeowner
          looking to make a statement with your property, we have the products
          and expertise to help you achieve your goals. Thank you for
          considering our company for your concrete design needs. We look
          forward to working with you and helping bring your vision to life.
        </p>
      </div>
    </div>
   </div>
  );
}

export default about;
