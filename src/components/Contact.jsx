import React from "react";

function Contact() {
  return (
    <div className="text-white flex flex-col justify-center h-screen"  >
      <div className="flex justify-center">
      <div className=" py-5 w-4/5 border-b-2 border-t-white">
        <div className=" w-3/4  flex flex-col   gap-5 ">
          <div>
            <h1 className="font-semibold text-2xl">Contact Us</h1>
          </div>
          <div className="flex justify-between text-gray-400">
            <div className="flex flex-col gap-5 ">
              <h2>ADDRESS</h2>
              <p>
                Sharon Industries, kanjiramattom(po) Ernakulam <br />
                pin: 682315
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h2>CALL US</h2>
              <p>+91 9447797308</p>
              <p>+91 9447797888</p>
            </div>
            <div className="flex flex-col gap-5">
              <h2>EMAIL US</h2>
              <p>sharonindustries@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="justify-center flex py-10 ">
    <div className="flex justify-between w-4/5">
      <p>© 2023 SHARON. All Rights Reserved.</p>
      <div className="border rounded-lg border-red-600 w-44 h-10 flex justify-center items-center">
        <h1>Are you an admin?</h1>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Contact;
